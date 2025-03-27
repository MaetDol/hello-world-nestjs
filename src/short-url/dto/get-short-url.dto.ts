export class GetShortUrlDto {
  id: number;
  url: string;
  originalUrl: string;

  constructor(id: number, url: string, originalUrl: string) {
    this.id = id;
    this.url = url;
    this.originalUrl = originalUrl;
  }
}
