const xBetweenCount = (myString) => {
  var answer = [];
  while (true) {
    let index = myString.indexOf("x");
    if (index == -1) break;
    answer.push(index);
    myString = myString.substring(index + 1, myString.length);
  }

  answer.push(myString.length);
  return answer;
};

export { xBetweenCount };

// :: x 사이의개수
// https://school.programmers.co.kr/learn/courses/30/lessons/181867

// :: 문제
// myString을 문자 "x"를 기준으로 나눴을때 각자 문자열길이를 순서대로 저장

// :: 접근방법
// index를 사용해서 x를 찾고, 배열넣고, myString에서 제거하면 될듯
