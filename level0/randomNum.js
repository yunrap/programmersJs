const randomNum = (arr, k) => {
  let answer = [];

  for (let j = 0; j < arr.length; j++) {
    if (answer.length == k) break;

    if (!answer.includes(arr[j])) answer.push(arr[j]);
  }

  if (answer.length !== k) {
    const loop = k - answer.length;
    for (let i = 0; i < loop; i++) {
      answer.push(-1);
    }
  }

  return answer;
};

export { randomNum };

// :: 무작위로 K개의 수 뽑기
//

// :: 문제해석
// 중복된값없이 배열에 넣고 k보다 배열길이가 작은경우 -1을 넣어라

// :: 접근방법
/* 반복문돌면서 임시배열에넣고 그안에 수가없다면 넣기,
 개수가 k가되면 return 아니면 남은자리수 -1채우기 */

// :: 다른사람풀이
// set객체를 많이사용해서 풀었다. 중복값없이 set으로 저장후, slice로 (0~k)까지~
