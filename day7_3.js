//객체 스프레드
{
const arr1 = ['B', 'C'];
const arr2 = ['D'];
const arr3 = ['E'];

const arr4 = ['A', ...arr1, ...arr2, ...arr3, 'F']

console.log(arr4);
}

const arr1 = [1,2,3,4,5];

// console.log(1, 2, 3, 4, 5); 결과 1 2 3 4 5
console.log(...arr1); //결과 1 2 3 4 5

console.log(
    //Math.max(arr1) NaN
    Math.max(...arr1),
    Math.min(...arr1)
  );

  function classIntro (classNo, teacher, ...children) {
    return `${classNo}반의 선생님은 ${teacher}, `
      + `학생들은 ${children.join(', ')}입니다.`
  }
  
  const classNo = 3;
  const teacher = '김민지';
  const students = ['영희', '철수', '보라', '돌준', '달숙'];//배열 스프레드
  
  console.log(
    classIntro(classNo, teacher, ...students)
  );

  const arr = [1, 2, 3, 4, 5, 6, 7];
  const toAdd = ['둘', '셋', '넷'];
  
  arr.splice(1, 3, ...toAdd); //1번인덱스 부터 3개 자르고 그자리에 toAdd 넣기
  
  console.log(arr);

{
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2]; //결과 같은데 보기 좋음

console.log(arr3, arr4);
}

{
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1];//얕은 복사
    
    console.log(arr1 === arr2);
}

{//push, unshift 대신 사용
let arr = [1, 2, 3];

arr = [...arr, 4]; //~push
console.log(arr);

arr = [0, ...arr]; //~unshift
console.log(arr);

}

{//splice 는 원본 변경 slice는 원본 유지
    const orgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // 4 ~ 6을 제외한 새 배열 만들기
    
    // 💡 slice는 원본을 변경하지 않음
    const arr1 = [
      ...orgArr.slice(0, 3),
      ...orgArr.slice(6, 9)
    ];
    console.log(arr1);

// 참고: 또 다른 방법
    const arr2 = orgArr
    .filter((_, i) => !(i >= 3 && i < 6));
    console.log(arr2);

    // 원본은 유지
    console.log(orgArr);
}


//디스트럭쳐링

//기존코드
{
    const arr = [1, 2, 3];

    const x = arr[0];
    const y = arr[1];
    const z = arr[2];

    console.log(x, y, z); // 1 2 3
} 

{//디스트럭쳐링으로 간략화

    const arr = [1, 2, 3];
    const [x, y, z] = arr;

    console.log(x, y, z);
}

{//일부만 가져오는 것도 가능
    const arr = [1, 2, 3];
    const [x, y] = arr;

    console.log(x, y);
}

{
    const arr = [1, 2, 3];

    const [a, b, c, d = 4, e = 5] = arr; //if 기본값을 설정하지 않으면 undefined가 들어감
    console.log(a, b, c, d, e);

    // 기본값보다 할당값이 우선

}

{//나머지 변수 사용가능
    const arr = [1, 2, 3, 4, 5];
    const [x, ...y] = arr;
    
    console.log(x, y);

}

const players = [
    { name: '순이', score: 91 },
    { name: '정환', score: 65 },
    { name: '윤수', score: 72 },
    { name: '철웅', score: 88 },
    { name: '지우', score: 98 },
    { name: '세아', score: 40 }
  ];
  
  // 배열 중 첫 3개만 가져옴
  function logTop3 ([first, second, third]) {
    console.log(
      `1등은 ${first}!! 2등과 3등은 ${second}, ${third}입니다.`
    );
  }

logTop3(
    [...players] // 💡 원본의 얕은 복사본을 정렬
    .sort((a, b) => b.score - a.score)
    .map(({name}) => name)
  );

  let a = 1;
  let b = 2;
  
  // 서로 값을 바꾸기
  [a, b] = [b, a];
  
  console.log(a, b);

{//피보나치 수열
        
    let a = 0;
    let b = 1;

    for (let i = 0; i < 10; i++) {
        [a, b] = [b, a + b];
        console.log(b);
    }
}