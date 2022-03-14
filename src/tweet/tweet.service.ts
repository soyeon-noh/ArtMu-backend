import { Injectable } from '@nestjs/common';
import { EnvironmentService } from 'src/environment/environment.service';
import {
  TweetSearchRecentV2Paginator,
  Tweetv2SearchParams,
} from 'twitter-api-v2';

@Injectable()
export class TweetService {
  constructor(private twitterConfig: TwitterConfig) {}

  // 단순 검색
  async search(
    query: string,
    options?: Partial<Tweetv2SearchParams>,
  ): Promise<TweetSearchRecentV2Paginator> {
    const option: Partial<Tweetv2SearchParams> = {
      /** ISO date string */
      // end_time: string,
      // start_time: string,
      max_results: 15, // 적은 숫자의 -1 만큼 나온다
      //   since_id: string,
      //   until_id: string,
      //   next_token: string,
    };
    // const endTime: string = null;
    // options = { ...options, end_time: `${endTime}` };
    return await this.twitterConfig.client.readOnly.v2.search(query, option);
  }


  findAll() {
    return `This action returns all tweet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
