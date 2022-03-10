import { Injectable } from '@nestjs/common';
import { UserV2Result } from 'twitter-api-v2';

@Injectable()
export class AppService {
	constructor() { }

	getHello(): string {
		return 'Hello World!';
	}
}
