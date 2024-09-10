import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    required: true,
  })
  @IsEmail()
  @IsDefined()
  email: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsString()
  @IsDefined()
  password: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsString()
  @IsDefined()
  firstName: string;
  //
  // @ApiProperty({
  //   type: String,
  //   required: true,
  // })
  // @IsOptional()
  // @IsDefined()
  // lastName: string
}
