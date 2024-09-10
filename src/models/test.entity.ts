import { Column, Entity } from 'typeorm';
import { CustomBase } from './_custom.base';

@Entity('test')
export class TestEntity extends CustomBase {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;
}
