//반복문

// 💡 변수이므로 let이 사용됨
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 중첩사용
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//둘 이상의 변수 사용

for (let x = 0, y = 10; x <= y; x++, y--) {
  console.log(x, y);
}

//무한루프 : 실행시 브라우저가 멈출 수 있음
let x = 0;

for (;;) {
  console.log(x);
}

console.log("출력 안됨");

for (let i = 0; i < 10; i++) {
  console.log(i--);
}

console.log("출력 안됨");

//객체와 배열의 for 문

//객체 for in
const lunch = {
  name: "라면",
  taste: "매운맛",
  kilocalories: 500,
  cold: false,
};
//키의 이름은 자유롭게 사용가능
for (const key in lunch) {
  // 💡 변할 것이 아니므로 const 사용(let을 사용해도 큰 상관은 없다.)
  console.log(key, ":", lunch[key]);
}

//배열 for of
const list = [1, "가나다", false, null];

for (const item of list) {
  console.log(item);
}
for (const el of list) {
  console.log(el);
}

// 문자열 역시 이터러블이므로 사용 가능
for (const letter of "안녕하세요~") {
  console.log(letter);
}

//for of의 장점
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ⚠️ 변수(i)를 사용하므로 위험요소 존재
for (let i = 0; i < numbers.length; i++) {
  // 이곳에 i를 변경하는 코드가 들어간다면...
  console.log(numbers[i]);
}

// ⭐️ 변수를 사용하지 않음으로 보다 안전
for (const num of numbers) {
  console.log(num);
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
  num++; // ⚠️ 복사된 값. let 사용 주목
  numbers2.push(num + 1);
}
console.log(numbers1, numbers2); //numbers1그대로 numbers2는 number1의 값 복제 +2한 값들

//continue,break

for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

console.log("for 루프 종료");

for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

console.log("for 루프 종료");


//label 어떤것을 종료하거나 건너뛸것을 명시 할 수있음 자주 사용은 안함 

outer:
for (let i = 1; i < 10; i++) {

  inner:
  for (let j = 1; j < 10; j++) {

    if (j % 2 === 0) continue inner;
    if (i * j >= 30) continue outer;
    
    if (j > 8) break inner;
    if (i - j > 7) break outer;

    console.log(i, j, i * j);
  }
}