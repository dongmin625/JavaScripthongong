//console

console.log("Hello word!");
console.log(1);
console.log(true);
console.log({ name: "홍길동", age: 20, married: false });

//콘솔은 소프트웨어 외적으로는 영향을 끼치지 않음 (개발자용 기능)

//console 기능들

console.log("로그 - 기본적인 출력"); //가장 많이 씀
console.info("로그 - 기능적으로는 log와 같음. 사용하기에 따라 용도 구분 가능"); //브라우저 마다 달라서 쓰는곳도 있고 안쓰는곳도 있음
console.warn("경고 - 문제가 될수있는 부분"); //문제가 발생할수 있음을 암시 시켜줌
console.error("오류 - 에러 발생 상황"); // 문제가 발생했을때 알림

//주석과 세미콜론

//주석: 컴퓨터는 무시하는 메시지, 또는 사용하지 않는 코드 잠시처리
//window 의 경우 ctrl + / 하면 해당줄이 자동으로 주석 처리됨!
//한줄
/*범위*/

//세미콜론
//자바스크립트는 ; 생략가능 but
console.log("Hello");
console.log("World"); //다음과 같이 명령문을 한줄로 표시할때는 필수

//변수와 상수

console.log("Hello,", "철수");

const SALUTATION = "Hello,";
let person = "철수";

console.log(SALUTATION, person);

person = "영희";

console.log(SALUTATION, person);

let x;
console.log(x); //undefined 값이 정해지지 않음
//자바스크립트는 undefined 도 하나의 값임

let y = 1;
let z = y;
console.log("변경전", x, y);
y = "Hello!";

//y의 값은 바뀌지만 z는 그대로 1 이다
//자바스크립트에서는 C언어와 달리 메모리상 가리키는 위치가 변경되는것이다.

//변수명 한글은 가능한데 잘 안쓴다.