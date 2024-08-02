/*
작성일자 2024.08.02 22:41분
 1. 문제이름 :: 정수 내림차순으로 배치하기
 2. 링크 :: https://school.programmers.co.kr/learn/courses/30/lessons/12933

 3. 문제해석 ::
    각자리수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요
    
 4. 접근방법 ::
    스트링변환 -> 배열에 각각넣고 -> 정렬알고리즘사용
    
    
5. 공유되면좋을것
    음 살짝 어거지로 이상하게 푼거같은데 내일다시정리...
    
*/


const desCending = (s) => {

    let nArr = [];
    let temp = 0;
    let str = s.toString();
    for (let i = 0; i < str.length; i++) {
        nArr.push(str[i]) ;
    }

    for(var x = 0; x<nArr.length; x++){
        for(var y = x+1; y<nArr.length; y++){

            let nArrX = Number(nArr[x]);
            let nArrY =  Number(nArr[y]);
            if(nArrX<nArrY){
                temp = nArr[y];
                nArr[y] = nArr[x];
                nArr[x] = temp;
            }
        }
    }

    return Number(nArr.join(""));

};

export {desCending} ;