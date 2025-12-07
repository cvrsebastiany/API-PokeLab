import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamesUrinaService } from './exames-urina.service';
import { ExamesUrinaController } from './exames-urina.controller';
import { ExameUrina } from './entities/exame-urina.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExameUrina])],
  controllers: [ExamesUrinaController],
  providers: [ExamesUrinaService],
  exports: [ExamesUrinaService],
})
export class ExamesUrinaModule {}
