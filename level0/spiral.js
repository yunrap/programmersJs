/*
작성일자 2024.07.26 15:46분
 1. 문제이름 :: 정수를 나선형으로 배치하기
 2. 링크 :: https://school.programmers.co.kr/learn/courses/30/lessons/181832

 3. 문제해석 ::
    나선형모양으로 배열을 돌려라
    
    
 4. 접근방법 ::
    1. 배열을 채워넣는다
    
y/x  0   1  2  3
   0 00  01  02 03
   1 10  11  12 13
   2 20  21  22 23
   3 30  31  32 33 ??


5. 공유되면좋을것
    
    
*/

const spiral = (n) => {
  const answer = Array.from(new Array(n), () => new Array(n).fill(0));
  let num = 1;
  let dir = 0;
  let x = 0;
  let y = 0;
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  while (num <= n * n) {
    answer[y][x] = num++;
    let ny = y + dy[dir];
    let nx = x + dx[dir];

    if (ny < 0 || nx < 0 || ny >= n || nx >= n || answer[ny][nx] != 0) {
      dir = (dir + 1) % 4;
      ny = y + dy[dir];
      nx = x + dx[dir];
    }

    y = ny;
    x = nx;
  }
  return answer;
};

export { spiral };
