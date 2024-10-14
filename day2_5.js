//객체와 배열은 원시타입이 아닌 참조 타입

//객체 : 복합적인 정보를 property(키와 값의 조합)으로 저장하는 자료형
const person1 = {
  name: "김철수",
  age: 25,
  married: false,
};

//속성값에 접근하는 두 방법
console.log(person1.name, person1.age, person1.married);
console.log(person1["name"], person1["age"], person1["married"]);

//존재하지 않는 키로 접근시 undefined 반환

//(키)in(객체) -특정 키 포함 여부 확인
console.log("age" in person1, "job" in person1);

//객체는 기존의 내용을 바꿀수 있음
// 특정 프로퍼티의 값 변경
person1.age = 26;
person1["married"] = true;

console.log(person1);

//새로운 프로퍼티 추가 할 수있음

// 새 프로퍼티 추가
person1.job = "developer";
person1["bloodtype"] = "AB";

console.log(person1);

//객체를 const로 선언함에도 그 내용은 수정이 가능!!! 내용을 통으로 바꾸는건 에러

//배열

const winners = [12, 592, 7, 48];
const weekdays = ["월", "화", "수", "목", "금", "토", "일"];

// 자료형에 관계없이 한 배열에 넣을 수 있음
const randoms = ["홍길동", -24, true, null, undefined];

console.log(typeof winners);
console.log(winners, weekdays, randoms);
//출력하면 배열도 객체이기 때문에 key:value 형태로 출력

// 특정 순서의 값에 접근하는 법 (0부터 시작)
console.log(winners[0], weekdays[6], randoms[3]);

// 배열의 길이(요소의 갯수)를 얻는 법
console.log(winners.length, weekdays.length, randoms.length);

// 마지막 요소 얻기
console.log(winners[winners.length - 1]);

const numbers = [1, 2, 3];

// 특정 위치의 값 수정
numbers[2] = 5;

console.log(numbers);

// 맨 끝에 값 추가
numbers.push(10);

//맨 앞에 값 추가
numbers.unshift(10);

//맨 뒤에 값 삭제
numbers.pop();

//맨 앞에 값 삭제
numbers.shift();

console.log(numbers);

//배열의 범주 너머로 접근시 undefined 반환

//배열안에 객체 객체안에 배열 가능
const person2 = {
  name: "김달순",
  age: 23,
  languages: ["Korean", "English", "French"],
  education: {
    school: "한국대",
    major: ["컴퓨터공학", "전자공학"],
    graduated: true,
  },
};

console.log(person2.languages[2]);
console.log(person2.education.graduated);

const groups = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
];

const weapons = [
  { name: "롱소드", damage: 30, design: ["화룡검", "뇌신검"] },
  { name: "활", damage: 12 },
  { name: "워해머", damage: 48 },
];

console.log(groups[1][2]);
console.log(weapons[2].damage);
console.log(weapons[0].design[0]);


