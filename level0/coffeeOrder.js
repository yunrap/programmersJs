const coffeeOrder = (order) => {
  var answer = 0;

  order.forEach((element) => {
    if (element.includes("cafelatte")) {
      answer += 5000;
    }

    if (element.includes("americano") || element === "anything") {
      answer += 4500;
    }
  });

  return answer;
};

export { coffeeOrder };

// :: 커피 심부름
// https://school.programmers.co.kr/learn/courses/30/lessons/181837

// :: 문제해석
// 아메리카노와 카페라떼는 각각 4500원,5000원입니다. 아무거나는 4500원입니다. (필요한것만내용정리)

// :: 접근방법
// 문자열에 "cafelatte" 포함이면 5000원, "americano" 포함  4500원, anything 같으면 4500원을 누적시켜서리턴

// reduce 로 누적합나타낼수도있구낭
