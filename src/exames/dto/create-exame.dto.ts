import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional, IsEnum, IsDateString, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateExameDto {
  @ApiProperty({ example: 1, description: 'ID do Pokémon' })
  @IsNumber()
  @Type(() => Number)
  pokemonId: number;

  @ApiPropertyOptional({ example: 1, description: 'ID do técnico responsável' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  tecnicoId?: number;

  @ApiPropertyOptional({ example: 15.5, description: 'Hemoglobina (g/dL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(99.99)
  @Type(() => Number)
  hemoglobina?: number;

  @ApiPropertyOptional({ example: 8000, description: 'Leucócitos (células/µL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(999999)
  @Type(() => Number)
  leucocitos?: number;

  @ApiPropertyOptional({ example: 250000, description: 'Plaquetas (células/µL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(999999)
  @Type(() => Number)
  plaquetas?: number;

  @ApiPropertyOptional({ example: 'Amarelo claro', description: 'Cor da urina' })
  @IsOptional()
  @IsString()
  cor?: string;

  @ApiPropertyOptional({ example: 6.5, description: 'pH' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(14)
  @Type(() => Number)
  pH?: number;

  @ApiPropertyOptional({ example: 7.2, description: 'Proteínas (g/dL)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(999.99)
  @Type(() => Number)
  proteinas?: number;

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
