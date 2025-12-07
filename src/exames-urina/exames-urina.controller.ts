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
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { ExamesUrinaService } from './exames-urina.service';
import { CreateExameUrinaDto } from './dto/create-exame-urina.dto';
import { UpdateExameUrinaDto } from './dto/update-exame-urina.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('exames-urina')
@Controller('exames-urina')
@UseGuards(JwtAuthGuard)
export class ExamesUrinaController {
  constructor(private readonly examesUrinaService: ExamesUrinaService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os exames de urina', description: 'Retorna uma lista com todos os exames de urina cadastrados' })
  @ApiQuery({ name: 'pokemonId', required: false, description: 'ID do Pokémon para filtrar exames', type: Number })
  @ApiQuery({ name: 'status', required: false, description: 'Status do exame para filtrar', enum: ['Pendente', 'Em andamento', 'Concluído'] })
  @ApiResponse({ status: 200, description: 'Lista de exames retornada com sucesso' })
  findAll(
    @Query('pokemonId') pokemonId?: string,
    @Query('status') status?: 'Pendente' | 'Em andamento' | 'Concluído',
  ) {
    return this.examesUrinaService.findAll(
      pokemonId ? +pokemonId : undefined,
      status,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar exame de urina por ID', description: 'Retorna os dados de um exame de urina específico' })
  @ApiParam({ name: 'id', description: 'ID do exame', example: 1 })
  @ApiResponse({ status: 200, description: 'Exame encontrado' })
  @ApiResponse({ status: 404, description: 'Exame não encontrado' })
  findOne(@Param('id') id: string) {
    return this.examesUrinaService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar novo exame de urina', description: 'Cria um novo registro de exame de urina no sistema' })
  @ApiResponse({ status: 201, description: 'Exame criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  create(@Body() createExameUrinaDto: CreateExameUrinaDto) {
    return this.examesUrinaService.create(createExameUrinaDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar exame de urina', description: 'Atualiza os dados de um exame de urina existente' })
  @ApiParam({ name: 'id', description: 'ID do exame', example: 1 })
  @ApiResponse({ status: 200, description: 'Exame atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Exame não encontrado' })
  update(@Param('id') id: string, @Body() updateExameUrinaDto: UpdateExameUrinaDto) {
    return this.examesUrinaService.update(+id, updateExameUrinaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar exame de urina', description: 'Remove um exame de urina do sistema' })
  @ApiParam({ name: 'id', description: 'ID do exame', example: 1 })
  @ApiResponse({ status: 204, description: 'Exame deletado com sucesso' })
  @ApiResponse({ status: 404, description: 'Exame não encontrado' })
  remove(@Param('id') id: string) {
    return this.examesUrinaService.remove(+id);
  }
}
