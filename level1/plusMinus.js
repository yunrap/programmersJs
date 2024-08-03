/*
작성일자 2024.08.03 07:58분
 1. 문제이름 :: 음양 더하기
 2. 링크 :: https://school.programmers.co.kr/learn/courses/30/lessons/76501

 3. 문제해석 ::
    signs[i] 가 참이면 양수, 아니면음수를 의미한다
    다더해서 result를 return 해라
    
 4. 접근방법 ::
    signs를 반목문돌려서 false일때 index를잡아 숫자배열의 값에다  *-1 을 하면될듯
    
5. 공유되면좋을것
    배열이 나란히 같은 index라면 반복문을 하나사용해도 괜찮은거같다.
*/


const plusMinus = (absolutes, signs) => {

    let result = 0;

    signs.forEach((element, index) => {
        if(element == false)
            absolutes[index] = absolutes[index] * -1;
    });

    absolutes.forEach(element => {
        result += element; 
    });
    return result;
};

export {plusMinus};