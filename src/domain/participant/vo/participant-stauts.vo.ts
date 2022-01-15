import { ValueObject } from '../../common/vo';

export type Status = 'ACTIVE' | 'REST' | 'WITHDRAW';

interface EnrolledStatus {
  status?: Status;
}

export class ParticipantStatus extends ValueObject<EnrolledStatus> {
  private constructor(props: EnrolledStatus) {
    super(props);
  }

  public getStatus(): Status {
    return this.props.status;
  }

  public static create(props?: EnrolledStatus): ParticipantStatus {
    let status: Status = 'ACTIVE';
    if (props && props.status) {
      status = props.status;
    }
    return new ParticipantStatus({ status });
  }
}
