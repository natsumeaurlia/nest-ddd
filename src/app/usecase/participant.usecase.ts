import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from '@app/dto/create-participant.dto';
import { ParticipantService } from '@domain/participant/service/participant.service';

@Injectable()
export class ParticipantUsecase {
  constructor(private readonly participantService: ParticipantService) {}

  create(createParticipantDto: CreateParticipantDto) {
    return this.participantService.create(createParticipantDto);
  }
}
