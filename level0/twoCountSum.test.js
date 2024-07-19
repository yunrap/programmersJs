import { twoCountSum } from "./twoCountSum";

describe("두수의 합", () => {
  test("테스트1--", () => {
    expect(twoCountSum("582", "734")).toEqual("1316");
  });

  test("테스트2--", () => {
    expect(
      twoCountSum("18446744073709551615", "287346502836570928366")
    ).toEqual("305793246910280479981");
  });

  test("테스트3--", () => {
    expect(twoCountSum("0", "0")).toEqual("0");
  });
});
