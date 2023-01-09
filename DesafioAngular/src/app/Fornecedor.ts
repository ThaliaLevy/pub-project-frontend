export interface Fornecedor {
    _id?: string;
    nome: string;
    foto: string;
    descricao: string;
    isActive: Boolean; 
    dataCriacao: Date;
    dataAtualizacao: Date;
}