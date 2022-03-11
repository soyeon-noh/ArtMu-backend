import { Module } from '@nestjs/common';
import { DesignerService } from './designer.service';
import { DesignerController } from './designer.controller';
import { TweetService } from 'src/tweet/tweet.service';
import { EnvironmentModule } from 'src/environment/environment.module';

@Module({
	imports: [EnvironmentModule],
	controllers: [DesignerController],
	providers: [DesignerService, TweetService]
})
export class DesignerModule { }
