import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'Content', description: 'Ini konten nya' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ example: 'Judul', description: 'Ini judulnya' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Category', description: 'Category' })
  category?: string;
}

export default CreatePostDto;