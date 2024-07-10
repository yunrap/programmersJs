import { specialArray } from "./specialArray";

describe("특이한 이차원 배열 2", () => {
  test("테스트1--", () => {
    expect(
      specialArray([
        [5, 192, 33],
        [192, 72, 95],
        [33, 95, 999],
      ])
    ).toEqual(1);
  });

  test("테스트2--", () => {
    expect(
      specialArray([
        [19, 498, 258, 587],
        [63, 93, 7, 754],
        [258, 7, 1000, 723],
        [587, 754, 723, 81],
      ])
    ).toEqual(0);
  });
});
