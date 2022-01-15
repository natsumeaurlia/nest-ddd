import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ParticipantDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
