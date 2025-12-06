import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const usuario = await this.usuarioRepository.findOne({ 
      where: { email },
      relations: ['perfil'],
    });

    if (!usuario) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(senha, usuario.senha);
    if (!isPasswordValid) {
      return null;
    }

    const { senha: _, ...result } = usuario;
    return result;
  }

  async login(loginDto: LoginDto) {
    const usuario = await this.validateUser(loginDto.email, loginDto.senha);

    if (!usuario) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    if (!usuario.ativo) {
      throw new UnauthorizedException('Usuário inativo');
    }

    const payload = { 
      email: usuario.email, 
      sub: usuario.id,
      perfilId: usuario.perfilId,
      perfil: usuario.perfil?.nome,
    };

    return {
      access_token: this.jwtService.sign(payload),
      usuario: {
        id: usuario.id,
        email: usuario.email,
        nome: usuario.nome,
        telefone: usuario.telefone,
        ativo: usuario.ativo,
        perfil: usuario.perfil,
      },
    };
  }

  async getUserById(id: number) {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
      relations: ['perfil'],
    });

    if (!usuario) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    return {
      id: usuario.id,
      email: usuario.email,
      nome: usuario.nome,
      telefone: usuario.telefone,
      ativo: usuario.ativo,
      perfil: usuario.perfil,
    };
  }
}
