import { Controller, Delete, Get, Param } from '@nestjs/common';
import { TweetService } from './tweet.service';
@Controller()
export class TweetController {

  constructor(private tweetService: TweetService) {}

  // #커미션 해시태그 단 트윗 불러오기
  @Get()
  async findAll(
    @Query('pageSize') pageSize: number,
    @Query('pageNo') pageNo: number,
    @Query('query') query?: string,
  ) {
    const result = await this.tweetService.search('#커미션');

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

