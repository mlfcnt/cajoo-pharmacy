import { Drug } from "./Drug";

export class Pharmacy {
  constructor(public drugs: Drug[] = []) {}

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      drug.updateExpiresIn();
      drug.updateBenefit();
    });
    return this.drugs;
  }
}
