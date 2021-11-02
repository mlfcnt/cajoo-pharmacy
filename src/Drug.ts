import { DrugName } from "./types";

export class Drug {
  name: DrugName;
  expiresIn: number;
  benefit: number;
  constructor(name: DrugName, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}
