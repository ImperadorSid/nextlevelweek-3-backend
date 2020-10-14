import {
  Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import { IOrphanage } from './IOrphanage';

/* eslint-disable camelcase */
@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne('Orphanage', 'images')
  @JoinColumn({ name: 'orphanageId' })
  orphanage: IOrphanage
}
/* eslint-enable */
