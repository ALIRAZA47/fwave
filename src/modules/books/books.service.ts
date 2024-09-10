import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepo: Repository<BookEntity>,
  ) {}
  async create(createBookDto: CreateBookDto) {
    try {
      const savedBook = await this.bookRepo.save(
        BookEntity.create({
          ...createBookDto,
        }),
      );
      return savedBook;
    } catch (e) {
      throw new InternalServerErrorException(
        e?.message || 'Failed to create book',
      );
    }
  }

  async findAll() {
    return await this.bookRepo.find();
  }

  async findOne(id: number) {
    console.log(id);
    return await this.bookRepo.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  async remove(id: number) {
    return await this.bookRepo.delete(id);
  }
}
