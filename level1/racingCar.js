/*
작성일자 2024.07.29 20:27분
 1. 문제이름 :: 달리기 경주
 2. 링크 :: https://school.programmers.co.kr/learn/courses/30/lessons/178871

 3. 문제해석 ::
    달리기경주시작, 해설진들은 선수들이 자기 바로앞의 선수를 추월할때 추월한 선수의 이름을 부른다.
    
    
 4. 접근방법 ::
    0. 계속반복
    1. indexOf 로 사람위치를 파악 
    2. temp넣어놓고 서로 위치변경을해준다
    
5. 공유되면좋을것
    indexOf 를 사용하면 선수들이많은경우 시간복잡도가 늘어난다
    먼저순서를 저장해주는 object를 만든후 그 object 안에서 해결할것
*/

const racingCar = (players, callings) => {
  let answer = [...players];
  let playersObj = {};

  for (let i = 0; i < answer.length; i++) {
    playersObj[answer[i]] = i;
  }

  callings.forEach((element) => {
    const index = playersObj[element];
    let temp = answer[index];
    answer[index] = answer[index - 1];
    answer[index - 1] = temp;

    playersObj[element] = index - 1;
    playersObj[index] = temp;
  });

  return answer;
};

export { racingCar };
