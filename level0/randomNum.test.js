import { randomNum } from "./randomNum";

describe("무작위로 K개의 수 뽑기", () => {
  test("테스트1--", () => {
    expect(randomNum([0, 1, 1, 2, 2, 3], 3)).toEqual([0, 1, 2]);
  });

  test("테스트2--", () => {
    expect(randomNum([0, 1, 1, 1, 1], 4)).toEqual([0, 1, -1, -1]);
  });

  test("테스트3--", () => {
    expect(randomNum([0, 1, 0, 1], 4)).toEqual([0, 1, -1, -1]);
  });

  test("테스트4--", () => {
    expect(randomNum([0, 1], 5)).toEqual([0, 1, -1, -1, -1]);
  });
});
