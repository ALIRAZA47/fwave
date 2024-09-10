import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsDefined, IsEmail } from 'class-validator';
import { CreateUserDto } from '../../users/dto/create-user.dto';

export class SigninUserDto extends OmitType(CreateUserDto, ['firstName']) {}
