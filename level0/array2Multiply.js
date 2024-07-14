const array2Multiply = (arr) => {
  var answer = [...arr];
  let minLength = 1;
  while (minLength < arr.length) minLength *= 2;
  var addZeroCount = minLength - arr.length;
  for (let i = 0; i < addZeroCount; i++) {
    answer.push(0);
  }

  return answer;
};

export { array2Multiply };

// :: 배열의 길이를 2의 거듭제곱으로 만들기

// :: 문제해석
// arr의 길이가 거듭제곱이될도록 arr뒤에 정수 0을 추가하려한다. arr에 최소한의 개수로 0을추가한 배열을 return하여라

// :: 접근방법
// 거듭제곱이 아닐때 (1) 길이 , (2) Math.pow(2, 1결과값+1) 해서  (2) -(1) 반복문으로 0을 push()
