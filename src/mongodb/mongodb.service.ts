import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './dto/mongo.dto';


@Injectable()
export class MongodbService {
	constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) { }

	async create(createUserDto: CreateUserDto): Promise<User> {
		const createdUser = new this.UserModel(createUserDto);
		return createdUser.save();
	}


}
