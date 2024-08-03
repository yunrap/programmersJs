/*
작성일자 2024.08.03 07:51분
 1. 문제이름 :: 서울에서 김서방 찾기
 2. 링크 :: https://school.programmers.co.kr/learn/courses/30/lessons/12919

 3. 문제해석 ::
    kim의 위치x를 찾아 김서방은 x에 있는를 반환하는 함수를 완성하라
    
 4. 접근방법 ::
    반복문을 돌려 indexOf를 사용해서 문자열에 추가를 하면될듯    
    
5. 공유되면좋을것
    없습니드아
    
*/


const findKim = (seoul) => {
    let answer = "";
    const findName = "Kim";
    
    seoul.forEach((element, index) => {
        if(element == findName)
            answer += `김서방은 ${index}에 있다`;
    });
    
    return answer;
}

export {findKim};