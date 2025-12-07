import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pokemon } from '../../pokemon/entities/pokemon.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('exames_bioquimica')
export class ExameBioquimica {
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

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  glicose?: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  ureia?: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  creatinina?: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  colesterolTotal?: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  triglicerideos?: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  alt?: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  ast?: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  fosfataseAlcalina?: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  bilirrubinaTotal?: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  bilirrubinaIndireta?: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  bilirrubinaConjugada?: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  calcio?: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  fosforo?: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  magnesio?: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  sodio?: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  potassio?: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  cloro?: number;

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
