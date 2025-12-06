import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfilDto } from './create-perfi.dto';

export class UpdatePerfilDto extends PartialType(CreatePerfilDto) {}
