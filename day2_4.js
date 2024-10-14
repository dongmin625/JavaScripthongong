//연산자 추가
let x = 1, y = 2, z = 3;
console.log(x, y, z);

// 마지막으로 실행한 것 반환
console.log(
  (++x, y += x, z *= y)
);

//null 병합 연산자 || 과 달리 falsy가 아닌 null 또는 undefined 만 대체
let x1;
x1 ?? console.warn(x, 'x에 값이 없습니다.');

x1 = 0;
x1 ?? console.warn(x, 'x에 값이 없습니다.');

x = null;
x1 ?? console.warn(x, 'x에 값이 없습니다.');