import { arrayChageUpDown } from "./arrayChageUpDown";

describe("배열에서 문자열 대소문자 변환하기", () => {
  test("테스트1--", () => {
    expect(arrayChageUpDown(["AAA", "BBB", "CCC", "DDD"])).toEqual([
      "aaa",
      "BBB",
      "ccc",
      "DDD",
    ]);
  });
});
