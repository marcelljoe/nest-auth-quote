import { Test, TestingModule } from '@nestjs/testing';

import { GMQController } from './givemequote.controller';

describe('GMQ Controller', () => {
  let controller: GMQController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GMQController],
    }).compile();

    controller = module.get<GMQController>(GMQController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
