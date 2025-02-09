import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaVagasComponent } from '../../components/lista-vagas/lista-vagas.component';

@Component({
  selector: 'app-vagas',
  standalone: true,
  imports: [CommonModule, ListaVagasComponent],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-6">Vagas Disponíveis</h1>
      <app-lista-vagas></app-lista-vagas>
    </div>
  `
})
export class VagasComponent {}