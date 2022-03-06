import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  // #커미션 해시태그 단 트윗 불러오기
  @Get()
  findAll() {
    const result = this.tweetService.search('#커미션');

    return this.tweetService.search('#커미션');
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
