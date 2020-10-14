import {
  Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn,
} from 'typeorm';
import { IImage } from './IImage';

/* eslint-disable camelcase */
@Entity('orphanages')
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  openingHours: string;

  @Column()
  openOnWeekends: boolean;

  @OneToMany('Image', 'orphanage', {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'orphanageId' })
  images: IImage[]
}
/* eslint-enable */
