import { spaceCompare } from "./spaceCompare";

describe("원하는 문자열찾기", () => {
  test("테스트1--", () => {
    expect(spaceCompare("i love you")).toEqual(["i", "love", "you"]);
  });

  test("테스트2--", () => {
    expect(spaceCompare("programmers")).toEqual(["programmers"]);
  });
});
