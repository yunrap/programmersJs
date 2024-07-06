const mostLongStr = (myString, pat) => {
  var answer = "";
  let pos = 0;
  while (true) {
    let foundPos = myString.indexOf(pat, pos);
    if (foundPos == -1) break;

    pos = foundPos + 1;
  }

  answer = myString.substring(0, pos + (pat.length - 1));
  return answer;
};

export { mostLongStr };

// :: 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/181872

// :: 문제해석
// pat에 포함된 문자열까지 결과값에 담는다.

// :: 접근방법
// search함수사용해서 받은 index를 결과값에담으면되지않을까
