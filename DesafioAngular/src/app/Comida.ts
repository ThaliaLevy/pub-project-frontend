export interface Comida {
    _id?: string;
    nome: string;
    foto: string;
    preco: string;
    descricao: string;
    isActive: Boolean; 
    dataCriacao: Date;
    dataAtualizacao: Date;
}