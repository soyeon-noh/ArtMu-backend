import { Injectable } from '@nestjs/common';
import { UserV2Result } from 'twitter-api-v2';
import { TwitterConfig } from './configs/twitterConfig';

@Injectable()
export class AppService {
  constructor(private twitterConfig: TwitterConfig) {}

  async getuserByUsername(username: string): Promise<UserV2Result> {
    return await this.twitterConfig.client.readOnly.v2.userByUsername(username);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
