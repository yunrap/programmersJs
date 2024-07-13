import { coffeeOrder } from "./coffeeOrder";

describe("빈 배열에 추가,삭제하기", () => {
  test("테스트1--", () => {
    expect(
      coffeeOrder(["cafelatte", "americanoice", "hotcafelatte", "anything"])
    ).toEqual(19000);
  });

  test("테스트2--", () => {
    expect(coffeeOrder(["americanoice", "americano", "iceamericano"])).toEqual(
      13500
    );
  });
});
