//자료형

//원시자료형

const a = true;

//콘솔에서는 typeof a;
console.log(a, typeof a); //에디터에서는 이렇게 타입을 알수있음

console.log("1" + "2"); //12출력

let d;
console(d, typeof d); //undefined 도 하나의 값임 "정해지지 않았다" 라는 의미의 값

d = null;
console.log(d, typeof d); //object 반환 설계오류

//자바스크립트에는 정수와 실수의 구분이 없음 - 정수도 실수로 처리
//정수는 2^53-1 까지 안정적으로 표현 그 이상은 BigInt 로 처리

// let x = 1; //아무것도 반환하지 않는 구문은 undefined 를 반환한다.

//null도 하나의 값임 "비어있다" 라는 의미의 값


let x = null;
console.log(typeof null, typeof x);
  //typeof로는 객체와 null을 구분할수 없다.

  //null 여부는 다음과 같이 할수있다.
console.log(x === null);



