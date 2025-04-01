export class CreateShortUrlDto {
  id: string;
  url: string;
  constructor(id: string, url: string) {
    this.url = url;
    this.id = id;
  }
}
