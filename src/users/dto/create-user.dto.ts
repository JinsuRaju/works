import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  username: string;
}