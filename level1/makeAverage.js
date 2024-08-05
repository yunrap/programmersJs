/*
작성일자 2024.07.31 18:18분
 1. 문제이름 :: 평균구하기
 2. 링크 :: https://school.programmers.co.kr/learn/courses/30/lessons/12944

 3. 문제해석 ::
    합을구해서 평균을내는 문제
    
 4. 접근방법 ::
    반복문돌려서 더한수만큼 나눠준다
    
5. 공유되면좋을것
    없습니다.
    
*/

function solution(arr) {
    var answer = 0;
    var hap = 0;
    
    for(let v=0; v<arr.length; v++){
        hap += arr[v]; 
    }
    answer = hap / arr.length;
    return answer;
}


