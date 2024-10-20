//배열의 기본 메서드들
console.log(
    Array.isArray([1, 2, 3]),
    Array.isArray('123'),
    Array.isArray('123'.split(''))//split 쓰면 배열로 바뀜
  );

  const arrays = [
    [], [1, 2, 3], new Array(),
    // ⚠️ instanceof에서는 결과가 다름
    Array.prototype // 배열임
  ];
  
  const notArrays = [
    1, 'abc', true, null, {}
  ];

  for (const item of arrays) {//배열 순환 for-of 객체순환 for-in
    console.log(
      item,
      Array.isArray(item),
      item instanceof Array
    );
  }

//at 주어진 인자를 엔덱스로 값을 반환
const arr = [
    '한놈', '두시기', '석삼', '너구리', '오징어'
  ];
  
  console.log(
    arr.at(1), arr.at(2)
  );

  console.log(
    arr.at(-1), arr.at(-2)
  );//오징어,너구리

//includes - 인자로 주어진 요소 유무 확인
const arr1 = [1, 2, 3, 'abc', true];

console.log(//ture
  arr1.includes(2),
  arr1.includes('abc'),
  arr1.includes(true),
);
console.log(//false
    arr1.includes(4),
    arr1.includes('가나다'),
    arr1.includes(false)
  );

//참조형 데이터의 경우
const obj1 = { x: 1, y: 2 };
const obj2 = { x: 1, y: 2 };

const arr2 = [
  obj1,
  { x: 3, y: 4 }
];

//같은 값이라도 주소가 다른것들은 false
console.log(
  arr2.includes(obj1),//true
  arr2.includes(obj2),//false
  arr2.includes({ x: 1, y: 2 }),//false
  arr2.includes({ x: 3, y: 4 })//false
);

//indexOf , lastIndexOf - 앞/뒤에서 첫 번째 값의 인덱스 반환 없을시 -1반환
const arr3 = [1, 2, 3, 2, 1];

console.log(
  arr3.indexOf(2),
  arr3.lastIndexOf(2),
  arr3.indexOf(4)
);

//join - 인자로 주어진 값으로 구분하여 요소들을 문자열로 연결하여 반환
const arr4 = ['a', 'b', 'c', 'd', 'e'];
const arr5 = [
  1, true, null, undefined, '가나다', { x: 0 }, [1, 2, 3]
];
console.log(
    arr4.join() // 인자가 없다면 쉼표`,`로
  );
  console.log(
    arr5.join(':') //null과 undefined는 공백으로 객체는 [object:object]
  );

  console.log(
    classIntro(3, '김민지', '영희', '철수', '보라')
  ); // 호이스팅
  
  function classIntro (classNo, teacher, ...children) {
  
    // [ 4-3강 예제 ]
  
    // let childrenStr = '';
    // for (const child of children) {
    //   if (childrenStr) childrenStr += ', ';
    //   childrenStr += child;
    // }
    // return `${classNo}반의 선생님은 ${teacher}, `
    //   + `학생들은 ${childrenStr}입니다.`
  
    return `${classNo}반의 선생님은 ${teacher}, `
      + `학생들은 ${children.join(', ')}입니다.`
  }

//push(맨뒤에 값 넣기),unshift(맨앞에 값 넣기)
//push보다 unshift 가 더 느림
const arr6 =[1,2,3];
const x = arr6.push(4); //x에는 4라는 요소가 아닌 배열의 길이가 저장됨
// arr6.push(4); 배열만 바꿀용도로 쓸려면 이렇게 쓰면됨
const y = arr6.push(5,6,7); //배열의 최종길이 : 7을 y에 저장

const arr7 = [5, 6, 7];
const x1 = arr.unshift(4); //x1에 배열의 길이 저장

console.log(x, arr);

//pop:push의 반대 동작 shift:unshift의 반대 동작
//pop이 shift보다 더 빠름

//splice -원하는 위치에 요소들을 추가 삭제

const arr8 = [1,2,3,4,5,6,7];

arr8.splice(2,2);//2번 인덱스부터 2개 제거

arr8.splice(3,0,'a');//3번 인덱스부터 제거 없이 'a' 를 추가

arr8.splice(1,3,'가','나','다');//1번 인덱스 부터 3개 제거 후 '가','나','다' 추가 

//delete 보다는 splice 를 사용하기를 권장 delete 는 empty 값을 남김

//fill 배열을 특정 값으로 채움

// 중간의 빈 값도 채움
const arr9 = [1, 2, , , 4, 5];
arr9.fill(7);

console.log('1.', arr9);

// 💡 특정 값으로 채운 배열 생성시 유용
const arr10 = new Array(10);//인덱스가 10개인 빈 배열 생성
arr10.fill(1);//[1,1,1,1,1,1,1,1,1,1]

console.log('2.', arr10);
// 인자가 둘일 때: (채울 값, ~부터)
arr10.fill(2, 3);//[1,1,1,2,2,2,2,2,2,2]

console.log('3.', arr10);

// 인자가 셋일 때: (채울 값, ~부터, ~ 전까지)
arr10.fill(3, 6, 9);//[1,1,1,2,2,2,3,3,3,2]

console.log('4.', arr2);


//reverse 배열의 순서 뒤집기-기존 배열 바꿈
arr10.reverse();


//새 배열을 반환하는 메서드들 (원본 배열을 수정하지 않음)

{
//concat : 이어붙임
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = [true, false];

const arr4 = arr1.concat(arr2);

console.log(arr4);

const arr5 = arr1.concat(arr2, 3);

console.log(arr5);

const arr6 = arr1.concat('ABC', arr2, arr3, 100);

console.log(arr6);

// ⭐️ 원본 배열들에는 변화 없음
console.log(arr1, arr2, arr3);


//slice -인자로 주어진 범주의 값을 잘라 반환(파이썬 슬라이싱과 동일)

const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr8 = arr7.slice(3);
const arr9 = arr7.slice(3, 7);

console.log(arr8, arr9);
}

{
    const orgArr = [
        1, 2,
        [3, 4],
        [5, [6, [7, 8]]]
      ];
      
      // 인자가 없으면 1을 넣은 것과 같음
      const arr0 = orgArr.flat();
      const arr1 = orgArr.flat(1);//한 단계 풀기
      
      const arr2 = orgArr.flat(2);//2단 풀기
      const arr3 = orgArr.flat(3);//3단 풀기

      // 원본에는 변화 없음
console.log('org:', orgArr);
}

{//이 메서드들은 얕은 복사 : 원래 값(orgArr)을 변화시키지 않는다.
    const orgArr = [
        1, { x: 2 }, [{ x: 3 }, {x: 4}], 5
      ];
      
      const arr1 = orgArr.concat(6);
      const arr2 = orgArr.slice(0, 3);
      const arr3 = orgArr.flat();
      
      orgArr[0] = 0;
      orgArr[1].x = 20;
      orgArr[2][0].x = 30;
      
      console.log(orgArr);
      console.log(arr1);
      console.log(arr2);
      console.log(arr3);

}