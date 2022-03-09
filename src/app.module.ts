import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterConfig } from './configs/twitterConfig';
import { DesignerModule } from './designer/designer.module';
import { TweetModule } from './tweet/tweet.module';
import { AppRoutingModule } from './app-routing.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
	imports: [

		ConfigModule.forRoot({ isGlobal: true }),
		MongooseModule.forRoot(process.env.MONGODB_URI),
		DesignerModule,
		TweetModule,
		AppRoutingModule,

	],
	controllers: [AppController],
	providers: [AppService, TwitterConfig],
})
export class AppModule {

}
