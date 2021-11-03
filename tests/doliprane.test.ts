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
});
