import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelCandidatoComponent } from '../../components/painel-candidato/painel-candidato.component';

@Component({
  selector: 'app-minhas-candidaturas-page',
  standalone: true,
  imports: [CommonModule, PainelCandidatoComponent],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-6">Minhas Candidaturas</h1>
      <app-painel-candidato></app-painel-candidato>
    </div>
  `
})
export class MinhasCandidaturasPage {}