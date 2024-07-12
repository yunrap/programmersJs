const newArrayAddRm = (arr, flag) => {
  var answer = [];

  for (let i = 0; i < flag.length; i++) {
    if (flag[i] == false) {
      for (let v = 0; v < arr[i]; v++) {
        answer.pop();
      }
    } else {
      var indexVal = arr[i] * 2;
      for (let v = 0; v < indexVal; v++) {
        answer.push(arr[i]);
      }
    }
  }

  return answer;
};

export { newArrayAddRm };

// :: 빈 배열에 추가,삭제하기

// :: 문제해석
// true라면 arr[i] x 2 로 추가하고, false라면 arr[i]개의 원소를제거환뒤

// :: 접근방법
// true일시 반복문돌려서 push false일시 반복문돌려서 pop 하면될듯

// flag.forEach((el, index) ,,,  array prototype 기억
