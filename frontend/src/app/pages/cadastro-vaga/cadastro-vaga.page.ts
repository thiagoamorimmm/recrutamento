import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroVagaComponent } from '../../components/cadastro-vaga/cadastro-vaga.component';

@Component({
  selector: 'app-cadastro-vaga-page',
  standalone: true,
  imports: [CommonModule, CadastroVagaComponent],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-6">Cadastrar Nova Vaga</h1>
      <app-cadastro-vaga></app-cadastro-vaga>
    </div>
  `
})
export class CadastroVagaPage {}