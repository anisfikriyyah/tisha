import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'talkasrul@gmail.com', description: 'Your valid email address' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Asrul Harahap', description: 'Your full name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'secr3t', description: 'Used for your key for open your account' })
  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string;
}

export default RegisterDto;