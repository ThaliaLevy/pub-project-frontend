export interface Evento {
    _id?: string;
    nome: string;
    foto: string;
    descricao: string;
    dataInicio: Date;
    dataFim: Date;
    horaInicio: string;
    horaFim: string;
    isActive: Boolean; 
    dataCriacao: Date;
    dataAtualizacao: Date;
    agendados: Array<Object>;
}