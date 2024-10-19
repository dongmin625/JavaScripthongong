//Number 객체

//생성자 함수
const numObj1 = new Number();//인자가 없을시 0
const numObj2 = new Number(123);
const numObj3 = new Number(-123.45);

console.log(numObj1, numObj2, numObj3);

// 특정 숫자값으로 인식되는 것
console.log(
    new Number('-123.4567'),
    new Number('Infinity'),
    new Number(true),
    new Number(false)
  );

// NaN
console.log(
    new Number('1/2'),
    new Number('123ABC'),
    new Number('ABC'),
    new Number('{a: 1, b: 2}'),
    new Number([1, 2, 3])
  );

//EPSILON
//(Number형에서 표현 가능한 1보다 큰 가장 작은 수) - 1 /부동소수점으로 인한 계산오차 문제 해결에 사용

//MAX_VALUE ,MIN_VALUE
//자바스크립트에서 표현가능한 가장 큰수,가장 작은수
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//MAX_SAFE_INTEGER ,MIN_SAFE_INTEGER
//자바스크립트의 부동소수점 체계에서 안정적으로 나타낼 수 있는 가장 큰 수와 작은 정수
//더 큰 정수도 표현 자체는 가능 안전하게 하려면 BigInt 타입으로
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//POSITIVE_INFINITY, NEGATIVE_INFINITY
//양과 음의 무한대
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

//NaN
//전역 객체의 NaN과 같은값
console.log(Number.NaN);

//정적 메서드
//a. 동일하지 않음 : isFinite, isNaN
console.log(
    isFinite(null), // null을 0으로 변환 -> true
    Number.isFinite(null) //숫자타입이 아니면 무조건 false를 반환
  );

  console.log(
    isNaN('abc'), // 숫자타입의 NaN으로 변환
    Number.isNaN('abc') // 숫자타입 자체가 아니므로 false
  );

//b. 동일함: parseInt, parseFloat
console.log(
    Number.parseInt('123.4567'),
    Number.parseFloat('123.4567')
  );

//toExponential
//지수 표기법으로 나타내는 문자열을 반환
const numInExp = (123.456789).toExponential();
console.log(
  typeof(numInExp), numInExp
);

// 인자로 자릿수 제한
console.log(
    (123.456789).toExponential(2),
    (123.456789).toExponential(4),
    (123.456789).toExponential(6)
  );

//toFixed 
//최대 인자값으로 주어진 정수 만큼 소수점 이하를 반을림하여 문자열로 반환
console.log(
    // 인자가 없으면 0을 받은 것과 같음
    (111.234567).toFixed(),
    (111.234567).toFixed(0)
  );

console.log(
    // 반올림
    (111.234567).toFixed(3),
    (111.234567).toFixed(4)
  );

//toPrecision
//반올림과 지수 표기법을 사용하여 문자열 반환
console.log(
    // 인자가 없으면 toString처럼 그대로 문자열로 반환
    (1234.56789).toPrecision()
  );
// 인자가 정수부 자릿수보다 적으면 지수로
console.log(
    (1234.56789).toPrecision(1),
    (1234.56789).toPrecision(2),
    (1234.56789).toPrecision(3)
  );

// 반올림
console.log(
    (1234.56789).toPrecision(4),
    (1234.56789).toPrecision(6),
    (1234.56789).toPrecision(8)
  );

//toString
//문자열 값 반환
//인자 2~36이 주어지면 해당 수의 진수로 표현
console.log(
    (11).toString(),
    (11).toString(2),
    (11).toString(8),
    (11).toString(16)
  );