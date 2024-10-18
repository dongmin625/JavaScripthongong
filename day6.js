//전역 객체
console.log(this);

console.log(this === window, window === self, self === frames);

console.log(this);
// ⚠️ Node.js로 문서 실행시의 this는 전역 객체를 가리키지 않음
// 이후 모듈 관련 강에서 배울 것

console.log(globalThis); // node.js,콘솔 둘다가능

//표준 빌트인 객체
//ECMAScript 사양에 정의된 객체들 - 어떤 환경에서든 사용 가능
//전역 프로퍼티로 제공됨 globalThis 등을 붙이지 않고 바로 사용 가능

//node.js에서는 globalsThis 출력시 표준 빌트인 객체들은 출력하지 않음
// 그러나 요소들로 갖고 있는 것은 확인 가능
console.log(globalThis.Infinity);
console.log(globalThis.isNaN);
console.log(globalThis.Object);

//래퍼 객체
const str = 'abcde';
console.log(
  str.length,
  str.toUpperCase(),
  str[0]
);

const num = 123.4567;
console.log(
  typeof num.toString(),
  num.toFixed(2)//특정자리수 반올림
);

const str1 = new String('abcde');
const num1 = new Number(123.4567);
const bool = new Boolean(true);
//Number,String,Boolean 등은 표준 빌트인 객체에 속하는 래퍼 객체
//원시 값을 필요시 래퍼 객체로 감싸서 warp 그것의 인스턴스로 만들어 기능 실행
//원시값에서 객체를 사용하듯 해당 래퍼 객체의 프로퍼티를 호출할 때 래핑이 발생


console.log(typeof str1, str1);
console.log(typeof num1, num1);
console.log(typeof bool, bool);

const str2 = 'abcde';
console.log(str2.length); //일시적으로 객체가 됨
console.log(typeof str, str); //다시 string 타입으로 돌아감