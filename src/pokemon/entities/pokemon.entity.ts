import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('pokemons')
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  type: string;

  @Column()
  level: number;

  @Column()
  hp: number;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  trainer: string;

  @Column({
    type: 'enum',
    enum: ['healthy', 'sick', 'in-treatment', 'recovered'],
    default: 'healthy',
  })
  status: 'healthy' | 'sick' | 'in-treatment' | 'recovered';

  @Column({ type: 'timestamp', nullable: true })
  lastCheckup?: Date;

  @Column({ type: 'text', nullable: true })
  notes?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
