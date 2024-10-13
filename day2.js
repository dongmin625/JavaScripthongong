//자료형

//원시자료형

const a = true;

//콘솔에서는 typeof a;
console.log(a, typeof a); //에디터에서는 이렇게 타입을 알수있음


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

//자료형과 정적/동적 타입

let job = "학생";
let age = 17;

console.log(job, age);

console.log(typeof age); //number

// 숫자 값이 들어있던 age에 문자열 값을 넣음
age = "열일곱";

console.log(age);

console.log(typeof age); //String으로 변경됨

//자바스크립트는 동적 타입을 가진 언어
//특정 값이 할당된 변수에, 그와 다른 자료형의 값을 넣는 것이 가능
//자유롭지만 그만큼 자료형 관련 오류들에 취약함

//컴파일언어 : 컴파일(포장) 하면서 자료형 오류도 검수해냄(TMI 초기의 C언어는 타입검사 안했음)
//인터프린터 언어: 포장같은거 안하고 사용자한테 바로 갖다줌

// 주어진 문자열을 대문자로 바꾸는 함수
// 다른 자료형에 대한 예외처리 없음

function getUpperCase(str) {
    return str.toUpperCase();
}

console.log(getUpperCase("hello"));

// ⚠️ 오류 발생!
console.log(getUpperCase(1));
//이러한 오류는 알수있기에 안전하지만 
1 + 1
'1' + 1 //이러한 경우로 인해 생기는 오류는 알아내기 힘들다.