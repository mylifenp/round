import { Round } from "../src/round";

describe("round", () => {
  it("awayFromZero() includes own name", () => {
    expect(Round.awayFromZero(1.5)).toEqual(2);
  });
});
