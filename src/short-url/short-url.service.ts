import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ShortUrl } from './entities/short-url.entity';
import { Repository } from 'typeorm';
import { customAlphabet } from 'nanoid';

@Injectable()
export class ShortUrlService {
  constructor(
    @InjectRepository(ShortUrl)
    private readonly shortUrlRepository: Repository<ShortUrl>,
  ) {}

  async create(url: string): Promise<string> {
    if (!this.isValidUrl(url)) {
      throw new BadRequestException('Invalid URL format');
    }

    const nanoid = customAlphabet('23456789abcdefghijkmnpqrstuvwxyz', 6);
    let tried = 0;

    while (tried < 30) {
      const id = nanoid();
      const existingShortUrl = await this.shortUrlRepository.findOne({
        where: { id },
      });

      if (!existingShortUrl) {
        await this.shortUrlRepository.save(new CreateShortUrlDto(id, url));
        return id;
      }
      tried++;
    }

    throw new Error('Failed to generate a unique short URL after 30 attempts');
  }
  isValidUrl(url: string) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  async findOne(id: string) {
    const shortUrl = await this.shortUrlRepository.findOne({
      where: { id },
    });

    if (!shortUrl) {
      throw new NotFoundException(`Short URL with id ${id} not found`);
    }
    return shortUrl;
  }

  remove(id: number) {
    return `This action removes a #${id} shortUrl`;
  }
}
