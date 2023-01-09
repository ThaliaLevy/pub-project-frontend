import bcrypt from 'bcrypt';

export async function hashSenha (senha: string): Promise<string> {
    const hash = await bcrypt.hash(senha, 8)
    return hash
}