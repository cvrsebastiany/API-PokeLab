import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pokemon } from '../../pokemon/entities/pokemon.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('treatment_updates')
export class TreatmentUpdate {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pokemon, { eager: true })
  @JoinColumn({ name: 'pokemonId' })
  pokemon: Pokemon;

  @Column()
  pokemonId: number;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'medicoId' })
  medico: Usuario;

  @Column()
  medicoId: number;

  @Column({ type: 'text' })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
