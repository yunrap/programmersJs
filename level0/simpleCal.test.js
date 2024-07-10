import { simpleCal } from "./simpleCal";

describe("간단한 식 계산하기", () => {
  test("테스트1--", () => {
    expect(simpleCal("43 + 12")).toEqual(55);
  });

  test("테스트2--", () => {
    expect(simpleCal("0 - 7777")).toEqual(-7777);
  });

  test("테스트3--", () => {
    expect(simpleCal("40000 * 40000")).toEqual(1600000000);
  });
});
