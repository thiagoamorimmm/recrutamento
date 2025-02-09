import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Candidatura, Avaliacao } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class CandidaturaService {
  private candidaturas: Candidatura[] = [];
  private candidaturasSubject = new BehaviorSubject<Candidatura[]>([]);

  constructor() {}

  getCandidaturas(): Observable<Candidatura[]> {
    return this.candidaturasSubject.asObservable();
  }

  getCandidaturasPorCandidato(candidatoId: number): Observable<Candidatura[]> {
    const candidaturasFiltradas = this.candidaturas.filter(c => c.candidatoId === candidatoId);
    return new BehaviorSubject<Candidatura[]>(candidaturasFiltradas).asObservable();
  }

  criarCandidatura(candidatura: Candidatura): void {
    candidatura.id = this.candidaturas.length + 1;
    candidatura.dataAplicacao = new Date();
    candidatura.status = 'pendente';
    this.candidaturas.push(candidatura);
    this.candidaturasSubject.next([...this.candidaturas]);
  }

  adicionarAvaliacao(candidaturaId: number, avaliacao: Avaliacao): void {
    const candidatura = this.candidaturas.find(c => c.id === candidaturaId);
    if (candidatura) {
      if (!candidatura.avaliacoes) {
        candidatura.avaliacoes = [];
      }
      avaliacao.id = candidatura.avaliacoes.length + 1;
      avaliacao.dataAvaliacao = new Date();
      candidatura.avaliacoes.push(avaliacao);
      this.candidaturasSubject.next([...this.candidaturas]);
    }
  }

  atualizarStatusCandidatura(candidaturaId: number, novoStatus: Candidatura['status'], feedback?: string): void {
    const candidatura = this.candidaturas.find(c => c.id === candidaturaId);
    if (candidatura) {
      candidatura.status = novoStatus;
      if (feedback) {
        candidatura.feedback = feedback;
      }
      this.candidaturasSubject.next([...this.candidaturas]);
    }
  }
}