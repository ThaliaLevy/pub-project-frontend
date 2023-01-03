export interface Agendamento {
    idUsuario: string;
    idEvento: string;
    nomeUsuario?: string;
    nomeEvento?: string;
    data?: Date;
    hora?: string;
}