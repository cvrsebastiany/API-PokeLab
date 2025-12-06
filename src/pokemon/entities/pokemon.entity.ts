import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

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

  @Column({ nullable: true })
  level?: number;

  @Column()
  hp: number;

  @Column({ nullable: true })
  attack?: number;

  @Column({ nullable: true })
  defense?: number;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'trainerId' })
  trainer: Usuario;

  @Column()
  trainerId: number;

  @Column({
    type: 'enum',
    enum: ['healthy', 'sick', 'in-treatment', 'recovered'],
    default: 'healthy',
    nullable: true,
  })
  status?: 'healthy' | 'sick' | 'in-treatment' | 'recovered';

  @Column({ type: 'timestamp', nullable: true })
  lastCheckup?: Date;

  @Column({ type: 'text', nullable: true })
  notes?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
