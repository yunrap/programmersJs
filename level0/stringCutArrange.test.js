import { stringCutArrange } from "./stringCutArrange";

describe("문자열 잘라서 정렬하기", () => {
  test("테스트1--", () => {
    expect(stringCutArrange("axbxcxdx")).toEqual(["a", "b", "c", "d"]);
  });

  test("테스트2--", () => {
    expect(stringCutArrange("dxccxbbbxaaaa")).toEqual([
      "aaaa",
      "bbb",
      "cc",
      "d",
    ]);
  });

  test("테스트3--", () => {
    expect(stringCutArrange("dxccxbbbxxaaaa")).toEqual([
      "aaaa",
      "bbb",
      "cc",
      "d",
    ]);
  });
});
