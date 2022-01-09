import { ValueObject } from '../../common/vo';

export type status = 'ACTIVE' | 'REST' | 'WITHDRAW';

interface EnrolledStatus {
  status?: status;
}

export class ParticipantStatus extends ValueObject<EnrolledStatus> {
  private constructor(props: EnrolledStatus) {
    super(props);
  }

  public get status(): string {
    return this.props.status;
  }

  public static create(props: EnrolledStatus): ParticipantStatus {
    let status = props.status;
    if (!props.status) {
      status = 'ACTIVE';
    }
    return new ParticipantStatus({ status });
  }
}
