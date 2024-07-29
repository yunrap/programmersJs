import { racingCar } from "./racingCar";

describe("핸드폰 번호 가리기", () => {
  test("테스트1--", () => {
    expect(
      racingCar(
        ["mumu", "soe", "poe", "kai", "mine"],
        ["kai", "kai", "mine", "mine"]
      )
    ).toEqual(["mumu", "kai", "mine", "soe", "poe"]);
  });
});
