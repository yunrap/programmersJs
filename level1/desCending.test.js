import { desCending } from "./desCending";

describe("정수 내림차순으로 배치하기", () => {
  test("테스트1--", () => {
    expect(desCending(118372)).toEqual(873211);
  });

});
