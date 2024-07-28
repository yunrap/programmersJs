/*
작성일자 2024.07.28 21:08분
 1. 문제이름 :: 핸드폰 번호 가리기
 2. 링크 :: https://school.programmers.co.kr/learn/courses/30/lessons/12948

 3. 문제해석 :: 뒷자리부터 4개제외한 나머지숫자를 전부 * 가린다
    
 4. 접근방법 :: 반복문을 뒤에네자리 뺀후부터 인덱스 0 까지 
    
 5. 공유되면좋을것
    slice(-4) 로표현되도될듯, 음수지원가능
    
*/

const phoneNum = (phone_number) => {
  const index = 4;
  let element = "";
  for (let i = 0; i < phone_number.length - index; i++) {
    element += "*";
  }

  const str = phone_number.slice(
    phone_number.length - index,
    phone_number.length
  );

  return element + str;
};

export { phoneNum };
