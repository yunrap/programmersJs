const pictureMax = (picture, k) => {
  var answer = [];

  picture.forEach((element, index) => {
    var tempStr = "";
    for (const key in element) {
      tempStr += element[key].repeat(k);
    }

    for (let i = 0; i < k; i++) {
      answer.push(tempStr);
    }
  });

  return answer;
};

export { pictureMax };

// :: 그림 확대

// :: 문제해석
// 가로세로로 k배늘린다

// :: 접근방법
// 반복문돌려서 k만큼 , 문자열더하고 , 마지막문자일때 k만큼 string을 추가하면되지않을까

// :: 다른사람풀이
// 문자열더할때 reduce도많이사용하군
