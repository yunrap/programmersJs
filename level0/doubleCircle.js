const doubleCircle = (board, k) => {
  var answer = 0;
  for (let a = 0; a < board.length; a++) {
    for (let b = 0; b < board[0].length; b++) {
      if (a + b <= k) {
        answer += board[a][b];
      }
    }
  }

  return answer;
};

export { doubleCircle };

// :: 이차원 배열 대각선 순회하기

// :: 문제해석
// 2차원 정수 배열 board와 정수 k가 주어집니다.
// i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을
// return 하는 solution 함수를 완성해 주세요.

// :: 접근방법
// 반복문돌면서 i + j <= k 면 answer 에 누적값더하면될듯
