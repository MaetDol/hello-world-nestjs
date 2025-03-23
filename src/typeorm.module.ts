import { TypeOrmModule as TypeOrm } from '@nestjs/typeorm';

export const TypeOrmModule = TypeOrm.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  entities: [],
  synchronize: true,
});
