import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateExameBioquimicaDto {
  @ApiProperty({ example: 1, description: 'ID do Pokémon' })
  pokemonId: number;

  @ApiPropertyOptional({ example: 1, description: 'ID do técnico responsável' })
  tecnicoId?: number;

  @ApiPropertyOptional({ example: 90, description: 'Glicose (mg/dL)' })
  glicose?: number;

  @ApiPropertyOptional({ example: 30, description: 'Ureia (mg/dL)' })
  ureia?: number;

  @ApiPropertyOptional({ example: 1.2, description: 'Creatinina (mg/dL)' })
  creatinina?: number;

  @ApiPropertyOptional({ example: 180, description: 'Colesterol Total (mg/dL)' })
  colesterolTotal?: number;

  @ApiPropertyOptional({ example: 150, description: 'Triglicerídeos (mg/dL)' })
  triglicerideos?: number;

  @ApiPropertyOptional({ example: 40, description: 'ALT/TGP (U/L)' })
  alt?: number;

  @ApiPropertyOptional({ example: 35, description: 'AST/TGO (U/L)' })
  ast?: number;

  @ApiPropertyOptional({ example: 80, description: 'Fosfatase Alcalina (U/L)' })
  fosfataseAlcalina?: number;

  @ApiPropertyOptional({ example: 1.0, description: 'Bilirrubina Total (mg/dL)' })
  bilirrubinaTotal?: number;

  @ApiPropertyOptional({ example: 0.7, description: 'Bilirrubina Indireta (mg/dL)' })
  bilirrubinaIndireta?: number;

  @ApiPropertyOptional({ example: 0.3, description: 'Bilirrubina Conjugada (mg/dL)' })
  bilirrubinaConjugada?: number;

  @ApiPropertyOptional({ example: 9.5, description: 'Cálcio (mg/dL)' })
  calcio?: number;

  @ApiPropertyOptional({ example: 3.5, description: 'Fósforo (mg/dL)' })
  fosforo?: number;

  @ApiPropertyOptional({ example: 2.1, description: 'Magnésio (mg/dL)' })
  magnesio?: number;

  @ApiPropertyOptional({ example: 140, description: 'Sódio (mEq/L)' })
  sodio?: number;

  @ApiPropertyOptional({ example: 4.5, description: 'Potássio (mEq/L)' })
  potassio?: number;

  @ApiPropertyOptional({ example: 100, description: 'Cloro (mEq/L)' })
  cloro?: number;

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
