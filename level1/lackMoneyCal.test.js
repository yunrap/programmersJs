import { lackMoneyCal } from "./lackMoneyCal";

describe("부족한 금액 계산하기", () => {
  test("테스트1--", () => {
    expect(lackMoneyCal(3,20,4)).toEqual(10);
  });

});
