import { countString } from "./countString";

describe("문자열이 몇번등장하는지 세기", () => {
  test("테스트1--", () => {
    expect(countString("banana", "ana")).toBe(2);
  });

  test("테스트2--", () => {
    expect(countString("aaaa", "aa")).toBe(3);
  });
});
