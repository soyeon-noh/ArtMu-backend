import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetController } from './tweet.controller';
import { ConfigModule } from '@nestjs/config';
import { TwitterConfig } from 'src/configs/twitterConfig';

@Module({
  controllers: [TweetController],
  providers: [TweetService, TwitterConfig],
})
export class TweetModule {}
