export interface Vaga {
  id?: number;
  titulo: string;
  descricao: string;
  requisitos: string[];
  dataCriacao: Date;
  status: 'aberta' | 'fechada';
  departamento: string;
}

export interface Candidatura {
  id?: number;
  vagaId: number;
  candidatoId: number;
  dataAplicacao: Date;
  status: 'pendente' | 'em_analise' | 'aprovado' | 'rejeitado';
  feedback?: string;
  avaliacoes?: Avaliacao[];
}

export interface Avaliacao {
  id?: number;
  candidaturaId: number;
  avaliadorId: number;
  criterios: CriterioAvaliacao[];
  comentario: string;
  dataAvaliacao: Date;
}

export interface CriterioAvaliacao {
  nome: string;
  nota: number; // 1 a 5
  peso: number;
}