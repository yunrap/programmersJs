const stringCutArrange = (myString) => {
  var answer = [];
  let index = 0;

  for (let a = 0; a < myString.length; a++) {
    if (myString[a] == "x") {
      if (myString.substring(index, a) !== "") {
        answer.push(myString.substring(index, a));
      }
      index = a + 1;
    }
  }

  if (index !== myString.length && myString[myString.length - 1] != "x") {
    answer.push(myString.substring(index, myString.length));
  }

  answer.sort();
  return answer;
};

export { stringCutArrange };

// :: 문자열 잘라서 정렬하기
//

// 문제해석
// "x"를 기준으로 문자열을 잘라내 배열을 만든후 사전순으로 정렬한 배열을 return

// 접근방법
// "x"인덱스찾아서 그전까지 배열에 넣고, sort로 넣기

/*
으아악 이렇게 세줄에끝나다니다니
 return myString
    .split("x")
    .filter((str) => str !== "")
    .sort();

    split 함수는 잘라서 배열로 return해준다.
*/
