import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  isbn: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  description: string;
}
