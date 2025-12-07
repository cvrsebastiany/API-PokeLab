import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTreatmentUpdateDto } from './dto/create-treatment-update.dto';
import { UpdateTreatmentUpdateDto } from './dto/update-treatment-update.dto';
import { TreatmentUpdate } from './entities/treatment-update.entity';

@Injectable()
export class TreatmentUpdatesService {
  constructor(
    @InjectRepository(TreatmentUpdate)
    private treatmentUpdateRepository: Repository<TreatmentUpdate>,
  ) {}

  async create(createTreatmentUpdateDto: CreateTreatmentUpdateDto, medicoId: number): Promise<TreatmentUpdate> {
    const treatmentUpdate = this.treatmentUpdateRepository.create({
      ...createTreatmentUpdateDto,
      medicoId,
    });
    return await this.treatmentUpdateRepository.save(treatmentUpdate);
  }

  async findAll(pokemonId?: number): Promise<TreatmentUpdate[]> {
    if (pokemonId) {
      return await this.treatmentUpdateRepository.find({
        where: { pokemonId },
        order: { createdAt: 'DESC' },
      });
    }
    return await this.treatmentUpdateRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<TreatmentUpdate> {
    const treatmentUpdate = await this.treatmentUpdateRepository.findOne({
      where: { id },
    });
    if (!treatmentUpdate) {
      throw new NotFoundException(`Treatment update with ID ${id} not found`);
    }
    return treatmentUpdate;
  }

  async update(id: number, updateTreatmentUpdateDto: UpdateTreatmentUpdateDto, medicoId: number): Promise<TreatmentUpdate> {
    const treatmentUpdate = await this.findOne(id);
    
    // Only allow the doctor who created the update to edit it
    if (treatmentUpdate.medicoId !== medicoId) {
      throw new ForbiddenException('You can only edit your own treatment updates');
    }

    await this.treatmentUpdateRepository.update(id, updateTreatmentUpdateDto);
    return await this.findOne(id);
  }

  async remove(id: number, medicoId: number): Promise<void> {
    const treatmentUpdate = await this.findOne(id);
    
    // Only allow the doctor who created the update to delete it
    if (treatmentUpdate.medicoId !== medicoId) {
      throw new ForbiddenException('You can only delete your own treatment updates');
    }

    await this.treatmentUpdateRepository.delete(id);
  }
}
