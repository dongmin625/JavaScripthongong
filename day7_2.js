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

const orgArr = [
    { name: '사과', cat: '과일', price: 3000 },
    { name: '오이', cat: '채소', price: 1500 },
    { name: '당근', cat: '채소', price: 2000 },
    { name: '살구', cat: '과일', price: 2500 },
    { name: '피망', cat: '채소', price: 2500 },
    { name: '딸기', cat: '과일', price: 5000 }
  ];
  
  
  const arr1 = orgArr.map(itm => {
    // 💡 블록 안에서는 return 문 필요함
    return {
      name: itm.name,
      cat: itm.cat
    }
  });
  
  console.log(arr1);

  // 디스트럭쳐링 사용 (편의에 따라 적절히)
const arr3 = orgArr.map(({name, cat}) => {//디스트럭쳐링 에서는 인자가 1개 이더라도 괄호 써줘야됨
    return { name, cat }
  });
  
  console.log(arr3);

  //콜백함수로에 인자로 넣었을 때 true를 반환하는
//find - 첫번째 값 반환
//findLast - 마지막 값 반환
//findIndex - 첫 번째 값의 인덱스 반환
//findLastIndex - 마지막 값의 인덱스 반환
//없을 시 값은 undefined 반환 인덱스는 -1 반환

{
    const arr = [1, 2, '삼', 4, 5, 6, '칠', 8, 9];

const isString = i => typeof i === 'string';
const isBoolean = i => typeof i === 'boolean';

console.log(
  arr.find(isString),
  arr.findLast(isString),
  arr.findIndex(isString),
  arr.findLastIndex(isString)
);
}

{
    const arr = [
        { name: '사과', cat: '과일', price: 3000 },
        { name: '오이', cat: '채소', price: 1500 },
        { name: '당근', cat: '채소', price: 2000 },
        { name: '살구', cat: '과일', price: 2500 },
        { name: '피망', cat: '채소', price: 3500 },
        { name: '딸기', cat: '과일', price: 5000 }
      ];
      
      const isCheapFruit = i => {
        return i.cat === '과일' && i.price < 3000;
      }
      
      console.log(
        arr.find(({cat}) => cat === '채소').name, //오이
        arr.findLast(isCheapFruit).name //살구
      );
}

// some, every - 어떤/모든 요소가 기준을 충족하는지 확인
// some(요소들 중 하나라도 만족하면 true) , every(요소들 모두 만족해야 true)
{
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(
      arr.some(i => i % 2),//true
      arr.every(i => i % 2),//false
      arr.some(i => i < 0),//false
      arr.every(i => i < 10)//true
    );
}

{
    const arr = [
        { name: '사과', cat: '과일', price: 3000 },
        { name: '오이', cat: '채소', price: 1500 },
        { name: '당근', cat: '채소', price: 2000 },
        { name: '살구', cat: '과일', price: 2500 },
        { name: '피망', cat: '채소', price: 3500 },
        { name: '딸기', cat: '과일', price: 5000 }
      ];
      
      const isCheapVege = i => {
        return i.cat === '채소' && i.price < 2000;
      }
      const isPlant = ({cat}) => {
        return ['과일', '채소'].includes(cat);// includes(배열) 값이 배열에 포함되어있는지 확인 : includes는 cat이 '과일' 또는 '채소'인지 확인하는 데 사용됩니다.
      }
      
      console.log(
        arr.some(isCheapVege),
        arr.every(isCheapVege),
        arr.some(isPlant),
        arr.every(isPlant)
      );
}

//filter - 주어진 기준을 충족하는 요소들로 새 배열을 만들어 반환

{
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const odds = arr.filter(i => i % 2);
    const evens = arr.filter(i => !(i % 2));
    const largerThan3 = arr.filter(i => i > 3);
    
    console.log(odds);
    console.log(evens);
    console.log(largerThan3);
}
{
    const arr = [
        { name: '사과', cat: '과일', price: 3000 },
        { name: '오이', cat: '채소', price: 1500 },
        { name: '당근', cat: '채소', price: 2000 },
        { name: '살구', cat: '과일', price: 2500 },
        { name: '피망', cat: '채소', price: 3500 },
        { name: '딸기', cat: '과일', price: 5000 }
      ];
      
      console.log(
        '과일 목록:',
        arr
        .filter(({cat}) => cat === '과일')//cat 이 과일인것만 모아 새로 배열 만듬
        .map(({name}) => name)//새로 만든 배열에서 이름 만 반환
        .join(', ')//그것들을 연결 , 로 구분 
      );
}

//reduce 
//콜백함수 - 인자 (이전값,현재값, 현재 인덱스, 해당 배열)

{
//초기 값이 없는 경우
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  arr.reduce((prev, curr, idx) => {//순회 누적
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr; //45
  })
);
}

{
//초기값이 있을때
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  arr.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
  }, 10)//10 - 11 - 13 ...55 초깃값 에다 인덱스 0번부터 더하면서 합산
);
}

{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log((prev,curr,idx)=>{
    return prev*curr;
  });
}
//reduce,reduceRight(순서 방향 차이)

console.log(//실전에서는 이러한 형태를 자주씀
  arr.reduceRight((prev,curr)=>{
    
    return prev + curr;
  })
);

{
  const arr = [
    { name: '사과', cat: '과일', price: 3000 },
    { name: '오이', cat: '채소', price: 1500 },
    { name: '당근', cat: '채소', price: 2000 },
    { name: '살구', cat: '과일', price: 2500 },
    { name: '피망', cat: '채소', price: 3500 },
    { name: '딸기', cat: '과일', price: 5000 }
  ];
  
  ['과일', '채소'].forEach(category => {//forEach로 순환
    console.log(
      `${category}의 가격의 합:`,
      arr
      .filter(({cat}) => cat === category)//카테고리별로 필터
      .map(({price}) => price)//가격을 가져와 배열을 만듬
      .reduce((prev, curr) => prev + curr)//더한다
    );
  });
}

//sort는 원본배열을 수정함'
//기본 오름차순

let randomWord = 'DBKGICAHFEJ';//문자열은 수정되지 않음

console.log(
  randomWord
  .split('')//배열이됨
  .sort()//정렬
  // .reverse()
  .join('')//문자열이 됨
);

console.log(randomWord);

{
  // ⚠️ 숫자일 시 문제가 생김 (사전순 즉 문자열순 정렬)
  //숫자를 문자열로 암묵적으로 변환하여 오름차순 정렬
const arr = [1, 2, 30, 400, 10, 100, 1000];
console.log(arr.sort());
}

// NaN을 반환하므로 콜백에 사용 불가
console.log('A' - 'B');

{
  const arr = [
    { name: '사과', cat: '과일', price: 3000 },
    { name: '오이', cat: '채소', price: 1500 },
    { name: '당근', cat: '채소', price: 2000 },
    { name: '살구', cat: '과일', price: 2500 },
    { name: '피망', cat: '채소', price: 3500 },
    { name: '딸기', cat: '과일', price: 5000 }
  ];
  
  console.log(
    arr
    .sort((a, b) => {
      if (a.cat !== b.cat) {
        return a.cat > b.cat ? 1 : -1;
      }
      return a.price > b.price ? 1 : -1;
    })
    .map(({name, cat, price}, idx) => {
      return `${idx + 1}: [${cat[0]}] ${name}: ${price}원`
    })
    .join('\n - - - - - - - - - \n')
  );
}

//flatMap 잘안씀
//map 한다음 flat한 효과 
//flatMap은 한단계만 펼칠수 있음
{
  const arr = [1, 2, 3, 4, 5];

console.log(
  arr.flatMap(i => i)
);
}

{
  console.log(
    arr.flatMap(i => [i * 10, i * 100, i * 1000])
  );
}