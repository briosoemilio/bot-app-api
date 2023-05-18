import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBotDto {
  constructor(
    name: string,
    purpose: string,
    attack: number,
    defense: number,
    health: number,
    energy: number,
    intelligence: number,
    isRare: boolean,
    picture?: string,
    isFavorite?: boolean,
  ) {
    this.name = name;
    this.purpose = purpose;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.energy = energy;
    this.intelligence = intelligence;
    this.isRare = isRare;
    this.picture = picture;
    this.isFavorite = isFavorite;
  }
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  purpose: string;

  @IsNotEmpty()
  @IsNumber()
  attack: number;

  @IsNotEmpty()
  @IsNumber()
  defense: number;

  @IsNotEmpty()
  @IsNumber()
  health: number;

  @IsNotEmpty()
  @IsNumber()
  energy: number;

  @IsNotEmpty()
  @IsNumber()
  intelligence: number;

  @IsBoolean()
  isRare: boolean;

  @IsOptional()
  @IsString()
  picture?: string;

  @IsOptional()
  @IsBoolean()
  isFavorite?: boolean;
}
