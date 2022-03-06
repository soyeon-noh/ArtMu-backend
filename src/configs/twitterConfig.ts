import { Injectable } from '@nestjs/common';
import { TwitterApi } from 'twitter-api-v2';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TwitterConfig {
  constructor(private configService: ConfigService) {}

  // OAuth2
  client = new TwitterApi(this.configService.get<string>(`BEARER_TOKEN`));

  // // Read+Write level
  // const rwClient = client.readWrite;

  // // Read-only level
  // const roClient = client.readOnly;
}
