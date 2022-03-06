import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterConfig } from './configs/TwitterConfig';
import { DesignerModule } from './designer/designer.module';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [ConfigModule.forRoot({}), DesignerModule, TweetModule],
  controllers: [AppController],
  providers: [AppService, TwitterConfig],
})
export class AppModule {}
