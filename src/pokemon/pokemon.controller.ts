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
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('pokemon')
@Controller('pokemon')
@UseGuards(JwtAuthGuard)
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os Pokémon', description: 'Retorna uma lista com todos os Pokémon cadastrados' })
  @ApiQuery({ name: 'trainerId', required: false, description: 'ID do treinador para filtrar Pokémon', type: Number })
  @ApiResponse({ status: 200, description: 'Lista de Pokémon retornada com sucesso' })
  findAll(@Query('trainerId') trainerId?: string) {
    return this.pokemonService.findAll(trainerId ? +trainerId : undefined);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar Pokémon por ID', description: 'Retorna os dados de um Pokémon específico' })
  @ApiParam({ name: 'id', description: 'ID do Pokémon', example: 1 })
  @ApiResponse({ status: 200, description: 'Pokémon encontrado' })
  @ApiResponse({ status: 404, description: 'Pokémon não encontrado' })
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar novo Pokémon', description: 'Cria um novo registro de Pokémon no sistema' })
  @ApiResponse({ status: 201, description: 'Pokémon criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Pokémon', description: 'Atualiza os dados de um Pokémon existente' })
  @ApiParam({ name: 'id', description: 'ID do Pokémon', example: 1 })
  @ApiResponse({ status: 200, description: 'Pokémon atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Pokémon não encontrado' })
  update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(+id, updatePokemonDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar Pokémon', description: 'Remove um Pokémon do sistema' })
  @ApiParam({ name: 'id', description: 'ID do Pokémon', example: 1 })
  @ApiResponse({ status: 204, description: 'Pokémon deletado com sucesso' })
  @ApiResponse({ status: 404, description: 'Pokémon não encontrado' })
  remove(@Param('id') id: string) {
    return this.pokemonService.remove(+id);
  }
}
