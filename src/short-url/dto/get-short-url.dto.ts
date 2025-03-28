export class GetShortUrlDto {
  id: string;
  url: string;
  originalUrl: string;

  constructor(id: string, url: string, originalUrl: string) {
    this.id = id;
    this.url = url;
    this.originalUrl = originalUrl;
  }
}
