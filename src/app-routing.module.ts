import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { DesignerModule } from './designer/designer.module';
import { TweetModule } from './tweet/tweet.module';
import { MongodbModule } from './mongodb/mongodb.module';

const routes: Routes = [
	{
		path: 'designer',
		module: DesignerModule,
	},
	{
		path: 'tweet',
		module: TweetModule,
	}
]

@Module({
	imports: [RouterModule.register(routes), MongodbModule],
	exports: [RouterModule],
})
export class AppRoutingModule { }
