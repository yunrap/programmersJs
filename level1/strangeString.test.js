import { strangeString } from "./strangeString";

describe("이상한 문자 만들기", () => {
  test("테스트1--", () => {
    expect(strangeString("try  hello world")).toEqual("TrY HeLlO WoRlD");
  });
});
