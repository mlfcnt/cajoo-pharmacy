import { Drug } from "./Drug";

/**
 * Represents a pharmacy
 * @param {Drug[]} drugs - The list of drugs included in this pharmacy
 */
export class Pharmacy {
  constructor(public drugs: Drug[] = []) {}

  /**
   * Updates the benefit and expiresIn values of every drug in the pharmacy
   * @returns Drug[]
   */
  updateBenefitValue(): Drug[] {
    this.drugs.forEach(drug => {
      drug.updateExpiresIn();
      drug.updateBenefit();
    });
    return this.drugs;
  }
}
