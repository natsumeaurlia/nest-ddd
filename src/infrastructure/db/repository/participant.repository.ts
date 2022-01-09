import { ParticipantRepositoryInterface } from '@domain/participant/participant.repository.interface';
import { Injectable } from '@nestjs/common';
import { Participant } from '@domain/participant/entity/participant.entity';
import { PrismaService } from '@util/prisma.servie';

@Injectable()
export class ParticipantRepository /** implements ParticipantRepositoryInterface */ {
  constructor(private prisma: PrismaService) {}

  public async find(participantId: number): Promise<Participant | null> {
    const result = await this.prisma.participant.findUnique({
      where: { id: participantId },
    });
    if (result) {
      return new Participant(result);
    }
    return null;
  }
}
