export interface Usuario{
    _id?: string;
    nome: string;
    isAdmin: Boolean;
    cpf: string; 
    telefone: string;
    email: string; 
    senha: string;     
    isActive: Boolean; 
    dataCriacao: Date;
    dataAtualizacao: Date;
    eventos: Array<Object>;
}