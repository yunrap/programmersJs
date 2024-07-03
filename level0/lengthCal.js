const lengthCal = (num_list) => {
  var answer = 0;
  var mulanswer = 1;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list.length >= 11) {
      answer += num_list[i];
    } else {
      mulanswer *= num_list[i];
    }
  }

  return num_list.length >= 11 ? answer : mulanswer;
};

export { lengthCal };

// :: 길이에따른연산 (추가)
// https://school.programmers.co.kr/learn/courses/30/lessons/181879?language=javascript

// :: 문제해석
// 길이가 11이상이면 모두더하기, 10이하이면 모두곱하고 return하기

// :: 접근방법
// if문 , 분기태워서 결과값 return 하기
