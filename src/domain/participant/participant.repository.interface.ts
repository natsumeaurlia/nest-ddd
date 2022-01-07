import { Participant } from './entity/participant.entity';

/**
 * @see https://little-hands.hatenablog.com/entry/2019/08/31/genba_de_ddd #リポジトリのインターフェースはApplication層に置くと思ったのですが，Domain層に置く理由ってあるのですか？
 */
export interface ParticipantRepositoryInterface {
  findAll(): Promise<Participant[]>;
  findOne(participantId: string): Promise<Participant | null>;
  create(participant: Participant): Promise<Participant>;
  update(participant: Participant): Promise<Participant>;
  delete(participant: Participant): Promise<number>;
}
