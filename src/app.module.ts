import {
  Global,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ParticipantController } from './controller/participant.controller';
import { ParticipantUsecase } from '@app/usecase/participant.usecase';
import { ParticipantService } from '@domain/participant/service/participant.service';
import { ParticipantRepository } from '@infrastructure/db/repository/participant.repository';
import { PrismaService } from '@util/prisma.service';
import { LoggerMiddleware } from '@app/middleware/logger.middleware';

@Global()
@Module({
  imports: [],
  controllers: [ParticipantController],
  providers: [
    PrismaService,
    ParticipantService,
    ParticipantUsecase,
    ParticipantRepository,
    {
      provide: 'ParticipantRepositoryInterface',
      useClass: ParticipantRepository,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
