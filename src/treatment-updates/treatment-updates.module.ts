import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreatmentUpdatesService } from './treatment-updates.service';
import { TreatmentUpdatesController } from './treatment-updates.controller';
import { TreatmentUpdate } from './entities/treatment-update.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TreatmentUpdate])],
  controllers: [TreatmentUpdatesController],
  providers: [TreatmentUpdatesService],
  exports: [TreatmentUpdatesService],
})
export class TreatmentUpdatesModule {}
