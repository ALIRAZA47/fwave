import { Column, Entity, OneToMany } from 'typeorm';
import { CustomBase } from '../../../models/_custom.base';
import { BookReviewsEntity } from './book.reviews.entity';

@Entity('book')
export class BookEntity extends CustomBase {
  @Column({
    unique: true,
    nullable: false,
  })
  title: string;

  @Column({
    unique: true,
    nullable: false,
  })
  isbn: string;

  @Column({
    unique: true,
    nullable: false,
  })
  description: string;

  // rels
  @OneToMany(() => BookReviewsEntity, (rev) => rev.book)
  reviews: BookReviewsEntity[];
}
