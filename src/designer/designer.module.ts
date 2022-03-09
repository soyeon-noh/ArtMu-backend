import { Module } from '@nestjs/common';
import { DesignerService } from './designer.service';
import { DesignerController } from './designer.controller';
import { TwitterConfig } from 'src/configs/twitterConfig';
import { TweetService } from 'src/tweet/tweet.service';

@Module({
	controllers: [DesignerController],
	providers: [DesignerService, TweetService, TwitterConfig]
})
export class DesignerModule { }
