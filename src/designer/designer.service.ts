import { Injectable } from '@nestjs/common';
import { CreateDesignerDto } from './dto/create-designer.dto';
import { UpdateDesignerDto } from './dto/update-designer.dto';

@Injectable()
export class DesignerService {
  create(createDesignerDto: CreateDesignerDto) {
    return 'This action adds a new designer';
  }

  findAll() {
    return `This action returns all designer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} designer`;
  }

  update(id: number, updateDesignerDto: UpdateDesignerDto) {
    return `This action updates a #${id} designer`;
  }

  remove(id: number) {
    return `This action removes a #${id} designer`;
  }
}
