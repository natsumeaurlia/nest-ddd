import { Module } from '@nestjs/common';
import { AppController } from './app/controller/app.controller';
import { AppService } from './domain/service/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
