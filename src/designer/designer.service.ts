import { Injectable } from '@nestjs/common';
import { TwitterConfig } from 'src/configs/twitterConfig';

@Injectable()
export class DesignerService {

	constructor(
		private twitterConfig: TwitterConfig,
	) { }

	async findAll(users: string[]) {
		return this.twitterConfig.client.readOnly.v2.users(users, {})
	}

}
