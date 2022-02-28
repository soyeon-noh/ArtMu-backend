import { Module } from '@nestjs/common';
import { DesignerService } from './designer.service';
import { DesignerController } from './designer.controller';

@Module({
  controllers: [DesignerController],
  providers: [DesignerService]
})
export class DesignerModule {}
