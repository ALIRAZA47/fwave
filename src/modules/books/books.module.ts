import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { BookReviewsEntity } from './entities/book.reviews.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity, BookReviewsEntity])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
