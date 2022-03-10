import { Module } from '@nestjs/common';
import { AppRoutingModule } from './app-routing.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DesignerModule } from './designer/designer.module';
import { EnvironmentModule } from './environment/environment.module';
import { TweetModule } from './tweet/tweet.module';


@Module({
	imports: [
		AppRoutingModule,
		DesignerModule,
		TweetModule,
	],
	providers: [AppService],
	controllers: [AppController],
})
export class AppModule {

}
