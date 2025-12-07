import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTreatmentUpdateDto {
  @ApiProperty({ example: 1, description: 'ID do Pokémon' })
  @IsNumber()
  @Type(() => Number)
  pokemonId: number;

  @ApiProperty({ example: 1, description: 'ID do médico' })
  @IsNumber()
  @Type(() => Number)
  medicoId: number;

  @ApiProperty({ 
    example: 'Paciente apresentou melhora significativa após administração do medicamento. Recomenda-se continuar com o tratamento atual.',
    description: 'Descrição da atualização do tratamento' 
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
