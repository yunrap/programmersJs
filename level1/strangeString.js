/**
작성일자 2024.08.01 22:51분
 1. 문제이름 :: 이상한 문자 만들기
 2. 링크 :: https://school.programmers.co.kr/learn/courses/30/lessons/12930

 3. 문제해석 ::
    간단어는 하나 이상의 공백문자로 이뤄지고있다.
    각단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 대문자로 리터하는 함수를 완성하라
    
 4. 접근방법 ::
    split으로 각배열에 담아놔서 index짝수면 대문자, 홀수면 소문자로 바꿔놓는다.
    
    
5. 공유되면좋을것
    function toWeirdCase(s){
        return s.toUpperCase().replace(/(\w)(\w)/g, 
        function(a){return a[0].toUpperCase()+a[1].toLowerCase();
    })

    클로저를 적용한기법
}
    
*/


const strangeString = (s) => {
    const data = s.split(" ");
    data.forEach((el, index)=> {
        let str = "";
        for (let i = 0; i < el.length; i++) {

            if(i % 2 == 0){
                str += el[i].toUpperCase();
            }else{
                str += el[i].toLowerCase();
            }
        }
        data[index] = str;
    });
    return data.toString().replaceAll(",", " ");
};

export {strangeString};