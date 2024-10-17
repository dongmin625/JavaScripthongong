//객체 생성과 프로퍼티 접근

const food1 = {
  name: "햄버거",
  price: 5000,
  vegan: false,
};

console.log(food1);

console.log(
  food1.name, // 💡 마침표 프로퍼티 접근 연산자
  food1["price"] // 💡 대괄호 프로퍼티 접근 연산자
);

const obj = {
  1: "하나", // 숫자도 객체의 키로는 사용 가능
  "ab-cd": "ABCD", // 문자 포함 시 키도 따옴표로 감싸야 함
  "s p a c e": "Space",
};

// 대괄호 프로퍼티 접근 연산자로만 가능
console.log(obj[1], obj["ab-cd"], obj["s p a c e"]);

// ⚠️ 오류 발생
// console.log(
//   obj.1,
//   obj.ab-cd,
//   obj.s p a c e
// );

//객체나 배열을 키값으로 사용하면 안된다.
const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];

const obj1 = {
  //잘못된 사용
  [objKey]: "객체를 키값으로",
  [arrKey]: "배열을 키값으로",
};

//프로퍼티 삭제 - delete 연산자

const person1 = {
  name: "홍길동",
  age: 24,
  school: "한국대",
  major: "컴퓨터공학",
};

console.log(person1);

//방법1
delete person1.age;
console.log(person1);
//방법2
delete person1["major"];
console.log(person1);

// 💡 (객체에 없는 프로퍼티를 삭제)오류가 발생하지는 않음
delete person1.hobby;
console.log(person1);

//동적 사용
const product1 = {
  name: "노트북",
  color: "gray",
  price: 800000,
};

function addModifyProperty(obj, key, value) {
  // obj.key = value; // ⚠️ 의도와 다른 작업 수행
  obj[key] = value;
}
function deleteProperty(obj, key) {
  // delete obj.key // ⚠️ 의도와 다른 작업 수행
  delete obj[key];
}

addModifyProperty(product1, "inch", 16);
console.log(product1);

//객체 선언 시 프로퍼티 키와 대입할 상수/변수명이 동일할 시 단축 표현
const x = 1, y = 2;

const obj2 = { 
  x: x,
  y: y
}

console.log(obj2);

{
const obj2 = { x, y }

console.log(obj2);
}

// 일반 함수 프로퍼티 정의
const person = {
    name: '홍길동',
  
    salutate: function (formal) {
      return formal
      ? `안녕하십니까, ${this.name}입니다.`
      : `안녕하세요, ${this.name}이에요.`;
    }
  }
  console.log(person.salutate(true));

// ⭐️ 메서드 정의
const newperson = {
    name: '홍길동',
    
    salutate (formal) {
      return formal
      ? `안녕하십니까, ${this.name}입니다.`
      : `안녕하세요, ${this.name}이에요.`;
    }
  }
  console.log(person.salutate(true));