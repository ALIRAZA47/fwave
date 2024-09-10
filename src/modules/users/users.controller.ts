import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GlobalResponseDto } from '../globals/dtos/global.response.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '../globals/decorators/global.decorators';
import { UserEntity } from './entities/user.entity';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return new GlobalResponseDto(
      HttpStatus.CREATED,
      'Create User',
      await this.usersService.create(createUserDto),
    );
  }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  @Get('')
  async findOne(@Req() req: Request) {
    const user = req['user'] as UserEntity;
    return new GlobalResponseDto(
      HttpStatus.OK,
      'Get User',
      await this.usersService.findOne(user?.id),
    );
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
