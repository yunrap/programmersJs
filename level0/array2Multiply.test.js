import { array2Multiply } from "./array2Multiply";

describe("배열의 길이를 2의 거듭제곱으로 만들기", () => {
  test("테스트1--", () => {
    expect(array2Multiply([1, 2, 3, 4, 5, 6])).toEqual([
      1, 2, 3, 4, 5, 6, 0, 0,
    ]);
  });

  test("테스트2--", () => {
    expect(array2Multiply([58, 172, 746, 89])).toEqual([58, 172, 746, 89]);
  });

  test("테스트3--", () => {
    expect(array2Multiply([1, 2, 3, 4, 5, 6, 4])).toEqual([
      1, 2, 3, 4, 5, 6, 4, 0,
    ]);
  });

  test("테스트3--", () => {
    expect(array2Multiply([1, 2, 3, 4, 5, 6, 4, 2, 1])).toEqual([
      1, 2, 3, 4, 5, 6, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0,
    ]);
  });
});
