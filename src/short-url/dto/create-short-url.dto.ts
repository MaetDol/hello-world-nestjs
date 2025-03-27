export class CreateShortUrlDto {
  url: string;
  constructor(url: CreateShortUrlDto) {
    this.url = url.url;
  }
}
