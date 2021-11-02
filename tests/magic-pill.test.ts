import { Drug } from "../src/Drug";
import { Pharmacy } from "../src/pharmacy";

describe("Magic Pill", () => {
  describe("expiresIn", () => {
    it("Should never decrease (or increase)", () => {
      const EXPIRES_IN_DAYS = 100;
      const pharmacy = new Pharmacy([
        new Drug("Magic Pill", EXPIRES_IN_DAYS, 10),
      ]);
      for (let index = 0; index < 300; index++) {
        const [drugAfterADay] = pharmacy.updateBenefitValue();
        expect(drugAfterADay.expiresIn).toEqual(EXPIRES_IN_DAYS);
      }
    });
  });
  describe("Benefit", () => {
    it("Should never decrease (or increase)", () => {
      const STARTING_BENEFIT = 10;
      const pharmacy = new Pharmacy([
        new Drug("Magic Pill", 10, STARTING_BENEFIT),
      ]);
      for (let index = 0; index < 300; index++) {
        const [drugAfterADay] = pharmacy.updateBenefitValue();
        expect(drugAfterADay.benefit).toEqual(STARTING_BENEFIT);
      }
    });
  });
});
