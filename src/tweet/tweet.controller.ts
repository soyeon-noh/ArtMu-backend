import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { plainToInstance } from 'class-transformer';
import { TweetDTO } from './dto/tweet.dto';
import { IPaginationDTO } from 'src/interface/dto/pagination.dto';
import { Tweetv2SearchParams } from 'twitter-api-v2';
@Controller()
export class TweetController {
  constructor(private tweetService: TweetService) {}

  // #커미션 해시태그 단 트윗 불러오기
  @Get()
  async findAll(
    @Query('pageSize') pageSize: number,
    @Query('pageNo') pageNo: number,
    @Query('query') query?: string,
    @Query('newestId') newestId?: number,
    @Query('oldestId') oldestId?: number,
  ) {
    let sinceId: string = null;
    let untilId: string = null;
    let maxResults: number = 10;
    let options: Partial<Tweetv2SearchParams> = {
      /** ISO date string */
      // end_time: string,
      // start_time: string,
      max_results: maxResults,
      // since_id: sinceId,
      // since_id: sinceId,
      // until_id: untilId,
      // next_token: string,
    };

    // 이전페이지
    if (newestId) {
      sinceId = (newestId + 1) as unknown as string;
      console.log('sinceId', sinceId);
      options.since_id = sinceId;
    }
    // 다음페이지
    if (oldestId) {
      untilId = (oldestId - 1) as unknown as string;
      console.log('untilId', untilId);
      options.until_id;
    }

    // 검색 옵션을 service에서 controller로 옮김

    const result = await this.tweetService.search('#커미션', options);

    const resultData = result.data.data;
    const resultMeta = result.data.meta;

    let tweetId: string[] = [];

    for (let data in resultData) {
      tweetId.push(resultData[data].id);
    }
    console.log(resultData);
    console.log(resultMeta);
    console.log(tweetId);
    return plainToInstance(IPaginationDTO, {
      data: tweetId,
      pageInfo: resultMeta,
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
