import { Controller, Get, Query } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { IPaginationDTO } from 'src/interface/dto/pagination.dto';
import { TweetService } from 'src/tweet/tweet.service';
import { DesignerService } from './designer.service';

@Controller()
export class DesignerController {
	constructor(
		private designerService: DesignerService,
		private tweetService: TweetService,
	) { }

	@Get()
	async findAll(
		@Query('pageSize') pageSize: number,
		@Query('pageNo') pageNo: number,
		@Query('query') query?: string,
	) {

	}

}
