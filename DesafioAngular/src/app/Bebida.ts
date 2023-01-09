export interface Bebida {
    _id?: string;
    nome: string;
    foto: string;
    preco: string;
    descricao: string;
    isActive: Boolean; 
    dataCriacao: Date;
    dataAtualizacao: Date;
}