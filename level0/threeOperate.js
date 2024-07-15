const threeOperate = (myStr) => {
  var answer = [];
  var tempArray = "";

  for (let index = 0; index < myStr.length; index++) {
    if (!isContainAorBorC(myStr[index])) {
      tempArray += myStr[index];
    } else {
      if (tempArray !== "") {
        answer.push(tempArray);
        tempArray = "";
      }
    }
  }

  if (tempArray !== "") {
    answer.push(tempArray);
  }

  if (tempArray.length == 0) {
    answer.push("EMPTY");
  }

  return answer;
};

const isContainAorBorC = (char) => {
  return char == "a" || char == "b" || char == "c" ? true : false;
};

export { threeOperate };

// :: 세 개의 구분자
// https://school.programmers.co.kr/learn/courses/30/lessons/181862

// :: 문제해석
// "a", "b", "c"를 구분자로 사용해 문자열을 나눈다.

// :: 접근방법
// 변수의 위치를 잘이용하면될듯, ?? 코딩계속해봄

// :: 다른사람풀이
//  myStr.split(/[a|b|c]/).filter(str => str); 내풀이를 한줄에 정리한 방법..!참고
