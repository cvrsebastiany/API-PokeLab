import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Perfil } from '../../perfis/entities/perfil.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  nome: string;

  @Column()
  senha: string;

  @Column({ nullable: true })
  telefone?: string;

  @Column({ default: true })
  ativo: boolean;

  @ManyToOne(() => Perfil, (perfil) => perfil.usuarios, { eager: true })
  @JoinColumn({ name: 'perfilId' })
  perfil: Perfil;

  @Column()
  perfilId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
