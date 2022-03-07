import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DesignerService } from './designer.service';
import { CreateDesignerDto } from './dto/create-designer.dto';
import { UpdateDesignerDto } from './dto/update-designer.dto';

@Controller()
export class DesignerController {
	constructor(private designerService: DesignerService) { }

	@Get()
	findAll() {

	}

}
