//원사 타입vs참조 타입

//원시 타입
let number1 = 1;
let string1 = 'ABC';
let bool1 = true;

let number2 = number1;
let string2 = string1;
let bool2 = bool1;
//주소가 아닌 값 자체를 복사

number2 = 2;
string2 = '가나다';
bool2 = false;

//1과 2는 다른곳을 가리키는 중임
console.log('~1:', number1, string1, bool1);
console.log('~2:', number2, string2, bool2); 

//참조 타입
const obj1 = {
    num: 1, str: 'ABC', bool: true
  };
  const obj2 = obj1;
  // obj2 = {}; // ⚠️ 오류

  console.log('obj1:', obj1);
console.log('obj2:', obj2);

// ⭐️ const임에도 내부 값은 변경 가능함 주목
// 내부 변경 방지는 이후 배울 Object.freeze 함수로
obj2.num = 2;
obj2.str = '가나다';
obj2.bool = false;


//둘다 2의 내용으로 변경됨
console.log('obj1:', obj1);
console.log('obj2:', obj2);

const array1 = [1, 'ABC', true];
const array2 = array1;
// array2 = []; // ⚠️ 오류

console.log('array1:', array1);
console.log('array2:', array2);

// ⭐️ const임에도 내부 값은 변경 가능함 주목
array2[0] = 3;
array2[1] = 'def';
array2[2] = false;

//둘다 2의 내용으로 변경됨 if 둘다 1내용으로 바꿔도 1로 다 바뀜
console.log('array1:', array1);
console.log('array2:', array2);