import { IsNotEmpty, IsString } from 'class-validator';
import { status } from '../vo/participant-stauts.vo';

export class Participant {
  readonly _id?: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  status: status;
}
