import { Module } from '@nestjs/common';
import { ParticipantController } from './controller/participant.controller';

@Module({
  imports: [],
  controllers: [ParticipantController],
  providers: [],
})
export class AppModule {}
