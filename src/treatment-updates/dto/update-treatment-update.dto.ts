import { PartialType } from '@nestjs/swagger';
import { CreateTreatmentUpdateDto } from './create-treatment-update.dto';

export class UpdateTreatmentUpdateDto extends PartialType(CreateTreatmentUpdateDto) {}
