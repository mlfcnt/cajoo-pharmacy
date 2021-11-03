import { Drug } from "../src/Drug";
import { Pharmacy } from "../src/pharmacy";

describe("Fervex", () => {
  describe("expiresIn", () => {
    it("Should decrease by 1 everyday", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 10, 10)]);
      const [drugAfterADay] = pharmacy.updateBenefitValue();
      expect(drugAfterADay.expiresIn).toEqual(9);
    });
  });
  describe("Benefit", () => {
    it("Should increase by 2 when there are 10 days or less", () => {
      const STARTING_BENEFIT = 1;
      const EXPIRES_IN_DAYS = 10;
      const pharmacy = new Pharmacy([
        new Drug("Fervex", EXPIRES_IN_DAYS, STARTING_BENEFIT),
      ]);
      const [drugAfterADay] = pharmacy.updateBenefitValue();
      expect(drugAfterADay.benefit).toEqual(3);
    });
    it("Should increase by 3 when there are 5 days or less", () => {
      const STARTING_BENEFIT = 1;
      const EXPIRES_IN_DAYS = 5;
      const pharmacy = new Pharmacy([
        new Drug("Fervex", EXPIRES_IN_DAYS, STARTING_BENEFIT),
      ]);
      const [drugAfterADay] = pharmacy.updateBenefitValue();
      expect(drugAfterADay.benefit).toEqual(4);
    });
    it("Should drop to 0 after the expiration date", () => {
      const STARTING_BENEFIT = 10;
      const EXPIRES_IN_DAYS = 0;
      const pharmacy = new Pharmacy([
        new Drug("Fervex", EXPIRES_IN_DAYS, STARTING_BENEFIT),
      ]);
      const [drugAfterADay] = pharmacy.updateBenefitValue();
      expect(drugAfterADay.benefit).toEqual(0);
    });
    it("Should stop increasing when reaching 50", () => {
      const STARTING_BENEFIT = 50;
      const EXPIRES_IN_DAYS = 100;
      const herbalTea = new Drug("Fervex", EXPIRES_IN_DAYS, STARTING_BENEFIT);
      const pharmacy = new Pharmacy([herbalTea]);
      const [drug] = pharmacy.updateBenefitValue();
      expect(drug.benefit).toEqual(STARTING_BENEFIT);
    });
  });
});
