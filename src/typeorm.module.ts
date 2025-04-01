import { TypeOrmModule as TypeOrm } from '@nestjs/typeorm';
import { ShortUrl } from 'src/short-url/entities/short-url.entity';

export const TypeOrmModule = TypeOrm.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 9000,
  username: 'root',
  password: 'root',
  entities: [ShortUrl],
  synchronize: true,
  database: 'short_url',
});
