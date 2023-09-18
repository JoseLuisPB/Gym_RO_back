import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';

@Entity()
export class exercises {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  group: string;

  @Column({ name: 'exercise_for' })
  exerciseFor: string;

  @Column('simple-array')
  steps: string[];

  @Column({ type: 'int', nullable: true })
  difficulty: number;

  @Column('simple-array', { nullable: true })
  gear: string[];

  @Column({ type: 'boolean', nullable: true })
  favorite: boolean;
}
