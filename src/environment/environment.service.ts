import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TwitterApi } from 'twitter-api-v2';

@Injectable()
export class EnvironmentService {

	constructor(private configService: ConfigService) { }

	getTwitterApi() {
		return new TwitterApi(this.configService.get<string>(`BEARER_TOKEN`));
	}

}
