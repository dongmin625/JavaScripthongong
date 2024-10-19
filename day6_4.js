//Math
//정적 프로퍼티와 메서드만 제공
//Number 타입만 지원

console.log(
    Math.PI
  );

console.log(
    Math.E
  );

console.log(
    Math.abs(123),
    Math.abs(-123),
  );

// 0 반환
console.log(
    Math.abs(0),
    Math.abs(''),
    Math.abs(null),
    Math.abs([]),
  );

// NaN 반환
console.log(
    Math.abs('abc'),
    Math.abs(undefined),
    Math.abs({a: 1}),
    Math.abs([1, 2, 3]),
    Math.abs()
  );

//ceil올림 , round 반올림 floor 내림 trunc 정수부만
for (const num of [1.4, 1.6, -1.4, -1.6]) {
  console.log(
    num + ' : ',
    Math.ceil(num),
    Math.round(num),
    Math.floor(num),
    Math.trunc(num),
  );
}

// NaN 반환
console.log(
    Math.ceil(),
    Math.round(),
    Math.floor(),
    Math.trunc()
  );


  console.log(
    Math.pow(4, 2), // 4 ** 2
    Math.pow(4, 1), // 4 ** 1
    Math.pow(4, 0), // 4 ** 0
    Math.pow(4, -1) // 4 ** -1
  );
//(** 연산자)로 더 간결히 표현 가능

console.log(
    Math.sqrt(25), // 25 ** 0.5
    Math.sqrt(9),
    Math.sqrt(2),
    Math.sqrt(1),
    Math.sqrt(0)
  );

// NaN 반환
console.log(
    Math.sqrt(-25),
    Math.sqrt()
  );


//max,min 최대 최솟값 반환
console.log(
    Math.max(8, 5, 9, 6, 3, 1, 4, 2, 7),
    Math.min(8, 5, 9, 6, 3, 1, 4, 2, 7)
  );

//random - 0~1사이의 무작위 값
//안전한 난수 생성은 아님!
//👉 Crypto.getRandomValues 메서드 (보안)
for (let i = 0; i < 10; i++) {
    console.log(Math.random());
  }

  console.log(
    // 1(또는 근사값) 반환
    Math.sin(Math.PI / 2),
    Math.cos(Math.PI * 2),
    Math.tan(Math.PI / 180 * 45)
  );

  console.log(
    // Math.PI / 2 반환
    Math.asin(1),
    Math.acos(0),
    Math.atan(Infinity)
  );