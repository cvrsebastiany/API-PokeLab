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
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PerfisService } from './perfis.service';
import { CreatePerfilDto } from './dto/create-perfi.dto';
import { UpdatePerfilDto } from './dto/update-perfi.dto';

@ApiTags('perfis')
@Controller('perfis')
export class PerfisController {
  constructor(private readonly perfisService: PerfisService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo perfil', description: 'Cria um novo tipo de perfil de usuário' })
  @ApiResponse({ status: 201, description: 'Perfil criado com sucesso' })
  @ApiResponse({ status: 409, description: 'Perfil já existe' })
  create(@Body() createPerfilDto: CreatePerfilDto) {
    return this.perfisService.create(createPerfilDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os perfis', description: 'Retorna todos os tipos de perfis disponíveis' })
  @ApiResponse({ status: 200, description: 'Lista de perfis retornada com sucesso' })
  findAll() {
    return this.perfisService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar perfil por ID', description: 'Retorna os dados de um perfil específico' })
  @ApiParam({ name: 'id', description: 'ID do perfil', example: 1 })
  @ApiResponse({ status: 200, description: 'Perfil encontrado' })
  @ApiResponse({ status: 404, description: 'Perfil não encontrado' })
  findOne(@Param('id') id: string) {
    return this.perfisService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar perfil', description: 'Atualiza os dados de um perfil existente' })
  @ApiParam({ name: 'id', description: 'ID do perfil', example: 1 })
  @ApiResponse({ status: 200, description: 'Perfil atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Perfil não encontrado' })
  update(@Param('id') id: string, @Body() updatePerfilDto: UpdatePerfilDto) {
    return this.perfisService.update(+id, updatePerfilDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar perfil', description: 'Remove um perfil do sistema' })
  @ApiParam({ name: 'id', description: 'ID do perfil', example: 1 })
  @ApiResponse({ status: 204, description: 'Perfil deletado com sucesso' })
  @ApiResponse({ status: 404, description: 'Perfil não encontrado' })
  remove(@Param('id') id: string) {
    return this.perfisService.remove(+id);
  }
}
