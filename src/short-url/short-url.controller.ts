import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShortUrlService } from './short-url.service';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { UpdateShortUrlDto } from './dto/update-short-url.dto';
import { GetShortUrlDto } from './dto/get-short-url.dto';

@Controller('/')
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

  @Post()
  async create(
    @Body() createShortUrlDto: CreateShortUrlDto,
  ): Promise<GetShortUrlDto> {
    return this.shortUrlService.create(createShortUrlDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortUrlService.findOne(+id);
  }
}
