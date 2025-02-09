import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidaturaService } from '../../services/candidatura.service';
import { Candidatura } from '../../models/vaga.model';

@Component({
  selector: 'app-painel-candidato',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-6">Minhas Candidaturas</h2>

      <div class="grid gap-4">
        <div *ngFor="let candidatura of candidaturas" 
             class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-semibold">{{candidatura.vagaId}}</h3>
              <p class="text-sm text-gray-600">
                Data da candidatura: {{candidatura.dataAplicacao | date:'dd/MM/yyyy'}}
              </p>
            </div>
            <span [ngClass]="{
              'bg-yellow-100 text-yellow-800': candidatura.status === 'pendente',
              'bg-blue-100 text-blue-800': candidatura.status === 'em_analise',
              'bg-green-100 text-green-800': candidatura.status === 'aprovado',
              'bg-red-100 text-red-800': candidatura.status === 'rejeitado'
            }" class="px-3 py-1 rounded-full text-sm font-medium">
              {{candidatura.status | titlecase}}
            </span>
          </div>

          <div *ngIf="candidatura.feedback" class="mt-4 p-4 bg-gray-50 rounded">
            <h4 class="font-semibold mb-2">Feedback</h4>
            <p class="text-gray-700">{{candidatura.feedback}}</p>
          </div>

          <div *ngIf="candidatura.avaliacoes?.length" class="mt-4">
            <h4 class="font-semibold mb-2">Avaliações</h4>
            <div *ngFor="let avaliacao of candidatura.avaliacoes" 
                 class="border-t pt-3 mt-3">
              <p class="text-sm text-gray-600">
                Data da avaliação: {{avaliacao.dataAvaliacao | date:'dd/MM/yyyy'}}
              </p>
              <div class="mt-2">
                <h5 class="font-medium">Critérios:</h5>
                <ul class="list-disc ml-5">
                  <li *ngFor="let criterio of avaliacao.criterios" class="text-sm">
                    {{criterio.nome}}: {{criterio.nota}}/5
                  </li>
                </ul>
              </div>
              <p class="mt-2 text-gray-700">{{avaliacao.comentario}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PainelCandidatoComponent implements OnInit {
  candidaturas: Candidatura[] = [];
  candidatoId = 1; // Simulando um usuário logado

  constructor(private candidaturaService: CandidaturaService) {}

  ngOnInit() {
    this.candidaturaService.getCandidaturasPorCandidato(this.candidatoId)
      .subscribe(candidaturas => {
        this.candidaturas = candidaturas;
      });
  }
}