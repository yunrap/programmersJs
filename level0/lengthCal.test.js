import { lengthCal } from "./lengthCal";

describe("길이에따른연산", () => {
  test("테스트1--", () => {
    expect(lengthCal([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1])).toBe(51);
  });

  test("테스트2--", () => {
    expect(lengthCal([2, 3, 4, 5])).toBe(120);
  });
});
