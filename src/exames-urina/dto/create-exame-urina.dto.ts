import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString, IsEnum, IsDateString, Min, Max, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateExameUrinaDto {
  @ApiProperty({ example: 1, description: 'ID do Pokémon' })
  @IsNumber()
  @Type(() => Number)
  pokemonId: number;

  @ApiPropertyOptional({ example: 1, description: 'ID do técnico responsável' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  tecnicoId?: number;

  @ApiPropertyOptional({ example: 'Amarelo claro', description: 'Cor da urina' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  cor?: string;

  @ApiPropertyOptional({ example: 6.5, description: 'pH da urina (0.00 - 14.00)' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(14)
  pH?: number;

  @ApiPropertyOptional({ example: 0.5, description: 'Proteínas (g/dL) (0.00 - 999.99)' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(999.99)
  proteinas?: number;

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
