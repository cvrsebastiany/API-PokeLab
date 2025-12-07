import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamesBioquimicaService } from './exames-bioquimica.service';
import { ExamesBioquimicaController } from './exames-bioquimica.controller';
import { ExameBioquimica } from './entities/exame-bioquimica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExameBioquimica])],
  controllers: [ExamesBioquimicaController],
  providers: [ExamesBioquimicaService],
  exports: [ExamesBioquimicaService],
})
export class ExamesBioquimicaModule {}
