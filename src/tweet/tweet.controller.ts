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
    @Query('lastId') lastId?: string,
  ) {
    if (lastId) {
      const sinceId: string = lastId + 1;
      console.log('sinceid', sinceId);
      const options: Partial<Tweetv2SearchParams> = {
        /** ISO date string */
        // end_time: string,
        // start_time: string,
        max_results: 10,
        since_id: `${sinceId ? sinceId : null}`,
        //   until_id: string,
        //   next_token: string,
      };
    }
    const options: Partial<Tweetv2SearchParams> = {
      /** ISO date string */
      // end_time: string,
      // start_time: string,
      max_results: 10,
    };

    // 검색 옵션을 service에서 controller로 옮김

    const result = await this.tweetService.search('#커미션', options);

    const resultData = result.data.data;
    const resultMeta = result.data.meta;

    let tweetId: string[] = [];

    for (let data in resultData) {
      // tweetId = [...tweetId, resultData[data].id];
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
