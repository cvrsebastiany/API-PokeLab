import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  private getVersion(): string {
    try {
      const packageJson = JSON.parse(
        readFileSync(join(process.cwd(), 'package.json'), 'utf8')
      );
      return packageJson.version;
    } catch (error) {
      return '0.0.0';
    }
  }

  getHello(): object {
    return {
      projeto: 'PokéLab',
      versao: this.getVersion(),
      descricao: 'Projeto final da disciplina de Tópicos Especiais em Programação III - 2025/2',
      alunos: [
        {
          nome: 'Edgar Nicolas de Oliveira Silva',
          email: 'edgar.silva@ufcspa.edu.br'
        },
        {
          nome: 'Carlise Vitoria Reis Sebastiany',
          email: 'carlise.sebastiany@ufcspa.edu.br'
        },
        {
          nome: 'Handriel Scheffer',
          email: 'handriel.scheffer@ufcspa.edu.br'
        }
      ],
      orientacao: {
        nome: 'Muriel Figueredo Franco',
        email: 'muriel.franco@ufcspa.edu.br'
      }
    };
  }
}
