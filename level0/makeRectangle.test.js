import { makeRectangle } from "./makeRectangle";

describe("정사각형으로 만들기", () => {
  test("테스트1--", () => {
    expect(
      makeRectangle([
        [572, 22, 37],
        [287, 726, 384],
        [85, 137, 292],
        [487, 13, 876],
      ])
    ).toEqual([
      [572, 22, 37, 0],
      [287, 726, 384, 0],
      [85, 137, 292, 0],
      [487, 13, 876, 0],
    ]);
  });

  test("테스트2--", () => {
    expect(
      makeRectangle([
        [57, 192, 534, 2],
        [9, 345, 192, 999],
      ])
    ).toEqual([
      [57, 192, 534, 2],
      [9, 345, 192, 999],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  test("테스트3--", () => {
    expect(
      makeRectangle([
        [1, 2],
        [3, 4],
      ])
    ).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test("테스트4--", () => {
    expect(
      makeRectangle([
        [572, 22, 37],
        [287, 726, 384],
        [85, 137, 292],
      ])
    ).toEqual([
      [572, 22, 37],
      [287, 726, 384],
      [85, 137, 292],
    ]);
  });
});