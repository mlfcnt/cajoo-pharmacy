export type DrugName = "Herbal Tea" | "Fervex" | "Magic Pill" | "Doliprane";

export class Drug {
  private readonly _name: DrugName;
  private _expiresIn: number;
  private _benefit: number;
  constructor(name: DrugName, expiresIn: number, benefit: number) {
    this._name = name;
    this._expiresIn = expiresIn;
    this._benefit = benefit;
  }
  public get name(): DrugName {
    return this._name;
  }
  public get expiresIn(): number {
    return this._expiresIn;
  }

  public updateBenefit() {
    switch (this.name) {
      case "Fervex":
        switch (true) {
          case this.benefit >= 50:
            return;
          case this.expiresIn <= 0:
            return (this.benefit = 0);
          case this.expiresIn <= 5:
            return (this.benefit += 3);
          case this.expiresIn <= 10:
            return (this.benefit += 2);

          default:
            this.benefit++;
            break;
        }
      case "Herbal Tea":
        switch (true) {
          case this.benefit >= 50:
            return;
          case this.expiresIn < 0:
            return (this.benefit += 2);
          default:
            return this.benefit++;
        }

      default:
        return;
    }
  }

  public updateExpiresIn() {
    if (this.name === "Magic Pill") return;
    this.expiresIn--;
  }

  public set expiresIn(expiresIn: number) {
    this._expiresIn = expiresIn;
  }

  public get benefit(): number {
    return this._benefit;
  }

  public set benefit(benefit: number) {
    this._benefit = benefit;
  }
}
