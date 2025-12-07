import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateExameUrinaDto {
  @ApiProperty({ example: 1, description: 'ID do Pokémon' })
  pokemonId: number;

  @ApiPropertyOptional({ example: 1, description: 'ID do técnico responsável' })
  tecnicoId?: number;

  @ApiPropertyOptional({ example: 'Amarelo claro', description: 'Cor da urina' })
  cor?: string;

  @ApiPropertyOptional({ example: 6.5, description: 'pH da urina' })
  pH?: number;

  @ApiPropertyOptional({ example: 0.5, description: 'Proteínas (g/dL)' })
  proteinas?: number;

  @ApiPropertyOptional({ 
    enum: ['Pendente', 'Em andamento', 'Concluído'],
    example: 'Pendente',
    description: 'Status do exame'
  })
  status?: 'Pendente' | 'Em andamento' | 'Concluído';

  @ApiPropertyOptional({ example: 'Valores dentro da normalidade', description: 'Observações sobre o exame' })
  observacoes?: string;

  @ApiPropertyOptional({ example: '2024-12-01T10:00:00Z', description: 'Data da coleta' })
  dataColeta?: Date;

  @ApiPropertyOptional({ example: '2024-12-01T14:00:00Z', description: 'Data do resultado' })
  dataResultado?: Date;
}
