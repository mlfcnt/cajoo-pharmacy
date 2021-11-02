import { Drug } from "../src/Drug";
import { Pharmacy } from "../src/pharmacy";

describe("Herbal Tea", () => {
  describe("expiresIn", () => {
    it("Should decrease by 1 everyday", () => {
      const pharmacy = new Pharmacy([new Drug("Herbal Tea", 10, 10)]);
      const drugsAfterADay = pharmacy.updateBenefitValue();
      for (const drugToTest of drugsAfterADay) {
        expect(drugToTest.expiresIn).toEqual(9);
      }
    });
  });
  describe("Benefit", () => {
    it("It should increases the older it gets until reaching 50", () => {
      const STARTING_BENEFIT = 0;
      const EXPIRES_IN_DAYS = 100;
      const herbalTea = new Drug(
        "Herbal Tea",
        EXPIRES_IN_DAYS,
        STARTING_BENEFIT
      );
      const pharmacy = new Pharmacy([herbalTea]);
      for (let index = STARTING_BENEFIT; index < 50; index++) {
        const [drug] = pharmacy.updateBenefitValue();
        expect(drug.benefit).toEqual(index + 1);
      }
    });
    it("It should increase twice as fast after the expiration date", () => {
      const STARTING_BENEFIT = 0;
      const EXPIRES_IN_DAYS = 0;
      const herbalTea = new Drug(
        "Herbal Tea",
        EXPIRES_IN_DAYS,
        STARTING_BENEFIT
      );
      const pharmacy = new Pharmacy([herbalTea]);
      const [drug] = pharmacy.updateBenefitValue();
      expect(drug.benefit).toEqual(STARTING_BENEFIT + 2);
    });
    it("It should stop increasing when reaching 50", () => {
      const STARTING_BENEFIT = 50;
      const EXPIRES_IN_DAYS = 100;
      const herbalTea = new Drug(
        "Herbal Tea",
        EXPIRES_IN_DAYS,
        STARTING_BENEFIT
      );
      const pharmacy = new Pharmacy([herbalTea]);
      const [drug] = pharmacy.updateBenefitValue();
      expect(drug.benefit).toEqual(STARTING_BENEFIT);
    });
  });
});
