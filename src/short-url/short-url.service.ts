import { Injectable } from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { UpdateShortUrlDto } from './dto/update-short-url.dto';
import { GetShortUrlDto } from './dto/get-short-url.dto';

@Injectable()
export class ShortUrlService {
  async create(createShortUrlDto: CreateShortUrlDto) {
    return new GetShortUrlDto(
      1,
      'https://www.google.com/asd',
      createShortUrlDto.url,
    );
  }

  findAll() {
    return `This action returns all shortUrl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shortUrl`;
  }

  update(id: number, updateShortUrlDto: UpdateShortUrlDto) {
    return `This action updates a #${id} shortUrl`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortUrl`;
  }
}
