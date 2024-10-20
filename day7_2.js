//고차함수 메서드들
//다른함수 (콜백 함수)를 인자로 받음
//함수형 프로그래밍 : 변수 사용없이 순회 작업들을 코딩

//for each
//break,continue 사용 불가

const arr = [1, 2, 3, 4, 5];

const result = arr.forEach(itm => {
  console.log(itm);
});

// 💡 결과로는 undefined 반환 - 실행 자체를 위한 메서드
console.log('반환값:', result);

//콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )!!!

const arr2 = [10, 20, 30, 40, 50];

// 콜백함수의 인자가 둘일 때
arr2.forEach((itm, idx) => {
  console.log(itm, idx);
});

const logWithIndex = (itm, idx) => {
    console.log(`[${idx}]: ${itm}`);
  }
  
  arr.forEach(logWithIndex);

//forEach를 사용하여 실제 배열의 값을 바꿀수도있다 (조심해서 사용)



// 콜백함수의 인자가 셋일 때
arr.forEach((itm, idx, arr) => {//itm값은 단순히 복사 해온 값이지만 arr은 실제로 주소를 바라보고 있는 값
  // 💡 세 번째 인자는 원본 배열의 참조임
  arr[idx]++;
  console.log(itm);
});


//map -각 요소를 주어진 콜백함수로 처리한 새 배열 반환
//콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )!!!
{
    const orgArr = [1, 2, 3, 4, 5];

// ⭐️ 각 콜백함수는 어떤 값을 반환해야 함
const arr1 = orgArr.map(i => i + 1);
const arr2 = orgArr.map(i => i * i);
const arr3 = orgArr.map(i => i % 2 ? '홀수' : '짝수');//원본 값 orgArr은 변하지 않는다.
}