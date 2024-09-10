import { Column, Entity, ManyToOne } from 'typeorm';
import { CustomBase } from '../../../models/_custom.base';
import { UserEntity } from '../../users/entities/user.entity';
import { BookEntity } from './book.entity';

@Entity('book-reviews')
export class BookReviewsEntity extends CustomBase {
  @ManyToOne(() => UserEntity, (user) => user.bookReviews)
  user: UserEntity;

  @ManyToOne(() => BookEntity, (book) => book.reviews)
  book: BookEntity;

  @Column()
  comment: string;
}
