// ⭐️ 함수의 자료형 (함수도 객체)
function addNumbers(a, b) {
  return a + b;
}
console.log(typeof addNumbers); //-> function

//일급 객체의 특성
//상수 또는 변수에 할당될 수 있음, 다른 함수에 인자로 전달될 수 있음 , 다른 함수의 결과값으로서 반환될 수 있음

function isOddNum(number) {
  console.log((number % 2 ? "홀" : "짝") + "수입니다.");
  return number % 2 ? true : false;
}

const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의

console.log(checkIfOdd(23));

let x = 7,
  y = 3;

let func1 = (a, b) => a + b;
let func2 = (a, b) => a - b;
console.log(func1(x, y), func2(x, y));

func1 = func2;
console.log(func1(x, y), func2(x, y)); // func1과 func2 결과 같음
//함수도 객체와 배열처럼 참조타입

// 함수를 객체와 배열의 값으로도 할당 가능
let person = {
  name: "홍길동",
  age: 30,
  married: true,
  introduce: function (formal) {
    return formal
      ? "안녕하십니까. 홍길동 대리라고 합니다."
      : "안녕하세요, 홍길동이라고 해요.";
  },
};

console.log(person.introduce(true));
console.log(person.introduce(false));

let person1 = {
  name: "홍길동",
  age: 30,
  married: true,
  introduce: function () {
    //이런 형태의 경우 화살표 함수를 사용하면 작동이 안됨
    return (
      `저는 ${this.name}, ${this.age}살이고 ` +
      `${this.married ? "기혼" : "미혼"}입니다.`
    ); //만약 return this 라고 작성하면 객체 자체를 그냥 반환
  },
};

console.log(person1.introduce());

//전달 받는 함수 : 고차 함수
//전달 되는 함수 : 콜백 함수

function doNTimes(func, repeat, x, y) {
  //고차함수
  let result = x;
  for (i = 0; i < repeat; i++) {
    result = func(result, y); //콜백함수
  }
  return result;
}

console.log(
  doNTimes((x, y) => x * y, 3, 5, 2),
  doNTimes((x, y) => x / y, 3, 5, 2)
);

//인자로 전달된 함수들 : 변수나 상수에 할당되지 않아 이름이 없음 -익명함수

// calculate
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// evaluate
const isOdd = (number) => !!(number % 2);
const isPositive = (number) => number > 0;

function calcAndEval(calc, eval, x, y) {
  return eval(calc(x, y));
}

console.log(
  calcAndEval(add, isOdd, 5, 7),
  calcAndEval(subtract, isPositive, 5, 7),
  calcAndEval(multiply, isOdd, 5, 7)
);

/*!!는 값이 참(true) 또는 **거짓(false)**인지 명확하게 확인하고 Boolean 값으로 변환하는 장치입니다.*/

function getIntroFunc(name, formal) {
  return formal
    ? function () {
        console.log(`안녕하십니까, ${name}입니다.`);
      }
    : function () {
        console.log(`안녕하세요~ ${name}이라고 해요.`);
      };
}

const hongIntro = getIntroFunc("홍길동", true);
const jeonIntro = getIntroFunc("전우치", false);

hongIntro(); // 변수에 저장된 함수 실행
jeonIntro();

//커링 : 팔요한 인자보다 적은 수의 인자를 받으면, 나머지 인자를 받는 다른 함수를 반환

// 기존의 코드
function addMultSubt(a, b, c, d) {
  return (a + b) * c - d;
}

const addMultSubt2 = (a, b, c, d) => (a + b) * c - d;

console.log(addMultSubt(2, 3, 4, 5), addMultSubt2(2, 3, 4, 5));

// ⭐ 커링으로 작성된 함수
function curryAddMultSubt(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return (a + b) * c - d;
      };
    };
  };
}

const curryAddMultSubt2 = (a) => (b) => (c) => (d) => (a + b) * c - d;

console.log(curryAddMultSubt(2)(3)(4)(5), curryAddMultSubt2(2)(3)(4)(5));

const curryAddMultSubtFrom2 = curryAddMultSubt(2);
const curryMultSubtFrom5 = curryAddMultSubt(2)(3);
const currySubtFrom20 = curryAddMultSubt(2)(3)(4);
