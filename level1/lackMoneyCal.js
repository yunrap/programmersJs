/*
작성일자 2024.08.01 20:32분
 1. 문제이름 :: 부족한 금액 계산하기
 2. 링크 :: https://school.programmers.co.kr/learn/courses/30/lessons/82612

 3. 문제해석 ::
    놀이기구의 원래이용료 price, 놀이기구를 N번째 이용한다면 원래 이용료의 N배를 받는다.
    그 총금액에서 자신이 가지고있는 금액에서 얼마가 모자라는지 알아보자
    
 4. 접근방법 ::
    count만큼 반복문돈다음 count * 3 을 누적합한다.
    자신이가지고있는금액 - 총금액 을 return
        
    
5. 공유되면좋을것
    없습니다.
    
*/


const lackMoneyCal = (price, money, count) => {
    var answer = 0;

    for (let i = 1; i < count+1; i++) {
        answer += price * i
    }

    var needMoney = money - answer;
    return needMoney < 0 ? Math.abs(needMoney) : 0;
}

export {lackMoneyCal}