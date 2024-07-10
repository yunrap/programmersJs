const specialArray = (arr) => {
  var answer = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }

  return answer;
};

export { specialArray };

// :: 특이한 이차원 배열 2

// :: 문제
// arr이 arr[i][j] = arr[j][i] 을 만족한다면 1 아니면 0을 return한다

// :: 문제해석
// 반복문 이중돌려 하라도 다르다면 flag로 false return
