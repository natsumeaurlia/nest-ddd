import { Body, Controller, Post } from '@nestjs/common';
import { ParticipantUsecase } from '@app/usecase/participant.usecase';
import { CreateParticipantDto } from '@app/dto/create-participant.dto';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantUsecase: ParticipantUsecase) {}

  @Post()
  create(@Body() createParticipantDto: CreateParticipantDto) {
    return this.participantUsecase.create(createParticipantDto);
  }
}
