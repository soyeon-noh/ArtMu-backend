import { Test, TestingModule } from '@nestjs/testing';
import { MongodbController } from './mongodb.controller';
import { MongodbService } from './mongodb.service';

describe('MongodbController', () => {
  let controller: MongodbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MongodbController],
      providers: [MongodbService],
    }).compile();

    controller = module.get<MongodbController>(MongodbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
