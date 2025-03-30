import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ShortUrl {
  @PrimaryColumn({ type: 'varchar', length: 21 })
  id: string;

  @Column()
  url: string;
}
