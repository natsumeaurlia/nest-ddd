import { PartialType } from '@nestjs/mapped-types';
import { ParticipantDto } from './participant.dto';
import { IsString } from 'class-validator';

export class UpdateParticipantDto extends PartialType(ParticipantDto) {
  @IsString()
  status: string;
}
