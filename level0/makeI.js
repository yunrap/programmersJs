const makeI = (myString) => {
  var answer = "";

  for (let index = 0; index < myString.length; index++) {
    const element = myString[index];
    if (element < "l") {
      myString =
        myString.substring(0, index) + "l" + myString.substring(index + 1);
    }
  }

  return (answer = myString);
};

export { makeI };

// :: I로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181834

// :: 문제
// 알파벳순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return

// :: 접근방법
// string을 반복문으로돌려서 아스키코드 "l"인 108보다 작다면 replace

// 자바스크립트는 알파벳끼리 비교가되구나, 자바에서는 안되는데 신기
