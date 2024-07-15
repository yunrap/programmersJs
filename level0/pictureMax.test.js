import { pictureMax } from "./pictureMax";

describe("세 개의 구분자", () => {
  test("테스트1--", () => {
    expect(
      pictureMax(
        [
          ".xx...xx.",
          "x..x.x..x",
          "x...x...x",
          ".x.....x.",
          "..x...x..",
          "...x.x...",
          "....x....",
        ],
        2
      )
    ).toEqual([
      "..xxxx......xxxx..",
      "..xxxx......xxxx..",
      "xx....xx..xx....xx",
      "xx....xx..xx....xx",
      "xx......xx......xx",
      "xx......xx......xx",
      "..xx..........xx..",
      "..xx..........xx..",
      "....xx......xx....",
      "....xx......xx....",
      "......xx..xx......",
      "......xx..xx......",
      "........xx........",
      "........xx........",
    ]);
  });

  test("테스트2--", () => {
    expect(pictureMax(["x.x", ".x.", "x.x"], 3)).toEqual([
      "xxx...xxx",
      "xxx...xxx",
      "xxx...xxx",
      "...xxx...",
      "...xxx...",
      "...xxx...",
      "xxx...xxx",
      "xxx...xxx",
      "xxx...xxx",
    ]);
  });
});
