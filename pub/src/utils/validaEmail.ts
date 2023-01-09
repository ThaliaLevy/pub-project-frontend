import Usuarios from "../models/Usuarios";

export async function validaEmail(email: string): Promise<boolean> {
    const emailPadrao = email.toLowerCase();
    const verificaExistencia = await Usuarios.exists({ email: emailPadrao });
    if (verificaExistencia != null) {
        return false;
    } else {
        return true;
    }
}
