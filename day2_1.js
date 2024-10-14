//문자열 텍스트 데이터
//문자열을 묶을때 '를 쓰던 "쓰던 큰 상관은 없음

//but 구분해야 할 경우
let word1 = '작은따옴표 안에 "큰따옴표" 사용';
let word2 = "큰따옴표 안에 '작은따옴표' 사용";
console.log(word1, word2);

// ⚠️ 오류 발생
// let word1 = '작은따옴표 안에 '작은따옴표' 사용';
// let word2 = "큰따옴표 안에 "큰따옴표" 사용";
// console.log(word1, word2);

// ⭐️ 이스케이프 표현(escape sequence)
let word3 = "작은따옴표 안에 '작은따옴표' 사용";
let word4 = '큰따옴표 안에 "큰따옴표" 사용'; // \이스케이프 문자 뒤에오는 텍스트를 문자열로 인식
console.log(word1, word2);

// let longName = '김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이';

let longName =
  "김수한무 거북이와 두루미 \
삼천갑자 동방삭 치치카포 사리사리센타 \
워리워리 세브리깡 무두셀라 구름이 \
허리케인에 담벼락 담벼락에 서생원 \
서생원에 고양이 고양이엔 바둑이 \
바둑이는 돌돌이";

// ⚠️ 줄바뀜 되는 것이 아님
// 큰따옴표도 마찬가지
console.log(longName);

//문자열 안에 탭과 줄바꿈을 그대로 사용 가능!
let word = `안녕하세요~		반갑습니다!
저는 \\홍길동\\입니다.`;
console.log(word);

//${}안에 상수나 변수, 표현식 등을 삽입 가능 탬플릿 리터럴
const NAME = "홍길동";
let age = 20;
let married = false;

console.log(
  `제 이름은 ${NAME}, 나이는 ${age}세구요, \
${married ? "기혼" : "미혼"}입니다.`
);

//다른 자료형도 사용할 수 있음
console.log(`일더하기 이는 ${1 + 2}이다.`);

x == y; //값이 같다.
x === y; // 자료형도 값도 같다.
x != y; //값이 다르다.
x !== y; //값또는 자료형이 다르다.

//==,!= 자료형을 구분하지 않음
//===,!==을 지향함

// ⚠️ 숫자 문자열 관련 주의!
console.log(
  100 > 12, // 숫자는 그 자체로 비교 true
  '100' > '12', // 문자는 사전순으로 비교 false
  '100' > 12, // 문자와 숫자를 비교하면 문자를 숫자로 변환 true
);

//부수효과

let str1 = '헬로';
str1 += ' 월드';

// 부수효과
console.log(str1);
// 값 반환
let str2 = str1 += '~~~';

console.log(str2); //헬로 월드 ~~~

// 부수효과
console.log(str1); //헬로 월드 ~~~

// ⚠️ 오류. 왼쪽 값은 부수효과의 대상(변수)이어야 함
let str = '헬로' += '월드'; 

// ⚠️ 오류. 왼쪽 값은 부수효과의 대상(변수)이어야 함
const STR = '안녕~';
STR += ' 반가워요!';

//다른 자료형과 더하면 문자열(String) 반환
let result = '안녕' + 1 + true;

console.log(result);
console.log(typeof result);

result += null;//Object 자료형
result += undefined;//undefined 자료형

console.log(result);
console.log(typeof result);//String