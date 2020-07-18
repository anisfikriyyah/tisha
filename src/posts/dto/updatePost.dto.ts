import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  content: string;
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title: string;
}

export default UpdatePostDto;