import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { plainToInstance } from 'class-transformer';
import { TweetDTO } from './dto/tweet.dto';
import { IPaginationDTO } from 'src/interface/dto/pagination.dto';
@Controller()
export class TweetController {
	constructor(private tweetService: TweetService) { }

	// #커미션 해시태그 단 트윗 불러오기
	@Get()
	async findAll(
		@Query('pageSize') pageSize: number,
		@Query('pageNo') pageNo: number,
		@Query('query') query?: string,
	) {
		const tweet = await this.tweetService.search('#커미션');

		return plainToInstance(IPaginationDTO, {
			data: tweet.data.data,
			meta: tweet.data.meta,
		});
	}

	// +id number로 치환
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.tweetService.findOne(+id);
	}

	// @Patch(':id')
	// update(@Param('id') id: string, @Body() updateTweetDto: UpdateTweetDto) {
	//   return this.tweetService.update(+id, updateTweetDto);
	// }

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.tweetService.remove(+id);
	}
}
