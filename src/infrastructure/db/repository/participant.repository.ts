import { Injectable } from '@nestjs/common';
import { Participant } from '@domain/participant/entity/participant.entity';
import { PrismaService } from '@util/prisma.service';
import { Participant as PrismaParticipant } from '@prisma/client';
import { Status } from '@domain/participant/vo/participant-stauts.vo';
import { ParticipantRepositoryInterface } from '@domain/participant/participant.repository.interface';

@Injectable()
export class ParticipantRepository implements ParticipantRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  public async create(
    name: string,
    email: string,
    status: Status,
  ): Promise<Participant> {
    const result = await this.prisma.participant.create({
      data: {
        name,
        email,
        status,
      },
    });
    return this.makeParticipant(result);
  }

  public async find(participantId: number): Promise<Participant | null> {
    const result = await this.prisma.participant.findUnique({
      where: { id: participantId },
    });
    if (result) {
      return new Participant(result);
    }
    return null;
  }

  public async findByEmail(email: string): Promise<Participant | null> {
    const result = await this.prisma.participant.findFirst({
      where: { email },
    });
    return this.makeParticipant(result);
  }

  private makeParticipant(res?: PrismaParticipant) {
    if (res) {
      return new Participant(res);
    }
    return null;
  }
}
