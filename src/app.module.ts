import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from 'src/typeorm.module';
import { ShortUrlModule } from './short-url/short-url.module';

@Module({
  imports: [TypeOrmModule, ShortUrlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
