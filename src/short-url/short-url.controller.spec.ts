import { Test, TestingModule } from '@nestjs/testing';
import { ShortUrlController } from './short-url.controller';
import { ShortUrlService } from './short-url.service';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ShortUrl } from './entities/short-url.entity';

describe('ShortUrlController', () => {
  let controller: ShortUrlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortUrlController],
      providers: [
        ShortUrlService,
        {
          provide: getRepositoryToken(ShortUrl),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ShortUrlController>(ShortUrlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Generate short url', async () => {
    // Given
    const originUrl = 'https://www.google.com';
    const shortUrl = await controller.create(
      new CreateShortUrlDto({ url: originUrl }),
    );

    // When
    const { originalUrl: longUrl } = await controller.findOne(shortUrl.id);

    // Then
    expect(longUrl).toEqual(originUrl);
  });
});
