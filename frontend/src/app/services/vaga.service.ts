import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Vaga, Candidatura } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  private vagas: Vaga[] = [];
  private vagasSubject = new BehaviorSubject<Vaga[]>([]);
  
  constructor() {
    // Adiciona vagas de teste
    this.adicionarVagasTeste();
  }

  private adicionarVagasTeste(): void {
    const vagasTeste: Vaga[] = [
      {
        id: 1,
        titulo: 'Desenvolvedor Full Stack Senior',
        descricao: 'Procuramos um desenvolvedor Full Stack experiente para liderar projetos estratégicos e mentoriar a equipe de desenvolvimento.',
        requisitos: [
          'Experiência com Angular e Node.js',
          'Conhecimento em arquitetura de software',
          'Experiência com metodologias ágeis',
          'Mínimo de 5 anos de experiência em desenvolvimento'
        ],
        dataCriacao: new Date(),
        status: 'aberta',
        departamento: 'Tecnologia'
      },
      {
        id: 2,
        titulo: 'Analista de Recursos Humanos',
        descricao: 'Buscamos profissional para atuar nos processos de recrutamento e seleção, desenvolvimento organizacional e gestão de pessoas.',
        requisitos: [
          'Formação em Psicologia ou RH',
          'Experiência com processos seletivos',
          'Conhecimento em avaliação de desempenho',
          'Boa comunicação interpessoal'
        ],
        dataCriacao: new Date(),
        status: 'aberta',
        departamento: 'Recursos Humanos'
      },
      {
        id: 3,
        titulo: 'Gerente de Projetos',
        descricao: 'Responsável por liderar equipes multidisciplinares e garantir a entrega de projetos dentro do prazo e orçamento.',
        requisitos: [
          'Certificação PMP desejável',
          'Experiência em gestão de equipes',
          'Conhecimento em metodologias ágeis',
          'Inglês avançado'
        ],
        dataCriacao: new Date(),
        status: 'aberta',
        departamento: 'Projetos'
      },
      {
        id: 4,
        titulo: 'Analista de Marketing Digital',
        descricao: 'Profissional para desenvolver e executar estratégias de marketing digital, análise de métricas e gestão de redes sociais.',
        requisitos: [
          'Experiência com ferramentas de análise',
          'Conhecimento em SEO',
          'Habilidade com redes sociais',
          'Formação em Marketing ou áreas relacionadas'
        ],
        dataCriacao: new Date(),
        status: 'aberta',
        departamento: 'Marketing'
      }
    ];

    vagasTeste.forEach(vaga => {
      this.vagas.push(vaga);
    });
    this.vagasSubject.next([...this.vagas]);
  }

  getVagas(): Observable<Vaga[]> {
    return this.vagasSubject.asObservable();
  }

  adicionarVaga(vaga: Vaga): void {
    vaga.id = this.vagas.length + 1;
    vaga.dataCriacao = new Date();
    this.vagas.push(vaga);
    this.vagasSubject.next([...this.vagas]);
  }

  atualizarVaga(vaga: Vaga): void {
    const index = this.vagas.findIndex(v => v.id === vaga.id);
    if (index !== -1) {
      this.vagas[index] = vaga;
      this.vagasSubject.next([...this.vagas]);
    }
  }

  excluirVaga(id: number): void {
    this.vagas = this.vagas.filter(v => v.id !== id);
    this.vagasSubject.next([...this.vagas]);
  }
}