import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Redirect,
  BadRequestException,
} from '@nestjs/common';
import { ShortUrlService } from './short-url.service';

@Controller('/')
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

  @Post()
  async create(@Body() body: { url: string }): Promise<{ url: string }> {
    if (!this.shortUrlService.isValidUrl(body.url)) {
      throw new BadRequestException('Invalid URL format');
    }

    const id = await this.shortUrlService.create(body.url);
    return { url: `/${id}` };
  }

  @Redirect('/', 302)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const shortUrl = await this.shortUrlService.findOne(id);
    return { url: shortUrl.url };
  }
}
