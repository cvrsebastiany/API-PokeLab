import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePerfilDto } from './dto/create-perfi.dto';
import { UpdatePerfilDto } from './dto/update-perfi.dto';
import { Perfil } from './entities/perfil.entity';

@Injectable()
export class PerfisService {
  constructor(
    @InjectRepository(Perfil)
    private readonly perfilRepository: Repository<Perfil>,
  ) {}

  async create(createPerfilDto: CreatePerfilDto): Promise<Perfil> {
    const existingPerfil = await this.perfilRepository.findOne({
      where: { nome: createPerfilDto.nome },
    });

    if (existingPerfil) {
      throw new ConflictException('Perfil já existe');
    }

    const perfil = this.perfilRepository.create(createPerfilDto);
    return await this.perfilRepository.save(perfil);
  }

  async findAll(): Promise<Perfil[]> {
    return await this.perfilRepository.find();
  }

  async findOne(id: number): Promise<Perfil> {
    const perfil = await this.perfilRepository.findOne({ where: { id } });
    if (!perfil) {
      throw new NotFoundException(`Perfil com ID ${id} não encontrado`);
    }
    return perfil;
  }

  async update(id: number, updatePerfilDto: UpdatePerfilDto): Promise<Perfil> {
    const perfil = await this.findOne(id);
    Object.assign(perfil, updatePerfilDto);
    return await this.perfilRepository.save(perfil);
  }

  async remove(id: number): Promise<void> {
    const perfil = await this.findOne(id);
    await this.perfilRepository.remove(perfil);
  }
}
