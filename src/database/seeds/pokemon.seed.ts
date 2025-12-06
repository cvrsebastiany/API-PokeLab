import { DataSource } from 'typeorm';
import { Pokemon } from '../../pokemon/entities/pokemon.entity';

export async function seedPokemons(dataSource: DataSource) {
  const pokemonRepository = dataSource.getRepository(Pokemon);

  const existingPokemons = await pokemonRepository.count();
  if (existingPokemons > 0) {
    console.log('Pokemon data already seeded');
    return;
  }

  const pokemons = [
    {
      name: 'Pikachu',
      species: 'Pikachu',
      type: 'Electric',
      level: 25,
      hp: 85,
      attack: 75,
      defense: 60,
      trainer: 'Ash Ketchum',
      status: 'healthy' as const,
      lastCheckup: new Date('2024-12-01'),
      notes: 'Regular checkup completed',
    },
    {
      name: 'Charizard',
      species: 'Charizard',
      type: 'Fire/Flying',
      level: 36,
      hp: 120,
      attack: 110,
      defense: 85,
      trainer: 'Red',
      status: 'in-treatment' as const,
      lastCheckup: new Date('2024-12-05'),
      notes: 'Wing injury, recovering well',
    },
    {
      name: 'Blastoise',
      species: 'Blastoise',
      type: 'Water',
      level: 42,
      hp: 130,
      attack: 95,
      defense: 120,
      trainer: 'Blue',
      status: 'healthy' as const,
      lastCheckup: new Date('2024-11-28'),
      notes: 'Excellent health',
    },
  ];

  await pokemonRepository.save(pokemons);
  console.log('Pokemon data seeded successfully');
}
