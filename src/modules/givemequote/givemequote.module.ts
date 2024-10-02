import { Module } from '@nestjs/common';

import { GMQService } from './givemequote.service';
import { GMQController } from './givemequote.controller';

@Module({
  providers: [GMQService],
  controllers: [GMQController],
})
export class GMQModule {}
