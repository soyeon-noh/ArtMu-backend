import { Module } from '@nestjs/common';
import { EnvironmentModule } from 'src/environment/environment.module';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';

@Module({
	imports: [EnvironmentModule],
	controllers: [TweetController],
	providers: [TweetService],
})
export class TweetModule { }
