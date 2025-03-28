import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ShortUrl {
  @PrimaryColumn()
  id: string;

  @Column()
  url: string;
}
