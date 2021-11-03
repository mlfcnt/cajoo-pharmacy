import { Drug } from "../src/Drug";
import { Pharmacy } from "../src/pharmacy";

describe("Doliprane", () => {
  describe("expiresIn", () => {
    it("Should decrease by 1 everyday", () => {
      const pharmacy = new Pharmacy([new Drug("Dafalgan", 10, 10, 2)]);
      const [drugAfterADay] = pharmacy.updateBenefitValue();
      expect(drugAfterADay.expiresIn).toEqual(9);
    });
  });
  describe("Benefit", () => {
    it("Should decrease by 2 everyday", () => {
      const pharmacy = new Pharmacy([new Drug("Dafalgan", 10, 10, 2)]);
      const [drugAfterADay] = pharmacy.updateBenefitValue();
      expect(drugAfterADay.benefit).toEqual(8);
    });
  });
});
