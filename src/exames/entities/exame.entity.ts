import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pokemon } from '../../pokemon/entities/pokemon.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('exames')
export class Exame {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pokemon, { eager: true })
  @JoinColumn({ name: 'pokemonId' })
  pokemon: Pokemon;

  @Column()
  pokemonId: number;

  @ManyToOne(() => Usuario, { eager: true, nullable: true })
  @JoinColumn({ name: 'tecnicoId' })
  tecnico?: Usuario;

  @Column({ nullable: true })
  tecnicoId?: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  hemoglobina?: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  leucocitos?: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  plaquetas?: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  cor?: string;

  @Column({ type: 'decimal', precision: 4, scale: 2, nullable: true })
  pH?: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  proteinas?: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  glicose?: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  ureia?: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  creatinina?: number;

  @Column({
    type: 'enum',
    enum: ['Pendente', 'Em andamento', 'Concluído'],
    default: 'Pendente',
  })
  status: 'Pendente' | 'Em andamento' | 'Concluído';

  @Column({ type: 'text', nullable: true })
  observacoes?: string;

  @Column({ type: 'timestamp', nullable: true })
  dataColeta?: Date;

  @Column({ type: 'timestamp', nullable: true })
  dataResultado?: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
