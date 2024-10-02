import { Test, TestingModule } from '@nestjs/testing';

import { GMQService } from './givemequote.service';

describe('GMQService', () => {
  let service: GMQService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GMQService],
    }).compile();

    service = module.get<GMQService>(GMQService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
