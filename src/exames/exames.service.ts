import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExameDto } from './dto/create-exame.dto';
import { UpdateExameDto } from './dto/update-exame.dto';
import { Exame } from './entities/exame.entity';

@Injectable()
export class ExamesService {
  constructor(
    @InjectRepository(Exame)
    private examesRepository: Repository<Exame>,
  ) {}

  create(createExameDto: CreateExameDto) {
    const exame = this.examesRepository.create(createExameDto);
    return this.examesRepository.save(exame);
  }

  findAll(pokemonId?: number, status?: 'Pendente' | 'Em andamento' | 'Concluído') {
    const where: any = {};
    
    if (pokemonId) {
      where.pokemonId = pokemonId;
    }
    
    if (status) {
      where.status = status;
    }
    
    return this.examesRepository.find({
      where: Object.keys(where).length > 0 ? where : undefined,
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const exame = await this.examesRepository.findOne({ where: { id } });
    if (!exame) {
      throw new NotFoundException(`Exame com ID ${id} não encontrado`);
    }
    return exame;
  }

  async update(id: number, updateExameDto: UpdateExameDto) {
    const exame = await this.findOne(id);
    Object.assign(exame, updateExameDto);
    return this.examesRepository.save(exame);
  }

  async remove(id: number) {
    const exame = await this.findOne(id);
    await this.examesRepository.remove(exame);
  }
}
