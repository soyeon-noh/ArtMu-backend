import { Module } from '@nestjs/common';
import { MongodbService } from './mongodb.service';
import { MongodbController } from './mongodb.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './dto/mongo.dto';



@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [MongodbController],
  providers: [MongodbService],
  exports: [MongooseModule]
})
export class MongodbModule { }
