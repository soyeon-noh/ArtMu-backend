
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongoConfig {
	constructor(private configService: ConfigService) { }

	url = this.configService.get<string>('MONGODB_URI')
}