import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateExameDto {
  @ApiProperty({ example: 1, description: 'ID do Pokémon' })
  pokemonId: number;

  @ApiPropertyOptional({ example: 1, description: 'ID do técnico responsável' })
  tecnicoId?: number;

  @ApiPropertyOptional({ example: 15.5, description: 'Hemoglobina (g/dL)' })
  hemoglobina?: number;

  @ApiPropertyOptional({ example: 8000, description: 'Leucócitos (células/µL)' })
  leucocitos?: number;

  @ApiPropertyOptional({ example: 250000, description: 'Plaquetas (células/µL)' })
  plaquetas?: number;

  @ApiPropertyOptional({ example: 'Amarelo claro', description: 'Cor da urina' })
  cor?: string;

  @ApiPropertyOptional({ example: 6.5, description: 'pH' })
  pH?: number;

  @ApiPropertyOptional({ example: 7.2, description: 'Proteínas (g/dL)' })
  proteinas?: number;

  @ApiPropertyOptional({ example: 90, description: 'Glicose (mg/dL)' })
  glicose?: number;

  @ApiPropertyOptional({ example: 30, description: 'Ureia (mg/dL)' })
  ureia?: number;

  @ApiPropertyOptional({ example: 1.2, description: 'Creatinina (mg/dL)' })
  creatinina?: number;

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
