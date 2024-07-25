import { competition } from "./competition";

describe("I로 만들기", () => {
  test("테스트1--", () => {
    expect(
      competition(
        [3, 7, 2, 5, 4, 6, 1],
        [false, true, true, true, true, false, false]
      )
    ).toBe(20403);
  });

  test("테스트1--", () => {
    expect(convertUpper([1, 2, 3], [true, true, true])).toBe(102);
  });
});
