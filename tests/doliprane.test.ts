import { Drug } from "../src/Drug";
import { Pharmacy } from "../src/pharmacy";

describe("Doliprane", () => {
  describe("expiresIn", () => {
    it("Should decrease by 1 everyday", () => {
      const pharmacy = new Pharmacy([new Drug("Doliprane", 10, 10)]);
      const [drugAfterADay] = pharmacy.updateBenefitValue();
      expect(drugAfterADay.expiresIn).toEqual(9);
    });
  });
  describe("Benefit", () => {
    it("Should decrease by 1 everyday", () => {
      const STARTING_BENEFIT = 10;
      const EXPIRES_IN_DAYS = 10;
      const pharmacy = new Pharmacy([
        new Drug("Doliprane", EXPIRES_IN_DAYS, STARTING_BENEFIT),
      ]);
      for (let index = 1; index < 10; index++) {
        const [drugAfterADay] = pharmacy.updateBenefitValue();
        expect(drugAfterADay.benefit).toEqual(STARTING_BENEFIT - index);
      }
    });
  });
});
