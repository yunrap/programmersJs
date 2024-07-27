import { pAndyCount } from "./pAndyCount";

describe("문자열 내 p와 y의개수", () => {
  test("테스트1--", () => {
    expect(pAndyCount("pPoooyY")).toEqual(true);
  });

  test("테스트2--", () => {
    expect(pAndyCount("Pyy")).toEqual(false);
  });
});
