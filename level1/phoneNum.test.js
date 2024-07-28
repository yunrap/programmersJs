import { phoneNum } from "./phoneNum";

describe("핸드폰 번호 가리기", () => {
  test("테스트1--", () => {
    expect(phoneNum("01033334444")).toEqual("*******4444");
  });

  test("테스트2--", () => {
    expect(phoneNum("027778888")).toEqual("*****8888");
  });
});
