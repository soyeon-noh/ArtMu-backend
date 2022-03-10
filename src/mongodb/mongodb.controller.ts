import { Controller } from '@nestjs/common';
import { MongodbService } from './mongodb.service';

@Controller('mongodb')
export class MongodbController {

	constructor(private readonly mongodbService: MongodbService) { }
}
