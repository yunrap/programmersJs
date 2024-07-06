const arrayChageUpDown = (strArr) => {
  var answer = [];

  for (let index = 0; index < strArr.length; index++) {
    if (index % 2 == 0) {
      answer.push(strArr[index].toLowerCase());
    } else {
      answer.push(strArr[index].toUpperCase());
    }
  }
  return answer;
};

export { arrayChageUpDown };

// :: 배열에서 문자열 대소문자 변환하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181875

// :: 문제해석
// 홀수번째 인덱스는 모두대문자 짝수번째 인덱스는 모두소문자

// :: 접근방법
// 배열 반복분돌려서 홀수일때 toUpperCase 짝수일때 toLowerCase 사용하면될듯

// :: 다른사람풀이
// map으로 사용하는방법도있다
