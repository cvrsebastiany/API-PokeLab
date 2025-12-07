import { PartialType } from '@nestjs/swagger';
import { CreateExameUrinaDto } from './create-exame-urina.dto';

export class UpdateExameUrinaDto extends PartialType(CreateExameUrinaDto) {}
