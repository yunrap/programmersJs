import { makeI } from "./makeI";

describe("I로 만들기", () => {
  test("테스트1--", () => {
    expect(makeI("abcdevwxyz")).toEqual("lllllvwxyz");
  });

  test("테스트2--", () => {
    expect(makeI("jjnnllkkmm")).toEqual("llnnllllmm");
  });
});
