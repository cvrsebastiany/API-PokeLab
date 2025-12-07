import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TreatmentUpdatesService } from './treatment-updates.service';
import { CreateTreatmentUpdateDto } from './dto/create-treatment-update.dto';
import { UpdateTreatmentUpdateDto } from './dto/update-treatment-update.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('treatment-updates')
@Controller('treatment-updates')
@UseGuards(JwtAuthGuard)
export class TreatmentUpdatesController {
  constructor(private readonly treatmentUpdatesService: TreatmentUpdatesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar nova atualização de tratamento' })
  @ApiResponse({ status: 201, description: 'Atualização criada com sucesso.' })
  create(@Body() createTreatmentUpdateDto: CreateTreatmentUpdateDto) {
    return this.treatmentUpdatesService.create(createTreatmentUpdateDto, createTreatmentUpdateDto.medicoId);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as atualizações de tratamento ou filtrar por Pokémon' })
  @ApiResponse({ status: 200, description: 'Lista de atualizações retornada com sucesso.' })
  findAll(@Query('pokemonId') pokemonId?: string) {
    return this.treatmentUpdatesService.findAll(pokemonId ? +pokemonId : undefined);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar atualização de tratamento por ID' })
  @ApiResponse({ status: 200, description: 'Atualização encontrada.' })
  @ApiResponse({ status: 404, description: 'Atualização não encontrada.' })
  findOne(@Param('id') id: string) {
    return this.treatmentUpdatesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma atualização de tratamento' })
  @ApiResponse({ status: 200, description: 'Atualização modificada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Atualização não encontrada.' })
  update(@Param('id') id: string, @Body() updateTreatmentUpdateDto: UpdateTreatmentUpdateDto) {
    const medicoId = updateTreatmentUpdateDto.medicoId || 1;
    return this.treatmentUpdatesService.update(+id, updateTreatmentUpdateDto, medicoId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma atualização de tratamento' })
  @ApiResponse({ status: 200, description: 'Atualização deletada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Atualização não encontrada.' })
  remove(@Param('id') id: string, @Query('medicoId') medicoId?: string) {
    return this.treatmentUpdatesService.remove(+id, medicoId ? +medicoId : 1);
  }
}
