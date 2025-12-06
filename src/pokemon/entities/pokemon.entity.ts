export class Pokemon {
  id: number;
  name: string;
  species: string;
  type: string;
  level: number;
  hp: number;
  attack: number;
  defense: number;
  trainer: string;
  status: 'healthy' | 'sick' | 'in-treatment' | 'recovered';
  lastCheckup?: Date;
  notes?: string;
}
