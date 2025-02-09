import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CandidaturaService } from '../../services/candidatura.service';
import { Candidatura, Avaliacao, CriterioAvaliacao } from '../../models/vaga.model';

@Component({
  selector: 'app-avaliacao-candidatura',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-bold mb-4">Avaliar Candidatura</h3>

      <form (ngSubmit)="onSubmit()" class="space-y-4">
        <div *ngFor="let criterio of avaliacao.criterios; let i = index">
          <label class="block text-sm font-medium text-gray-700">
            {{criterio.nome}}
          </label>
          <div class="mt-1 flex items-center space-x-4">
            <input type="range" min="1" max="5" 
                   [(ngModel)]="criterio.nota"
                   [name]="'criterio' + i"
                   class="w-full">
            <span class="text-sm">{{criterio.nota}}/5</span>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">
            Comentários
          </label>
          <textarea
            [(ngModel)]="avaliacao.comentario"
            name="comentario"
            rows="4"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
        </div>

        <div class="flex justify-between items-center">
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Status da Candidatura
            </label>
            <select
              [(ngModel)]="novoStatus"
              name="status"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="pendente">Pendente</option>
              <option value="em_analise">Em Análise</option>
              <option value="aprovado">Aprovado</option>
              <option value="rejeitado">Rejeitado</option>
            </select>
          </div>

          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Salvar Avaliação
          </button>
        </div>
      </form>
    </div>
  `
})
export class AvaliacaoCandidaturaComponent {
  @Input() candidaturaId!: number;
  
  avaliacao: Avaliacao = {
    candidaturaId: 0,
    avaliadorId: 1, // Simulando um avaliador logado
    criterios: [
      { nome: 'Experiência Técnica', nota: 3, peso: 2 },
      { nome: 'Comunicação', nota: 3, peso: 1 },
      { nome: 'Trabalho em Equipe', nota: 3, peso: 1 },
      { nome: 'Proatividade', nota: 3, peso: 1 }
    ],
    comentario: '',
    dataAvaliacao: new Date()
  };

  novoStatus: Candidatura['status'] = 'em_analise';

  constructor(private candidaturaService: CandidaturaService) {}

  ngOnInit() {
    if (this.candidaturaId) {
      this.avaliacao.candidaturaId = this.candidaturaId;
    }
  }

  onSubmit() {
    this.candidaturaService.adicionarAvaliacao(this.candidaturaId, {...this.avaliacao});
    this.candidaturaService.atualizarStatusCandidatura(this.candidaturaId, this.novoStatus);
  }
}