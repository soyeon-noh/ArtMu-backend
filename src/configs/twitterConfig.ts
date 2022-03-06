import { Injectable } from '@nestjs/common';
import { TwitterApi } from 'twitter-api-v2';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TwitterConfig {
  constructor(private configService: ConfigService) {}

  // OAuth2
  twitterClient = new TwitterApi(
    this.configService.get<string>(`BEARER_TOKEN`),
  );
  // token이 안 넘어오는 문제 발생

  // Read-only level
  // const roClient = twitterClient.readOnly
}
