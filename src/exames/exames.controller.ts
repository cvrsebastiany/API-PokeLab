import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { ExamesService } from './exames.service';
import { CreateExameDto } from './dto/create-exame.dto';
import { UpdateExameDto } from './dto/update-exame.dto';

@ApiTags('exames')
@Controller('exames')
export class ExamesController {
  constructor(private readonly examesService: ExamesService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os exames', description: 'Retorna uma lista com todos os exames cadastrados' })
  @ApiQuery({ name: 'pokemonId', required: false, description: 'ID do Pokémon para filtrar exames', type: Number })
  @ApiResponse({ status: 200, description: 'Lista de exames retornada com sucesso' })
  findAll(@Query('pokemonId') pokemonId?: string) {
    return this.examesService.findAll(pokemonId ? +pokemonId : undefined);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar exame por ID', description: 'Retorna os dados de um exame específico' })
  @ApiParam({ name: 'id', description: 'ID do exame', example: 1 })
  @ApiResponse({ status: 200, description: 'Exame encontrado' })
  @ApiResponse({ status: 404, description: 'Exame não encontrado' })
  findOne(@Param('id') id: string) {
    return this.examesService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar novo exame', description: 'Cria um novo registro de exame no sistema' })
  @ApiResponse({ status: 201, description: 'Exame criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  create(@Body() createExameDto: CreateExameDto) {
    return this.examesService.create(createExameDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar exame', description: 'Atualiza os dados de um exame existente' })
  @ApiParam({ name: 'id', description: 'ID do exame', example: 1 })
  @ApiResponse({ status: 200, description: 'Exame atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Exame não encontrado' })
  update(@Param('id') id: string, @Body() updateExameDto: UpdateExameDto) {
    return this.examesService.update(+id, updateExameDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar exame', description: 'Remove um exame do sistema' })
  @ApiParam({ name: 'id', description: 'ID do exame', example: 1 })
  @ApiResponse({ status: 204, description: 'Exame deletado com sucesso' })
  @ApiResponse({ status: 404, description: 'Exame não encontrado' })
  remove(@Param('id') id: string) {
    return this.examesService.remove(+id);
  }
}
