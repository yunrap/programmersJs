import { plusMinus } from "./plusMinus";

describe("음양 더하기", () => {
  test("테스트1--", () => {
    expect(plusMinus([4,7,12], [true,false,true])).toEqual(9);
  });

  test("테스트2--", () => {
    expect(plusMinus([1,2,3], [false,false,true])).toEqual(0);
  });
});
