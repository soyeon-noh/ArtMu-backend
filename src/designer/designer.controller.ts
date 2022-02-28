import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DesignerService } from './designer.service';
import { CreateDesignerDto } from './dto/create-designer.dto';
import { UpdateDesignerDto } from './dto/update-designer.dto';

@Controller('designer')
export class DesignerController {
  constructor(private readonly designerService: DesignerService) {}

  @Post()
  create(@Body() createDesignerDto: CreateDesignerDto) {
    return this.designerService.create(createDesignerDto);
  }

  @Get()
  findAll() {
    return this.designerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.designerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDesignerDto: UpdateDesignerDto) {
    return this.designerService.update(+id, updateDesignerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.designerService.remove(+id);
  }
}
