import { Injectable } from '@nestjs/common';
import { version } from '../package.json';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      projeto: 'PokéLab',
      versao: version,
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
