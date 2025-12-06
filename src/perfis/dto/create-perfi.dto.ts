import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TipoPerfil } from '../entities/perfil.entity';

export class CreatePerfilDto {
  @ApiProperty({ 
    enum: TipoPerfil,
    example: TipoPerfil.TREINADOR,
    description: 'Tipo de perfil do usuário'
  })
  nome: TipoPerfil;

  @ApiPropertyOptional({ 
    example: 'Treinador de Pokémon responsável pelos cuidados e treinamento',
    description: 'Descrição do perfil'
  })
  descricao?: string;
}
