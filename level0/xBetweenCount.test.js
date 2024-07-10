import { xBetweenCount } from "./xBetweenCount";

describe("x 사이의개수", () => {
  test("테스트1--", () => {
    expect(xBetweenCount("oxooxoxxox")).toEqual([1, 2, 1, 0, 1, 0]);
  });

  test("테스트2--", () => {
    expect(xBetweenCount("xabcxdefxghi")).toEqual([0, 3, 3, 3]);
  });
});
