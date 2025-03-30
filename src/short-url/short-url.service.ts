import { Injectable } from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { GetShortUrlDto } from './dto/get-short-url.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ShortUrl } from './entities/short-url.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShortUrlService {
  constructor(
    @InjectRepository(ShortUrl)
    private readonly shortUrlRepository: Repository<ShortUrl>,
  ) {}

  async create(createShortUrlDto: CreateShortUrlDto) {
    return new GetShortUrlDto('asd', '/asdf', createShortUrlDto.url);
  }

  findAll() {
    return `This action returns all shortUrl`;
  }

  async findOne(id: string) {
    return new GetShortUrlDto(id, '/asdf', 'https://www.google.com');
  }

  remove(id: number) {
    return `This action removes a #${id} shortUrl`;
  }
}
