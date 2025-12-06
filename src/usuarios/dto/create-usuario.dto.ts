import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({ 
    example: 'ash@pokemon.com',
    description: 'Email do usuário (deve ser único)'
  })
  email: string;

  @ApiProperty({ 
    example: 'Ash Ketchum',
    description: 'Nome completo do usuário'
  })
  nome: string;

  @ApiProperty({ 
    example: 'senha123',
    description: 'Senha do usuário (será criptografada)'
  })
  senha: string;

  @ApiPropertyOptional({ 
    example: '(11) 98765-4321',
    description: 'Telefone de contato'
  })
  telefone?: string;

  @ApiProperty({ 
    example: 1,
    description: 'ID do perfil do usuário'
  })
  perfilId: number;

  @ApiPropertyOptional({ 
    example: true,
    description: 'Status ativo/inativo do usuário',
    default: true
  })
  ativo?: boolean;
}
