//자바스크립트 배열의 특징과 생성
//자바스크립트의 배열은 다양한 자료형을 넣어도 된다는 특징

//다른 언어들의 배열(전형적인 배열)
//한 배열에는 같은 자료형의 데이터만 포함 가능
//데이터의 메모리 주소가 연속으로 나열됨
//접근은 빠름, 중간요소의 초가나 제거는 느림


//자바스크립트의 배열
//배열의 형태와 동작을 흉내내는 특수 객체
//한 배열에 다양한 자료형의 데이터가 들어갈 수 있음
//연속나열이 아님 - 엔진에 따라 요소들의 타입이 동일하면 연속 배열하기도..
//접근은 상대적으로 느림, 중간요소의 추가나 제거는 빠름
//특정 자료형 전용 배열도 있음 - faster

const arr1 =[]; //빈배열
const arr2 = [1,2,3];
const arr3 = [1, ,2, ,3]//빈 요소(undefined) 포함 배열 생성

console.log(arr1.length, arr1);//0 내용출력
console.log(arr2.length ,arr2);//3 내용출력
console.log(arr3.length ,arr3);//5 내용출력

//생성자 함수
const arr = new Array();

console.log(arr);
console.log(arr.length);

const arr4 = new Array(1, 2, 3);
const arr5 = new Array('ABC');
const arr6 = new Array(true);

console.log(arr1);
console.log(arr2)
console.log(arr3)

//정적 메서드 from
const arr7 = Array.from([1, 2, 3]);
const arr8 = Array.from('ABCDE'); 
const arr9 = Array.from({
  '0': true,
  '1': false,
  '2': null,
  length: 3
});

console.log(arr1);
console.log(arr2); // ['A','B','C','D','E']
console.log(arr3); // [true,false,null]

const arrLike = {
    0: '🍎',
    1: '🍌',
    2: '🥝',
    3: '🍒',
    4: '🫐',
    length: 5
  };
  
  // 일반 for문으로 순회 가능
  for (let i = 0; i < arrLike.length; i++) {
    console.log(arrLike[i]);
  }

// for ... of 문은 이터러블에서만 사용 가능
for (const item of arrLike) {//사용불가
    console.log(item);
  }

// 배열은 이터러블, 성능도 향상
for (const item of Array.from(arrLike)) {//Array.from()에 넣으면 실제 배열이 된다.
    console.log(item);
  }

  const arr10 = [1, 2, 3];
  const arr11 = Array.from(arr1);
  arr11.push(4); //arr11 에만 적용됨
  
  console.log(arr10, arr11);

arr10[0] = 0;//arr11은 바뀌지 않음(독립적)

console.log(arr10, arr11);

const arr12 = [{x: 1}, {x: 2}];
const arr13 = Array.from(arr12);//실제 배열이 됨
arr13.push({x: 3});

// 참조타입 요소의 내부값이 바뀔 경우
arr12[0].x = 0;
console.log(arr1, arr2);


//매핑 : 각 요소가 특정 알고리즘을 거쳐 새 값으로 반환
const arr14 = [1, 2, 3, 4, 5];
const arr15 = Array.from(arr14, x => x + 1);
const arr16 = Array.from(arr14, x => x * x);
const arr17 = Array.from(arr14, x => x % 2 ? '홀' : '짝');

console.log(arr15);
console.log(arr16);
console.log(arr17);