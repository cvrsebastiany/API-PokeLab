import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExameBioquimicaDto } from './dto/create-exame-bioquimica.dto';
import { UpdateExameBioquimicaDto } from './dto/update-exame-bioquimica.dto';
import { ExameBioquimica } from './entities/exame-bioquimica.entity';

@Injectable()
export class ExamesBioquimicaService {
  constructor(
    @InjectRepository(ExameBioquimica)
    private examesBioquimicaRepository: Repository<ExameBioquimica>,
  ) {}

  create(createExameBioquimicaDto: CreateExameBioquimicaDto) {
    const exame = this.examesBioquimicaRepository.create(createExameBioquimicaDto);
    return this.examesBioquimicaRepository.save(exame);
  }

  findAll(pokemonId?: number, status?: 'Pendente' | 'Em andamento' | 'Concluído') {
    const where: any = {};
    
    if (pokemonId) {
      where.pokemonId = pokemonId;
    }
    
    if (status) {
      where.status = status;
    }
    
    return this.examesBioquimicaRepository.find({
      where: Object.keys(where).length > 0 ? where : undefined,
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const exame = await this.examesBioquimicaRepository.findOne({ where: { id } });
    if (!exame) {
      throw new NotFoundException(`Exame de bioquímica com ID ${id} não encontrado`);
    }
    return exame;
  }

  async update(id: number, updateExameBioquimicaDto: UpdateExameBioquimicaDto) {
    const exame = await this.findOne(id);
    Object.assign(exame, updateExameBioquimicaDto);
    return this.examesBioquimicaRepository.save(exame);
  }

  async remove(id: number) {
    const exame = await this.findOne(id);
    await this.examesBioquimicaRepository.remove(exame);
  }
}
