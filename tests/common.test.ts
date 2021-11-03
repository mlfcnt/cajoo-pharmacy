import { Drug } from "../src/Drug";
import { Pharmacy } from "../src/pharmacy";
import { STARTING_POINT } from "./fixtures";

describe("Api", () => {
  it("Should not break after new features are implemented", () => {
    const drugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Fervex", 5, 40),
      new Drug("Magic Pill", 15, 40),
    ];
    const trial = new Pharmacy(drugs);

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      const oldValue = JSON.stringify(STARTING_POINT[elapsedDays]);
      const newValue = JSON.stringify(
        trial.updateBenefitValue().map(drug => ({
          name: drug.name,
          expiresIn: drug.expiresIn,
          benefit: drug.benefit,
        }))
      );

      const isEqual = oldValue === newValue;
      expect(isEqual).toBeTruthy();
    }
  });
});
