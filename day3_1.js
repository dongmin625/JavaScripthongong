//분기문

const open = true;

// 한줄 코드
if (open) console.log("영업중입니다.");

// 여러줄 코드 - 블록문 사용
if (open) {
  console.log("환영합니다.");
  console.log("즐거운 쇼핑하세요!");
}

const x = 22;

if (x % 4) { // 0이 아닌 값 이라면 안쪽 if 문으로 접근함 
  if (x % 2) {
    console.log("홀수입니다.");
  } else {
    console.log("짝수입니다.");
  }
} else {
  console.log("4의 배수입니다.");
}

if (x % 2) {
  console.log("홀수입니다.");
} else if (x % 4) {
  console.log("짝수입니다.");
} else {
  console.log("4의 배수입니다.");
}

//함수 형식으로 작성하는 것을 추천

function evalNum () {
    const x = 21;
  
    if (x % 2) {
      console.log('홀수입니다.');
      return;
    }
  
    if (x % 4) {
      console.log('짝수입니다.');
      return;
    }
  
    console.log('4의 배수입니다.');
  }
  
  evalNum();
  console.log('블록문 바깥');


  const fingersOut = 2;

switch (fingersOut) {
  // 순서 상관없음
  case 2:
    console.log('가위');
    break;
  case 0:
    console.log('바위');
    break;
  case 5:
    console.log('보');
    break;
  default:
    console.log('무효');
}


// 💡 참고: 객체를 사용한 방법
const direction = 'north'

const directionKor = {
  north: '북',
  south: '남',
  east: '동',
  west: '서'
}[direction] ?? '무효' // undefined 나 null 값 처리

console.log(directionKor);