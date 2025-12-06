import { TipoPerfil } from '../entities/perfil.entity';

export class CreatePerfilDto {
  nome: TipoPerfil;
  descricao?: string;
}
