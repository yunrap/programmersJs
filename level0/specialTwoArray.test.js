import { specialTwoArray } from "./specialTwoArray";

describe("특별한 이차원 배열 1", () => {
  test("테스트1--", () => {
    expect(
      specialTwoArray(3).toEqual([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ])
    );
  });

  test("테스트2--", () => {
    expect(specialTwoArray(6)).toEqual([
      [1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1],
    ]);
  });

  test("테스트3--", () => {
    expect(specialTwoArray(1)).toEqual([[[1]]]);
  });
});

// 배열 ?? 테스트에러
