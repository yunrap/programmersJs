const makeArray6 = (arr) => {
  var answer = [];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (answer.length == 0) {
      answer.push(arr[index]);
      index++;
    } else {
      if (answer[answer.length - 1] == arr[index]) {
        answer.pop();
        index++;
      } else {
        answer.push(arr[index]);
        index++;
      }
    }
  }

  if (answer.length == 0) answer.push(-1);
  return answer;
};

export { makeArray6 };

// :: 배열 만들기 6
// https://school.programmers.co.kr/learn/courses/30/lessons/181859

// :: 문제해석
// arr을 이용해 새로운 배열 stk를 만드려고한다.
// 만약 stk가 빈배열이면 arr[i]를 skt에 추가, i++;
// 만약 stk에 원소가있고 stk마지막 원소 == arr[i] , stk 맨마지막 stk에서 제거, i++
// 만약 stk에 원소가있고 stk마지막원소 != arr[i] , stk 맨마지막 arr[i]추가, i ++

// :: 접근방법
// 이건 조건문을 많이넣어서 구현하면될듯
