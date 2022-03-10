import { Injectable } from '@nestjs/common';
import { EnvironmentService } from 'src/environment/environment.service';
import {
	TweetSearchRecentV2Paginator,
	Tweetv2SearchParams
} from 'twitter-api-v2';

@Injectable()
export class TweetService {
	constructor(private envService: EnvironmentService) { }

	// 단순 검색
	async search(
		query: string,
		options?: Partial<Tweetv2SearchParams>,
	): Promise<TweetSearchRecentV2Paginator> {
		// const endTime: string = null;
		// options = { ...options, end_time: `${endTime}` };
		return await this.envService.getTwitterApi().readOnly.v2.search(query, options);
	}

	findAll() {
		return `This action returns all tweet`;
	}

	findOne(id: number) {
		return `This action returns a #${id} tweet`;
	}

	remove(id: number) {
		return `This action removes a #${id} tweet`;
	}
}
