import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { DesignerModule } from './designer/designer.module';
import { EnvironmentModule } from './environment/environment.module';
import { TweetModule } from './tweet/tweet.module';

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
	imports: [RouterModule.register(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
