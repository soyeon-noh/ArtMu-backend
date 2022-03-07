import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterConfig } from './configs/twitterConfig';
import { DesignerModule } from './designer/designer.module';
import { TweetModule } from './tweet/tweet.module';
import { AppRoutingModule } from './app-routing.module';
import { FirebaseConfig } from './configs/firebaseConfig';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		DesignerModule,
		TweetModule,
		AppRoutingModule,
	],
	controllers: [AppController],
	providers: [AppService, TwitterConfig, FirebaseConfig],
})
export class AppModule { }
