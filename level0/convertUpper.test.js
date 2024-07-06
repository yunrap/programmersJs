import { convertUpper } from "./convertUpper";

describe("대문자로 바꾸기", () => {
  test("테스트1--", () => {
    expect(convertUpper("aBcDeFg")).toBe("ABCDEFG");
  });

  test("테스트2--", () => {
    expect(convertUpper("AAA")).toBe("AAA");
  });
});
