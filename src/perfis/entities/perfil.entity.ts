import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

export enum TipoPerfil {
  TREINADOR = 'Treinador',
  PROFISSIONAL_SAUDE = 'Profissional da Saúde',
  TECNICO_LABORATORIO = 'Técnico de Laboratório',
}

@Entity('perfis')
export class Perfil {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TipoPerfil,
    unique: true,
  })
  nome: TipoPerfil;

  @Column({ type: 'text', nullable: true })
  descricao?: string;

  @OneToMany(() => Usuario, (usuario) => usuario.perfil)
  usuarios: Usuario[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
