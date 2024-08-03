import { findKim } from "./findKim";

describe("서울에서 김서방 찾기", () => {
  test("테스트1--", () => {
    expect(findKim(["Jane", "Kim"])).toEqual("김서방은 1에 있다");
  });

});
