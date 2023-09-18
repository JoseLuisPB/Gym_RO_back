import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExerciseFor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
