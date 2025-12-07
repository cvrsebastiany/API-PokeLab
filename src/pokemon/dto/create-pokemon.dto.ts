import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePokemonDto {
  @ApiProperty({ example: 'Pikachu', description: 'Nome do Pokémon' })
  name: string;

  @ApiProperty({ example: 'Pikachu', description: 'Espécie do Pokémon' })
  species: string;

  @ApiProperty({ example: 'Electric', description: 'Tipo do Pokémon' })
  type: string;

  @ApiPropertyOptional({ example: 25, description: 'Nível do Pokémon' })
  level?: number;

  @ApiPropertyOptional({ example: 85, description: 'Pontos de vida (HP)' })
  hp?: number;

  @ApiPropertyOptional({ example: 75, description: 'Pontos de ataque' })
  attack?: number;

  @ApiPropertyOptional({ example: 60, description: 'Pontos de defesa' })
  defense?: number;

  @ApiProperty({ example: 1, description: 'ID do treinador (usuário)' })
  trainerId: number;

  @ApiPropertyOptional({ 
    enum: ['Saudável', 'Doente', 'Em tratamento', 'Curado'],
    example: 'Saudável',
    description: 'Status de saúde do Pokémon'
  })
  status?: 'Saudável' | 'Doente' | 'Em tratamento' | 'Curado';

  @ApiPropertyOptional({ example: '2024-12-01T00:00:00Z', description: 'Data do último checkup' })
  lastCheckup?: Date;

  @ApiPropertyOptional({ example: 'Regular checkup completed', description: 'Notas sobre o Pokémon' })
  notes?: string;
}
