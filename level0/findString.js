const findString = (myString, pat) => {
  var answer = 0;

  const stringStr = myString.toUpperCase();
  const str = pat.toUpperCase();

  if (stringStr.includes(str)) {
    answer = 1;
  }

  return answer;
};

export { findString };

// :: 원하는 문자열찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/181878

// :: 문제해석
// 연속된문자열에서 pat포함된 문자열이 존재하면 1 아니면 0을 return

// :: 접근방법
// 대문자로다통일해서 include로 체크
