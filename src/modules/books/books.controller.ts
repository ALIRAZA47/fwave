import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { GlobalResponseDto } from '../globals/dtos/global.response.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('books')
@ApiTags('Books')
@ApiBearerAuth()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return new GlobalResponseDto(
      HttpStatus.CREATED,
      'Create book',
      await this.booksService.create(createBookDto),
    );
  }

  @Get()
  async findAll() {
    return new GlobalResponseDto(
      HttpStatus.OK,
      'Get all books',
      await this.booksService.findAll(),
    );
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return new GlobalResponseDto(
      HttpStatus.OK,
      'Get book',
      this.booksService.findOne(id),
    );
  }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
  //   return this.booksService.update(+id, updateBookDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.booksService.remove(+id);
  // }
}
