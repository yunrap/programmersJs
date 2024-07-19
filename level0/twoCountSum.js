const twoCountSum = (a, b) => {
  const sum = BigInt(a) + BigInt(b);
  console.log(sum);
  return sum.toString();
};

export { twoCountSum };

// :: 두수의합
// https://school.programmers.co.kr/learn/courses/30/lessons/181846

// :: 문제해석
// 두정수가 문자열로 주어질때 a + b 의값을 문자열로 return하는 값을 구하여라

// :: 접근방법
// parseInt강제전환후 더하기

// parseInt, Number 연산자,,, Number.MAX_SAFE_INTEGER 콘솔에쳐보면
// 9007199254740991 이다. 자바의 double처럼 max자리수를 넘어서면 값이 일치하지않는다
// 이점 유의해서 개발하면될듯, 이것때메 시간오래잡아먹으뮤ㅠ
