import { doubleCircle } from "./doubleCircle";

describe("이차원 배열 대각선 순회하기", () => {
  test("테스트1--", () => {
    expect(
      doubleCircle(
        [
          [0, 1, 2],
          [1, 2, 3],
          [2, 3, 4],
          [3, 4, 5],
        ],
        2
      )
    ).toBe(8);
  });
});
