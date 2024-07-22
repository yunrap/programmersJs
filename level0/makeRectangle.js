const makeRectangle = (arr) => {
  const ROWS = arr.length;
  const COLS = arr[0].length;
  const DIFF = Math.abs(ROWS - COLS);

  if (ROWS > COLS) {
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < DIFF; j++) {
        arr[i].push(0);
      }
    }
  } else if (ROWS < COLS) {
    for (let i = 0; i < DIFF; i++) {
      const row = new Array(COLS).fill(0);
      arr.push(row);
    }
  }

  return arr;
};

export { makeRectangle };

// :: 정사각형으로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181830

// :: 문제해석
// 정사각형을 만드는것, 행과열을같게해라...배열개수짝수 && 배열안요소짝수 만들게하여라

// :: 접근방법
// 행-짝수 열-홀수면 (행-열)만큼 반복문돌리면될듯
// 행-홀수 열-홀수면 (행 비교 열) 큰수를 기준으로 +1해 짝수를 만든다음 반복문돌리면될듯

// :: 다른사람풀이
// 오류오류
// Array(COLS).fill(0);  이렇게 풀면되군 , 가장직관적인코드였다
