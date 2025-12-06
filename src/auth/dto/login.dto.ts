import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ 
    example: 'ash@pokemon.com',
    description: 'Email do usuário'
  })
  email: string;

  @ApiProperty({ 
    example: 'senha123',
    description: 'Senha do usuário'
  })
  senha: string;
}
