import { mostLongStr } from "./mostLongStr";

describe("특정 문자열로 끝나는 가장 긴 부분 문자열 찾기", () => {
  test("테스트1--", () => {
    expect(mostLongStr("AbCdEFG", "dE")).toEqual("AbCdE");
  });

  test("테스트2--", () => {
    expect(mostLongStr("AAAAaaaa", "a")).toEqual("AAAAaaaa");
  });
});
