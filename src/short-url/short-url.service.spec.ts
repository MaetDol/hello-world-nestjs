import { Test, TestingModule } from '@nestjs/testing';
import { ShortUrlService } from './short-url.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ShortUrl } from './entities/short-url.entity';
import { ShortUrlController } from './short-url.controller';

describe('ShortUrlService', () => {
  let service: ShortUrlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShortUrlService,
        {
          provide: getRepositoryToken(ShortUrl),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ShortUrlService>(ShortUrlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Generate short url', async () => {
    // Given
    const originUrl = 'https://www.google.com';
    const shortPath = await service.create({
      url: originUrl,
    });

    // When
    const { url } = await service.findOne(shortPath.id);

    // Then
    expect(url).toEqual(originUrl);
  });
});
