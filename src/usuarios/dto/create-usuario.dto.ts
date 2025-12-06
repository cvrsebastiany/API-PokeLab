export class CreateUsuarioDto {
  email: string;
  nome: string;
  senha: string;
  telefone?: string;
  perfilId: number;
  ativo?: boolean;
}
