import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { SidebarComponent } from './app/components/sidebar/sidebar.component';
import { VagasComponent } from './app/pages/vagas/vagas.component';
import { CadastroVagaPage } from './app/pages/cadastro-vaga/cadastro-vaga.page';
import { MinhasCandidaturasPage } from './app/pages/minhas-candidaturas/minhas-candidaturas.page';

const routes: Routes = [
  { path: '', redirectTo: 'vagas', pathMatch: 'full' as const },
  { path: 'vagas', component: VagasComponent },
  { path: 'cadastro-vaga', component: CadastroVagaPage },
  { path: 'minhas-candidaturas', component: MinhasCandidaturasPage }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, SidebarComponent],
  template: `
    <div class="flex min-h-screen bg-gray-100">
      <app-sidebar></app-sidebar>
      <main class="flex-1">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class App {}

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});