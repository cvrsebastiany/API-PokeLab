import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExameUrinaDto } from './dto/create-exame-urina.dto';
import { UpdateExameUrinaDto } from './dto/update-exame-urina.dto';
import { ExameUrina } from './entities/exame-urina.entity';

@Injectable()
export class ExamesUrinaService {
  constructor(
    @InjectRepository(ExameUrina)
    private examesUrinaRepository: Repository<ExameUrina>,
  ) {}

  create(createExameUrinaDto: CreateExameUrinaDto) {
    const exame = this.examesUrinaRepository.create(createExameUrinaDto);
    return this.examesUrinaRepository.save(exame);
  }

  findAll(pokemonId?: number, status?: 'Pendente' | 'Em andamento' | 'Concluído') {
    const where: any = {};
    
    if (pokemonId) {
      where.pokemonId = pokemonId;
    }
    
    if (status) {
      where.status = status;
    }
    
    return this.examesUrinaRepository.find({
      where: Object.keys(where).length > 0 ? where : undefined,
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const exame = await this.examesUrinaRepository.findOne({ where: { id } });
    if (!exame) {
      throw new NotFoundException(`Exame de urina com ID ${id} não encontrado`);
    }
    return exame;
  }

  async update(id: number, updateExameUrinaDto: UpdateExameUrinaDto) {
    const exame = await this.findOne(id);
    Object.assign(exame, updateExameUrinaDto);
    return this.examesUrinaRepository.save(exame);
  }

  async remove(id: number) {
    const exame = await this.findOne(id);
    await this.examesUrinaRepository.remove(exame);
  }
}
