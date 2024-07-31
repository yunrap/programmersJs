/*
작성일자 2024.07.31 18:18분
 1. 문제이름 :: 추억점수
 2. 링크 :: https://school.programmers.co.kr/learn/courses/30/lessons/176963?language=javascript

 3. 문제해석 ::
    이름에 맞는점수 scrore를넣는 문제
    
    
 4. 접근방법 ::
    반복문 돌려서 일반점수를 object에넣고 배열돌려서 object에서 value찾은후 배열에 넣는다
    
5. 공유되면좋을것
   없습니다. 
    
*/

function Cukscore(name, yearning, photo) {
    var answer = [];
    var object = {};
    
    for(let i=0; i<name.length; i++){
            object[name[i]] = yearning[i];
    } // object insert
  
    
    for(let v=0; v<photo.length; v++){
         let num = 0;
        for(let j=0; j<photo[v].length; j++){
            if(object[photo[v][j]] !== undefined)
                num += object[photo[v][j]];
        }
        answer.push(num);
    }    
    return answer;
}
