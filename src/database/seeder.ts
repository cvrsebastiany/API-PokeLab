import { DataSource } from 'typeorm';
import { seedPokemons } from './seeds/pokemon.seed';

export async function runSeeds(dataSource: DataSource) {
  try {
    await seedPokemons(dataSource);
    console.log('All seeds completed');
  } catch (error) {
    console.error('Error running seeds:', error);
    throw error;
  }
}
