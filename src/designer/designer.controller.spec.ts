import { Test, TestingModule } from '@nestjs/testing';
import { DesignerController } from './designer.controller';
import { DesignerService } from './designer.service';

describe('DesignerController', () => {
  let controller: DesignerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesignerController],
      providers: [DesignerService],
    }).compile();

    controller = module.get<DesignerController>(DesignerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
