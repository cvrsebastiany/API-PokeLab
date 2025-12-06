import { DataSource } from 'typeorm';
import { Perfil, TipoPerfil } from '../../perfis/entities/perfil.entity';

export async function seedPerfis(dataSource: DataSource) {
  const perfilRepository = dataSource.getRepository(Perfil);

  const existingPerfis = await perfilRepository.count();
  if (existingPerfis > 0) {
    console.log('Perfis data already seeded');
    return;
  }

  const perfis = [
    {
      nome: TipoPerfil.TREINADOR,
      descricao: 'Treinador de Pokémon responsável pelos cuidados e treinamento',
    },
    {
      nome: TipoPerfil.PROFISSIONAL_SAUDE,
      descricao: 'Profissional da saúde especializado em cuidados médicos de Pokémon',
    },
    {
      nome: TipoPerfil.TECNICO_LABORATORIO,
      descricao: 'Técnico de laboratório responsável por análises e exames',
    },
  ];

  await perfilRepository.save(perfis);
  console.log('Perfis data seeded successfully');
}
