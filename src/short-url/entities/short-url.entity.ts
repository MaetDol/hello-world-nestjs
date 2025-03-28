import { Column, Entity, PrimaryColumn, Unique } from 'typeorm';

@Entity()
export class ShortUrl {
  @PrimaryColumn()
  id: string;

  @Column()
  url: string;
}
