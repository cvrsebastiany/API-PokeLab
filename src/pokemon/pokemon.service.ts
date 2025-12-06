import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  private pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Pikachu',
      species: 'Pikachu',
      type: 'Electric',
      level: 25,
      hp: 85,
      attack: 75,
      defense: 60,
      trainer: 'Ash Ketchum',
      status: 'healthy',
      lastCheckup: new Date('2024-12-01'),
      notes: 'Regular checkup completed',
    },
    {
      id: 2,
      name: 'Charizard',
      species: 'Charizard',
      type: 'Fire/Flying',
      level: 36,
      hp: 120,
      attack: 110,
      defense: 85,
      trainer: 'Red',
      status: 'in-treatment',
      lastCheckup: new Date('2024-12-05'),
      notes: 'Wing injury, recovering well',
    },
    {
      id: 3,
      name: 'Blastoise',
      species: 'Blastoise',
      type: 'Water',
      level: 42,
      hp: 130,
      attack: 95,
      defense: 120,
      trainer: 'Blue',
      status: 'healthy',
      lastCheckup: new Date('2024-11-28'),
      notes: 'Excellent health',
    },
  ];
  private nextId = 4;

  findAll(): Pokemon[] {
    return this.pokemons;
  }

  findOne(id: number): Pokemon {
    const pokemon = this.pokemons.find((p) => p.id === id);
    if (!pokemon) {
      throw new NotFoundException(`Pokemon with ID ${id} not found`);
    }
    return pokemon;
  }

  create(createPokemonDto: CreatePokemonDto): Pokemon {
    const newPokemon: Pokemon = {
      id: this.nextId++,
      ...createPokemonDto,
    };
    this.pokemons.push(newPokemon);
    return newPokemon;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto): Pokemon {
    const index = this.pokemons.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Pokemon with ID ${id} not found`);
    }
    this.pokemons[index] = {
      ...this.pokemons[index],
      ...updatePokemonDto,
    };
    return this.pokemons[index];
  }

  remove(id: number): void {
    const index = this.pokemons.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Pokemon with ID ${id} not found`);
    }
    this.pokemons.splice(index, 1);
  }
}
