import { makeArray6 } from "./makeArray6";

describe("배열 만들기 6", () => {
  test("테스트1--", () => {
    expect(makeArray6([0, 1, 1, 1, 0])).toEqual([0, 1, 0]);
  });

  test("테스트2--", () => {
    expect(makeArray6([0, 1, 0, 1, 0])).toEqual([0, 1, 0, 1, 0]);
  });

  test("테스트3--", () => {
    expect(makeArray6([0, 1, 1, 0])).toEqual([-1]);
  });
});
