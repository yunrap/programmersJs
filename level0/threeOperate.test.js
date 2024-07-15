import { threeOperate } from "./threeOperate";

describe("세 개의 구분자", () => {
  test("테스트1--", () => {
    expect(threeOperate("baconlettucetomato")).toEqual([
      "onlettu",
      "etom",
      "to",
    ]);
  });

  test("테스트2--", () => {
    expect(threeOperate("abcd")).toEqual(["d"]);
  });

  test("테스트3--", () => {
    expect(threeOperate("cabab")).toEqual(["EMPTY"]);
  });
});
