import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional, IsEnum, IsDateString, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateExameBioquimicaDto {
  @ApiProperty({ example: 1, description: 'ID do Pokémon' })
  @IsNumber()
  @Type(() => Number)
  pokemonId: number;

  @ApiPropertyOptional({ example: 1, description: 'ID do técnico responsável' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  tecnicoId?: number;

  @ApiPropertyOptional({ example: 90, description: 'Glicose (mg/dL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(9999.99)
  @Type(() => Number)
  glicose?: number;

  @ApiPropertyOptional({ example: 30, description: 'Ureia (mg/dL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(9999.99)
  @Type(() => Number)
  ureia?: number;

  @ApiPropertyOptional({ example: 1.2, description: 'Creatinina (mg/dL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(999.99)
  @Type(() => Number)
  creatinina?: number;

  @ApiPropertyOptional({ example: 180, description: 'Colesterol Total (mg/dL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(9999.99)
  @Type(() => Number)
  colesterolTotal?: number;

  @ApiPropertyOptional({ example: 150, description: 'Triglicerídeos (mg/dL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(9999.99)
  @Type(() => Number)
  triglicerideos?: number;

  @ApiPropertyOptional({ example: 40, description: 'ALT/TGP (U/L)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(9999.99)
  @Type(() => Number)
  alt?: number;

  @ApiPropertyOptional({ example: 35, description: 'AST/TGO (U/L)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(9999.99)
  @Type(() => Number)
  ast?: number;

  @ApiPropertyOptional({ example: 80, description: 'Fosfatase Alcalina (U/L)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(9999.99)
  @Type(() => Number)
  fosfataseAlcalina?: number;

  @ApiPropertyOptional({ example: 1.0, description: 'Bilirrubina Total (mg/dL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(999.99)
  @Type(() => Number)
  bilirrubinaTotal?: number;

  @ApiPropertyOptional({ example: 0.7, description: 'Bilirrubina Indireta (mg/dL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(999.99)
  @Type(() => Number)
  bilirrubinaIndireta?: number;

  @ApiPropertyOptional({ example: 0.3, description: 'Bilirrubina Conjugada (mg/dL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(999.99)
  @Type(() => Number)
  bilirrubinaConjugada?: number;

  @ApiPropertyOptional({ example: 9.5, description: 'Cálcio (mg/dL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(99.99)
  @Type(() => Number)
  calcio?: number;

  @ApiPropertyOptional({ example: 3.5, description: 'Fósforo (mg/dL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(99.99)
  @Type(() => Number)
  fosforo?: number;

  @ApiPropertyOptional({ example: 2.1, description: 'Magnésio (mg/dL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(99.99)
  @Type(() => Number)
  magnesio?: number;

  @ApiPropertyOptional({ example: 140, description: 'Sódio (mEq/L)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(999.99)
  @Type(() => Number)
  sodio?: number;

  @ApiPropertyOptional({ example: 4.5, description: 'Potássio (mEq/L)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(99.99)
  @Type(() => Number)
  potassio?: number;

  @ApiPropertyOptional({ example: 100, description: 'Cloro (mEq/L)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(999.99)
  @Type(() => Number)
  cloro?: number;

  @ApiPropertyOptional({ 
    enum: ['Pendente', 'Em andamento', 'Concluído'],
    example: 'Pendente',
    description: 'Status do exame'
  })
  @IsOptional()
  @IsEnum(['Pendente', 'Em andamento', 'Concluído'])
  status?: 'Pendente' | 'Em andamento' | 'Concluído';

  @ApiPropertyOptional({ example: 'Valores dentro da normalidade', description: 'Observações sobre o exame' })
  @IsOptional()
  @IsString()
  observacoes?: string;

  @ApiPropertyOptional({ example: '2024-12-01T10:00:00Z', description: 'Data da coleta' })
  @IsOptional()
  dataColeta?: Date;

  @ApiPropertyOptional({ example: '2024-12-01T14:00:00Z', description: 'Data do resultado' })
  @IsOptional()
  dataResultado?: Date;
}
