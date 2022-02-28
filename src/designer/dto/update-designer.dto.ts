import { PartialType } from '@nestjs/mapped-types';
import { CreateDesignerDto } from './create-designer.dto';

export class UpdateDesignerDto extends PartialType(CreateDesignerDto) {}
