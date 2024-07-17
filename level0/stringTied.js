const stringTied = (strArr) => {
  let answer = 0;
  let tempArray = [];

  for (let index = 0; index < 30; index++) {
    const cells = [];
    tempArray.push(cells);
  }

  strArr.forEach((element) => {
    let index = element.length - 1;
    let strArrTwo = tempArray[index];

    strArrTwo.push(element);
    if (strArrTwo.length > answer) {
      answer = strArrTwo.length;
    }
  });

  return answer;
};

export { stringTied };

// :: 문자열 묶기
// https://school.programmers.co.kr/learn/courses/30/lessons/181855

// :: 문제해석
// 길이가 같은 문자열들끼리 그룹으로 묶었을때 가장 개수가 많은 그룹의 크기를 return 하여라

// :: 접근방법
// [ [문자열길이 1] , [문자열길이 2], [문자열길이 3] ] 것들끼리 분류하면될거같기도?
// [ [1,2,4,0,3] , [33, 22, 11 ], [333,122,111]   ]
// strArr 반복문돌려서 배열길이 맞게끔 위의 배열 .[자리수] push해서 넣으면될거같다.

/*
function solution(strArr) {
    let ans = Array(31).fill(0);
    for (let s of strArr) ans[s.length]++
    return Math.max(...ans)
}
*/
// 이렇게 줄일수도있군..
