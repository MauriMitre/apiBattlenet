import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Juego {
    @PrimaryGeneratedColumn()
  id: number;
}
