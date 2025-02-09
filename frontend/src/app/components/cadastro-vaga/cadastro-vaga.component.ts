import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VagaService } from '../../services/vaga.service';
import { Vaga } from '../../models/vaga.model';

@Component({
  selector: 'app-cadastro-vaga',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Cadastrar Nova Vaga</h2>
      
      <form (ngSubmit)="onSubmit()" class="max-w-lg">
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Título</label>
          <input 
            [(ngModel)]="novaVaga.titulo"
            name="titulo"
            class="w-full p-2 border rounded"
            required>
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Descrição</label>
          <textarea 
            [(ngModel)]="novaVaga.descricao"
            name="descricao"
            class="w-full p-2 border rounded"
            rows="4"
            required></textarea>
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Departamento</label>
          <input 
            [(ngModel)]="novaVaga.departamento"
            name="departamento"
            class="w-full p-2 border rounded"
            required>
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Requisitos (um por linha)</label>
          <textarea 
            [(ngModel)]="requisitosText"
            name="requisitos"
            class="w-full p-2 border rounded"
            rows="4"
            required></textarea>
        </div>
        
        <button 
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Cadastrar Vaga
        </button>
      </form>
    </div>
  `
})
export class CadastroVagaComponent {
  novaVaga: Vaga = {
    titulo: '',
    descricao: '',
    requisitos: [],
    dataCriacao: new Date(),
    status: 'aberta',
    departamento: ''
  };
  
  requisitosText: string = '';

  constructor(private vagaService: VagaService) {}

  onSubmit() {
    this.novaVaga.requisitos = this.requisitosText
      .split('\n')
      .map(req => req.trim())
      .filter(req => req.length > 0);
      
    this.vagaService.adicionarVaga({...this.novaVaga});
    
    // Limpar formulário
    this.novaVaga = {
      titulo: '',
      descricao: '',
      requisitos: [],
      dataCriacao: new Date(),
      status: 'aberta',
      departamento: ''
    };
    this.requisitosText = '';
  }
}