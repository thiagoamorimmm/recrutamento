import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="bg-blue-800 text-white w-64 min-h-screen p-4">
      <div class="mb-8">
        <h2 class="text-xl font-bold">Sistema de Recrutamento</h2>
      </div>
      
      <nav>
        <ul class="space-y-2">
          <li>
            <a routerLink="/vagas" 
               routerLinkActive="bg-blue-900"
               class="block px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Vagas Disponíveis
            </a>
          </li>
          <li>
            <a routerLink="/cadastro-vaga" 
               routerLinkActive="bg-blue-900"
               class="block px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Cadastrar Vaga
            </a>
          </li>
          <li>
            <a routerLink="/minhas-candidaturas" 
               routerLinkActive="bg-blue-900"
               class="block px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Minhas Candidaturas
            </a>
          </li>
        </ul>
      </nav>
    </div>
  `
})
export class SidebarComponent {}