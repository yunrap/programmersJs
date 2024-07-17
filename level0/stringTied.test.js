import { stringTied } from "./stringTied";

describe("문자열 묶기", () => {
  test("테스트1--", () => {
    expect(stringTied(["a", "bc", "d", "efg3", "hi"])).toEqual(2);
  });
});
