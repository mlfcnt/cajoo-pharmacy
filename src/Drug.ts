export type DrugName =
  | "Herbal Tea"
  | "Fervex"
  | "Magic Pill"
  | "Doliprane"
  | "Dafalgan";
/**
 * Represents a Drug
 
 * @param {expiresIn} number - The umber of days until the drug expires.
 * @param {benefit} number - Value which denotes how powerful the drug is
 * @param {decreaseBenefitRate} number - The rate at which the benefit decreases everyday
 * @param {benefitLimit} number - The limit this drug's benefit can't top
 */
export class Drug {
  private readonly _name: DrugName;
  private _expiresIn: number;
  private _benefit: number;
  private _decreaseBenefitRate: number;
  private _benefitLimit: number;
  constructor(
    name: DrugName,
    expiresIn: number,
    benefit: number,
    decreaseBenefitRate = 1,
    // The Benefit of an item is never more than 50
    benefitLimit = 50
  ) {
    this._name = name;
    this._expiresIn = expiresIn;
    this._benefit = benefit;
    this._decreaseBenefitRate = decreaseBenefitRate;
    this._benefitLimit = benefitLimit;
  }

  /**
   * Update the value of the drug expiresIn property by one day if the conditions are met
   * @returns void
   */
  public updateExpiresIn(): void {
    //"Magic Pill" never expires
    if (this.name === "Magic Pill") return;
    this.expiresIn--;
  }

  public get name(): DrugName {
    return this._name;
  }
  public get expiresIn(): number {
    return this._expiresIn;
  }

  /**
   * Update  the value of the drug benefit if the conditions are met
   * @returns void
   */
  public updateBenefit(): void {
    switch (this.name) {
      case "Fervex":
        switch (true) {
          //Benefit drops to 0 after the expiration date
          case this.expiresIn < 0:
            this.benefit = 0;
            return;
          //Benefit increases by 3 when there are 5 days or less
          case this.expiresIn <= 5:
            this.benefit += 3;
            return;
          //Benefit increases by 2 when there are 10 days
          case this.expiresIn <= 10:
            this.benefit += 2;
            return;
          default:
            this.benefit++;
            break;
        }
      case "Herbal Tea":
        // Herbal Tea" actually increases in Benefit the older it gets
        switch (true) {
          //Benefit increases twice as fast after the expiration date
          case this.expiresIn < 0:
            this.benefit += this._decreaseBenefitRate * 2;
            return;
          default:
            this.benefit += this._decreaseBenefitRate;
            return;
        }
      case "Magic Pill":
        //"Magic Pill" never decreases in Benefit
        return;
      default:
        // Once the expiration date has passed, Benefit degrades twice as fast
        if (this._expiresIn === -1) {
          this._decreaseBenefitRate = this._decreaseBenefitRate * 2;
        }
        this.benefit -= this._decreaseBenefitRate;
        return;
    }
  }

  public set expiresIn(expiresIn: number) {
    this._expiresIn = expiresIn;
  }

  public get benefit(): number {
    return this._benefit;
  }

  public set benefit(benefit: number) {
    // Benefit won't update if the limit is reached
    if (benefit >= this._benefitLimit) {
      this._benefit = this._benefitLimit;
      return;
    }

    // The Benefit of an item is never negative
    if (benefit < 0) {
      this._benefit = 0;
      return;
    }

    this._benefit = benefit;
  }
}
