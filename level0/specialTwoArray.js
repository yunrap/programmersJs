const specialTwoArray = (n) => {
  var answer = [];

  for (let a = 0; a < n; a++) {
    let arrayTemp = [];

    for (let b = 0; b < n; b++) {
      if (a == b) arrayTemp.push(1);
      else {
        arrayTemp.push(0);
      }
    }
    answer.push(arrayTemp);
  }

  return answer;
};

export { specialTwoArray };

// :: 특별한 이차원 배열 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181833

// :: 문제
// 정수 n이 매개변수로 주어질때, 다음과같은 n x n 크기의 이차원 배열 arr을 return하는 함수를작성

// :: 접근방법
// 처음 n 만큼 반복문을 돌린다. 그다음 n만큼 반복문을돌린다(단 index는 1, 아닌것들은 0)
