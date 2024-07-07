const countString = (myString, pat) => {
  var answer = 0;
  let myStringTemp = myString;

  while (true) {
    let index = myStringTemp.indexOf(pat);
    if (index !== -1) {
      myStringTemp = myStringTemp.substring(index + 1, myStringTemp.length);
      answer++;
    } else {
      break;
    }
  }
  return answer;
};

export { countString };

// :: 문자열이 몇번 등장하는지 세기
// https://school.programmers.co.kr/learn/courses/30/lessons/181871

// :: 문제해석
// 문자열포함일때 일치한index까지만 제거후 남은문자열끼리 문자열일치를 판단하면되겠다

// :: 접근방법
// 문자열포함일때 첫번째index까지 제거후 남은문자열끼리 문자열일치를 판단하면되겠다
