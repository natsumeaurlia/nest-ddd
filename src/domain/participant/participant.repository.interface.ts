import { Participant } from './entity/participant.entity';
import { Status } from '@domain/participant/vo/participant-stauts.vo';

/**
 * @see https://little-hands.hatenablog.com/entry/2019/08/31/genba_de_ddd #リポジトリのインターフェースはApplication層に置くと思ったのですが，Domain層に置く理由ってあるのですか？
 */
export interface ParticipantRepositoryInterface {
  find(participantId: number): Promise<Participant | null>;

  findByEmail(email: string): Promise<Participant | null>;

  create(name: string, email: string, status: Status): Promise<Participant>;
}
