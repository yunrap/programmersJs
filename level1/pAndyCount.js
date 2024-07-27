/*
작성일자 2024.07.27 21:21분
 1. 문제이름 :: 문자열 내 p와 y의개수
 2. 링크 :: https://school.programmers.co.kr/learn/courses/30/lessons/12916?language=javascript

 3. 문제해석 ::
    문자열에서 p의개수와 y의개수 비교해 같으면 true 다르면 false 
    
    
 4. 접근방법 ::
    소문자로만든후
    반복문돌면서 p와 y개수를 담아누는 count 변수를 따로만들어 누적후 비교
    
5. 공유되면좋을것
    없음
    
*/

const pAndyCount = (s) => {
  let countY = 0;
  let countB = 0;

  const sString = s.toUpperCase();

  for (let i = 0; i < sString.length; i++) {
    if (sString[i] == "P") {
      countB++;
    }

    if (sString[i] == "Y") {
      countY++;
    }
  }

  return countY == countB ? true : false;
};

export { pAndyCount };
