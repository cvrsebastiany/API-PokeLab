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
import { ExamesBioquimicaService } from './exames-bioquimica.service';
import { CreateExameBioquimicaDto } from './dto/create-exame-bioquimica.dto';
import { UpdateExameBioquimicaDto } from './dto/update-exame-bioquimica.dto';

@ApiTags('exames-bioquimica')
@Controller('exames-bioquimica')
export class ExamesBioquimicaController {
  constructor(private readonly examesBioquimicaService: ExamesBioquimicaService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os exames de bioquímica', description: 'Retorna uma lista com todos os exames de bioquímica cadastrados' })
  @ApiQuery({ name: 'pokemonId', required: false, description: 'ID do Pokémon para filtrar exames', type: Number })
  @ApiQuery({ name: 'status', required: false, description: 'Status do exame para filtrar', enum: ['Pendente', 'Em andamento', 'Concluído'] })
  @ApiResponse({ status: 200, description: 'Lista de exames retornada com sucesso' })
  findAll(
    @Query('pokemonId') pokemonId?: string,
    @Query('status') status?: 'Pendente' | 'Em andamento' | 'Concluído',
  ) {
    return this.examesBioquimicaService.findAll(
      pokemonId ? +pokemonId : undefined,
      status,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar exame de bioquímica por ID', description: 'Retorna os dados de um exame de bioquímica específico' })
  @ApiParam({ name: 'id', description: 'ID do exame', example: 1 })
  @ApiResponse({ status: 200, description: 'Exame encontrado' })
  @ApiResponse({ status: 404, description: 'Exame não encontrado' })
  findOne(@Param('id') id: string) {
    return this.examesBioquimicaService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar novo exame de bioquímica', description: 'Cria um novo registro de exame de bioquímica no sistema' })
  @ApiResponse({ status: 201, description: 'Exame criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  create(@Body() createExameBioquimicaDto: CreateExameBioquimicaDto) {
    return this.examesBioquimicaService.create(createExameBioquimicaDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar exame de bioquímica', description: 'Atualiza os dados de um exame de bioquímica existente' })
  @ApiParam({ name: 'id', description: 'ID do exame', example: 1 })
  @ApiResponse({ status: 200, description: 'Exame atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Exame não encontrado' })
  update(@Param('id') id: string, @Body() updateExameBioquimicaDto: UpdateExameBioquimicaDto) {
    return this.examesBioquimicaService.update(+id, updateExameBioquimicaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar exame de bioquímica', description: 'Remove um exame de bioquímica do sistema' })
  @ApiParam({ name: 'id', description: 'ID do exame', example: 1 })
  @ApiResponse({ status: 204, description: 'Exame deletado com sucesso' })
  @ApiResponse({ status: 404, description: 'Exame não encontrado' })
  remove(@Param('id') id: string) {
    return this.examesBioquimicaService.remove(+id);
  }
}
