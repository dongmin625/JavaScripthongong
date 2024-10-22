//새로 추가된 메서드들
const array0 = [3, 1, 4, 5, 2];
array0.sort(); // 메서드 호출이 부작용을 유발 - 원본을 바꿈

console.log(array0);

const array1 = [3, 1, 4, 5, 2];
const array2 = [...array1];// 이렇게하면 새로운 배열을 만들고 복사하므로 부작용x 

console.log(array1, array2);

//toSorted

const array1Sorted = array1.sort(); // 새 배열 반환이 아닌 레퍼런스 복사
const array2Sorted = array2.toSorted(); // 이렇게하면 새로운 배열을 만들고 복사하므로 부작용x 

//array1과 array1Sorted는 주소까지 완전 같은 배열 but array2와 array2Sorted는 다른 배열 
console.log(array1Sorted, array2Sorted);

array1Sorted.push(6);
array2Sorted.push(6);

console.log(array1Sorted, array2Sorted);

// es14 전에는...
array3 = [3, 1, 4, 5, 2];
array3Sorted = [...array3].sort(); // 이제는 이렇게 할 필요 없음

console.log(array3, array3Sorted);

array4 = [3, 6, 1, 10, 4, 8, 7, 5, 9, 2];

// 역시 고차함수 - 콜백함수를 받음
array4Sorted = array4.toSorted((a, b) => a % 2 - b % 2);

console.log(array4, array4Sorted);

//toReversed
array5 = [3, 1, 4, 5, 2];
array6 = [...array5];

array5Reversed = array5.reverse();//원본을 건들임
array6Reversed = array6.toReversed();//배열을 새로만듬

array5Reversed.push(6);
array6Reversed.push(6);

console.log(array5Reversed, array6Reversed);

//toSpliced
const array7 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const array8 = [...array7];

array7.splice(4, 3, 'A', 'B', 'C'); // 부작용 유발

console.log(array7);

const array9 = array8.toSpliced(4, 3);//원본을 건들임
const array10 = array8.toSpliced(4, 3, 'A', 'B', 'C');//배열을 새로만듬

console.log(array9, array10);
console.log(array8);

//findLast , findLastIndex

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 앞에서부터 찾는 메서드들
const firstMult3 = myArray.find(i => i % 3 === 0); //find는 첫번째 값만 반환
const firstMult3Idx = myArray.findIndex(i => i % 3 === 0); //findIndex는 첫번째 값의 인덱스만 반환

console.log(firstMult3, firstMult3Idx);

//with
const orgArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 아래의 코드는 원본 배열을 수정
// orgArray[3] = '넷';

const newArray = [...orgArray.slice(0, 3), '넷', ...orgArray.slice(4, 10)];//복잡

console.log(newArray, orgArray);

{
    const newArray = orgArray.with(3, '넷');

    console.log(newArray, orgArray);
}

{
    const newArray = orgArray //원본배열을 유지하면서 값을 바꿀수 있다.
    .with(3, '넷')
    .with(6, '일곱')
    .with(9, '열');

    console.log(newArray, orgArray);
}