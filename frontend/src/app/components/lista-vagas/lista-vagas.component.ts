import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagaService } from '../../services/vaga.service';
import { Vaga } from '../../models/vaga.model';

@Component({
  selector: 'app-lista-vagas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Vagas Disponíveis</h2>
      
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div *ngFor="let vaga of vagas" class="bg-white p-4 rounded-lg shadow">
          <h3 class="text-xl font-semibold">{{vaga.titulo}}</h3>
          <p class="text-gray-600 mt-2">{{vaga.descricao}}</p>
          
          <div class="mt-3">
            <strong>Requisitos:</strong>
            <ul class="list-disc ml-5">
              <li *ngFor="let req of vaga.requisitos">{{req}}</li>
            </ul>
          </div>
          
          <div class="mt-4 flex justify-between items-center">
            <span class="text-sm text-gray-500">
              Departamento: {{vaga.departamento}}
            </span>
            <button 
              (click)="candidatar(vaga)"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Candidatar-se
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ListaVagasComponent implements OnInit {
  vagas: Vaga[] = [];

  constructor(private vagaService: VagaService) {}

  ngOnInit() {
    this.vagaService.getVagas().subscribe(vagas => {
      this.vagas = vagas;
    });
  }

  candidatar(vaga: Vaga) {
    // Implementar lógica de candidatura
    console.log('Candidatura para vaga:', vaga.titulo);
  }
}