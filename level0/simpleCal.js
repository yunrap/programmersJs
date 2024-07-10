const simpleCal = (binomial) => {
  var answer = 0;
  const [a, b, c] = binomial.split(" ");
  answer = caluculate(a, b, c);
  return answer;
};

const caluculate = (a, b, c) => {
  const firstNum = Number(a);
  const cal = b;
  const secondNum = Number(c);

  if (cal == "+") {
    return firstNum + secondNum;
  }

  if (cal == "-") {
    return firstNum - secondNum;
  }

  if (cal == "*") {
    return firstNum * secondNum;
  }
};

export { simpleCal };

// :: 간단한 식 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181865

// :: 문제해석
// binomial은 "a op b"형태의 이항식이고 a와b는 음이아닌정수, op는 + - * 중 하나

// :: 접근방법
// " " 으로 짜르는 문자를 잘라, op의 사직연산 함수를 만들어 연산하기
