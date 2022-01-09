import { IsNotEmpty, IsString } from 'class-validator';
import { status } from '../vo/participant-stauts.vo';

export class Participant {
  readonly _id: number;

  constructor({ id, name, email, status }) {
    this._id = id;
    this.name = name;
    this.email = email;
    this.status = status;
  }

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  status: status;
}
