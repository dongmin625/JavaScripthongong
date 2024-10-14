//숫자와 관련 연산자
// let x = 1 / 0;
console.log(x, typeof x);

// 무한대에는 양음이 있음
console.log(-x, typeof -x);

let x = 1 / 'abc';
//let y = 2 * '가나다';
//let z = NaN;

// console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); //NaN number

let x1 = 1 / 'abc';

console.log(
    x1,
    x1 == NaN,
    x1 === NaN,
    isNaN(x), // 숫자가 아닐 시 true
  Number.isNaN(x) // 보다 엄격한 버전
);

console.log(
    y + 1, // 덧샘
    y - 1, // 뺄셈
    y * 2, // 곱셈
    y / 5, // 나눗셈
    y % 3,  // 나머지
    y ** 2 // 제곱
);

// 숫자로 변환될 수 없는 문자열
// 첫 번째 값 주의 - 증가 이전에도 변환
let z = 'abc';
console.log(z++, z);//NaN

let y = 25;

console.log(
  y **= 0.5, // 할당된 결과 반환 :5
  //y=5
);

console.log(
    0.1 + 0.2,
    0.1 + 0.2 === 0.3//false IEEE 754
);

//정확한 계산을 위해서는 라이브러리 활용

// ⭐️ 2의 거듭제곱으로 나눈 수의 계산은 정확
console.log(
    0.25 * 0.5,
    0.5 + 0.25 + 0.125 + 0.125,
    0.0625 / 0.25
);