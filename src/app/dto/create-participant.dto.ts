import { PartialType } from '@nestjs/mapped-types';
import { ParticipantDto } from './participant.dto';

export class CreateParticipantDto extends PartialType(ParticipantDto) {}
