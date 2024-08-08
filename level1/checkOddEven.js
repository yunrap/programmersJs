
/*
작성일자 2024.08.08 18:18분
 1. 문제이름 :: 짝수와 홀수
 2. 링크 :: https://school.programmers.co.kr/learn/courses/30/lessons/12937

 3. 문제해석 ::
    짤수화 홀수 판별하여 문자열 return
    
    
 4. 접근방법 ::
    나누기 2 한 결과 나머지 1이면 홀수 0이면 짝수
    
    
5. 공유되면좋을것
    없습니다
    
*/

function solution(num) {
    var answer = '';
    
    if(num % 2 == 0){
       answer = "Even";
    }else{
       answer = "Odd";
    }
          
    return answer;
}
