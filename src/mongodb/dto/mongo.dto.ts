import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
	@Prop()
	tweetId: string;

	@Prop()
	userId: number;
}

export const UserSchema = SchemaFactory.createForClass(User);