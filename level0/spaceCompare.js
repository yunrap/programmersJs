const spaceCompare = (my_string) => {
  return my_string.split(/\s+/).filter((a) => a !== "");
};

export { spaceCompare };

// :: 공백으로 구분하기1
// https://school.programmers.co.kr/learn/courses/30/lessons/181869

// :: 문제해석
// 공백으로 구분해서 배열안에 차례대로 담기

// :: 접근방법
// split 에서 space로 구분해서 담으면 되지않을까
