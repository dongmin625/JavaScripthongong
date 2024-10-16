//함수
function 함수명(입력값) {
  // 수행할 일
  return 반환값; // 있을 시 없으면 undefined를 반환
}

함수명(입력값);

function add(x, y) {
  return x + y; // ⭐️ 값을 반환
}

let z = add(2, 3);

console.log(z); //console.log()는 아무런 값도 반환하지 않음

console.log(add(add(6, 7), add(8, 9))); //add중첩

//중요!!!!!

// 함수는 실행문보다 나중에 정의하는 것이 가능(호이스팅)
// 변수나 상수는 불가능! (var 제외)
console.log(add(2, 7));

function add(x, y) {
  return x + y;
}

//함수 선언방법

//일반적인 방법
function add(x, y) {
  return x + y;
}

console.log(add(2, 7));

//상수나 변수에 함수 대입 (함수도 값)
const subt = function (x, y) {
  return x - y;
};

console.log(subt(7, 2));

//상수나 변수에 함수 대입(화살표 함수)

// 한 줄 안에 값만 반환시 (매개변수 괄호)  return 생략
const mult = (x, y) => x * y;

console.log(mult(2, 7));

// 두 줄 이상의 작업이 있을 시 {중괄호+return}
const mult2 = (x, y) => {
    console.log(`${x}와 ${y}를 곱합니다.`); //백틱으로 묶기
    console.log(`결과는 ${x * y}입니다.`); //백틱으로 묶기
    return x * y;
  };
  
  console.log(mult2(2, 7));

  // 인자가 하나일 때는 (괄호) 없이 선언 가능
const pow = x => x ** 2;
console.log(pow(3));

//중요 화살표함수,변수나 상수에 함수를 대입한 것은 호이스팅이 안됨!!!