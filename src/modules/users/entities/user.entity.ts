import { Column, DeleteDateColumn, Entity, OneToMany } from 'typeorm';
import { CustomBase } from '../../../models/_custom.base';
import { BookReviewsEntity } from '../../books/entities/book.reviews.entity';

@Entity('user')
export class UserEntity extends CustomBase {
  @Column({
    nullable: false,
  })
  firstName: string;

  @Column({
    nullable: true,
  })
  lastName: string;

  @Column({
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;

  @DeleteDateColumn()
  deletedAt: Date;

  // rels
  @OneToMany(() => BookReviewsEntity, (rev) => rev.user)
  bookReviews: BookReviewsEntity[];
}
