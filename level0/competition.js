/*
작성일자 2024.07.25 22:52분
 1. 문제이름 :: 전국대회선발고사
 2. 링크 :: https://school.programmers.co.kr/learn/courses/30/lessons/181851

 3. 문제해석 ::
    rank배열은 등수를의미하고 attendance는 참석여부를 의미한다.
    등수가 높은사람이 참여할수있으면 ok! 3명까지 top을 뽑고
    10000 × a + 100 × b + c 계산식에넣은결과값 return

 4. 접근방법 ::
    attendance 배열에서 true인 인덱스인것드만 rank에서 가져온다
    새롭게 만들배열에서 정렬한다음 3개까지 넣고 계산식에넣는다
    계산식은 따로 구현할것 -> index가 번호이므로 이방법은 x
    
    접근방법 2 ::
    rank 에서 최소값찾아서 만약 attendance 배열에서 true일경우 pop->새배열
    위를 계속반복항다음 새배열이 3이상이면 계산식전송한다 ->pop 하면 index가 달라진다

    접근방법 3 :: 
     배열 index 관리가필요하다, true인 것들만 index 포함된 이차원배열에넣자
    

5. 공유되면좋을것
   그배열의 index가 필요하다면 같이 배열에 넣어주자
    
*/

const competition = (rank, attendance) => {
  const arrIdxRank = [];
  {
    for (let i = 0; i < rank.length; i++) {
      if (attendance[i]) arrIdxRank.push([i, rank[i]]);
    }

    arrIdxRank.sort((a, b) => a[1] - b[1]);
  }

  return calculator(arrIdxRank[0][0], arrIdxRank[1][0], arrIdxRank[2][0]);
};

const calculator = (a, b, c) => {
  return 10000 * a + 100 * b + c;
};

export { competition };
