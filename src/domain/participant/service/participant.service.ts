import { Inject, Injectable } from '@nestjs/common';
import { ParticipantRepositoryInterface } from '@domain/participant/participant.repository.interface';
import { CreateParticipantDto } from '@app/dto/create-participant.dto';
import { ParticipantStatus } from '@domain/participant/vo/participant-stauts.vo';

@Injectable()
export class ParticipantService {
  constructor(
    @Inject('ParticipantRepositoryInterface')
    private repo: ParticipantRepositoryInterface,
  ) {}

  async create(props: CreateParticipantDto) {
    if (await this.repo.findByEmail(props.email)) {
      throw new Error('Duplicate Email');
    }
    const status = ParticipantStatus.create();
    const result = await this.repo.create(
      props.name,
      props.email,
      status.getStatus(),
    );
    return Boolean(result);
  }
}
