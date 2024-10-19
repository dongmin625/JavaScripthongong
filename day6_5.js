//Date

const now = new Date();

console.log(typeof now);//object
console.log(now);

const nowStr = Date()

console.log(typeof nowStr);//string
console.log(nowStr);

//밀리초 기준
//1970년 1월 1일 자정(UTC, 그리니치 평균시)으로부터 인자로 주어진 밀리초만큼 경과한 시간
console.log(
    new Date(0)
  );
  console.log(
    new Date(1000 * 60 * 60 * 24 * 365 * 30)
  );

//단위별 숫자 입력
//연,월 필수
//일,시,분,초,밀리초 옵션 없을시 0
console.log(
    new Date(2022, 8)
  );

console.log(
    new Date(2022, 8, 20, 14, 35)
  );

console.log(
    new Date(2022, 8, 20, 14, 35, 47, 789)
  );

//현재의 밀리초 숫자값
console.log(Date.now());

console.log(
    // ⭐️ 월은 0부터 시작
    Date.UTC(2022, 7, 20, 0, 0, 0)
  );

//인스턴스 메서드
//toString, toDateString, toTimeString
//각각 전체, 날짜만, 시간만, 나타내는 문자열 출력
//시스템의 언어 설정별로 다르게 나타남

console.log(
  now.toString()
);

console.log(
    now.toDateString()
  );

console.log(
    now.toTimeString()
  );

//toLocalString
//주어진 언어 코드를 기준으로 표현한 문자열 반환
//인자가 없을시 시스템의 언어 적용

console.log(
    now.toLocaleString()
  );

console.log(
    now.toLocaleString('ko-KR')
  );

console.log(
    now.toLocaleString('en-US')
  );

//활용예
// const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const day = '일월화수목금토'[now.getDay()];

console.log(
  `오늘은 ${year}년 ${month}월 ${date}일, ${day}요일입니다.`
);

//getTime, setTime
//밀리초 숫자값을 set/get
const date1 = new Date(2020, 7, 20);
const date1value = date1.getTime();

console.log(date1.toString());
console.log(date1value);

const date2 = new Date();

console.log(date2.toString());

date2.setTime(date1value);

console.log(date2.toString());



// 시간차 존재
console.log(
  now.toISOString()//ISO 8061이란 형식의 문자열 반환
);
console.log(
  now.toString()
);

//현재시각으로 맞추기
const timezoneOffset = now.getTimezoneOffset() * 60000;

const isoStr = new Date(now.getTime() - timezoneOffset).toISOString();

console.log(isoStr);
console.log(now.toString());