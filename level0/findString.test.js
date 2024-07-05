import { findString } from "./findString";

describe("원하는 문자열찾기", () => {
  test("테스트1--", () => {
    expect(findString("AbCdEfG", "aBc")).toBe(1);
  });

  test("테스트2--", () => {
    expect(findString("aaAA", "aaaaa")).toBe(0);
  });
});
