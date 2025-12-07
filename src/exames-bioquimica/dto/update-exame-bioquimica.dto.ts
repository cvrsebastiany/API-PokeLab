import { PartialType } from '@nestjs/swagger';
import { CreateExameBioquimicaDto } from './create-exame-bioquimica.dto';

export class UpdateExameBioquimicaDto extends PartialType(CreateExameBioquimicaDto) {}
