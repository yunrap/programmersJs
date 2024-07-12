import { newArrayAddRm } from "./newArrayAddRm";

describe("빈 배열에 추가,삭제하기", () => {
  test("테스트1--", () => {
    expect(
      newArrayAddRm([3, 2, 4, 1, 3], [true, false, true, false, false])
    ).toEqual([3, 3, 3, 3, 4, 4, 4, 4]);
  });
});
