//빌트인 전역 프로퍼티
console.log(globalThis.Infinity);
console.log(globalThis.NaN);
console.log(globalThis.undefined);

console.log(
  globalThis == globalThis.globalThis,
  globalThis == globalThis.globalThis.globalThis,
  globalThis == globalThis.globalThis.globalThis.globalThis
);

//빌트인 전역 함수

// eval - 문자열로 된 코드를 받아 실행

const x = eval('1 + 2 + 3');

// 객체나 함수의 리터럴은 괄호로 감싸야 함
const obj = eval('({a: 1, b: 2})');

console.log(x, obj);

const code = `
  let x = 1;
  console.log(x++, x);
`;

eval(code);

//특수한 경우가 아닌경우 절대 사용하지 말 것
//보안에 취약, 엔진이 코드를 최적화하지 못하므로 처리 속도가 느림

//유한한 수인지 판단 isFinite
console.log(
    isFinite(1),
    isFinite(0),
    isFinite('1'),
    isFinite(null)
  );//유한 - true

  console.log(
    isFinite(1/0),
    isFinite(Infinity),
    isFinite(-Infinity),
    isFinite(NaN),
    isFinite('abc')
  );//무한 - false

//NaN 여부 반환 isNaN

console.log(
    isNaN(NaN),
    isNaN('abcde'),
    isNaN({}),
    isNaN(undefined)
  );

//인자로 받은 값을 실수로 변환 parseFloat
console.log(
    parseFloat(123.4567),
    parseFloat('123.4567'),//문자열의 경우 앞,뒤 공백은 무시
    parseFloat(' 123.4567 ')
  );


  console.log(
    parseFloat('123.0'),
    parseFloat('123'),
    parseFloat(' 123ABC '),//숫자로 시작할 경우 읽을수 있는 부분까지 숫자로 변환
    parseFloat([123, 456, 789])//배열의 경우 첫요소가 숫자면 해당 숫자반환
  );

//기타 숫자로 반환이 안되는 경우 NaN을 반환  
  console.log(
    parseFloat('ABC123'),
    parseFloat({x: 1}),
    parseFloat([]),
    parseFloat(['a', 1, true])
  );

//인자로 받은 값을 정수(타입은 실수)로 반환-소수점 뒤로 오는 숫자는 버림 반올림하지 않음

console.log(
    parseInt(123),
    parseInt('123'),
    parseInt(' 123.4567 '),
    parseInt('345.6789')
  );

console.log(
    parseInt('abc'),
    parseInt('{}'),
    parseInt('[]')
  );

  console.log(
    parseInt('11'),
    parseInt('11', 2),//2진수로 11->3
    parseInt('11', 8),//8진수로 11
    parseInt('11', 16),//16진수로 11
    parseInt('11', 32),//32진수로 11
  
    parseInt('11', 37),//자바스크립트는 36진수까지 지원
    parseInt('11', 'A'),
  );


//encodeURI , encodeURIComponent
const searchURI = 'https://www.google.com/search?q=얄코';
const encodedURI = encodeURI(searchURI);//한글을 아스키코드에 맞게 바꿔줌
// encodeURI 용도: 전체 URL을 인코딩할 때 사용합니다. 예외 문자: URL의 구조를 유지하기 위해 :, /, ?, &, # 등 URL 구성에 필요한 일부 문자는 인코딩하지 않습니다.

//URI(인터넷 자원의 주소)는 🔗 아스키 문자 셋으로만 구성되어야 함 -즉 한글 안됨

console.log(encodedURI);

const keyword = '얄코';
const encodedKeyword = encodeURIComponent(keyword);
//encodeURIComponent 용도: URL의 특정 구성 요소(예: 쿼리 문자열의 값)를 인코딩할 때 사용합니다. 예외 문자: URL에서 특별한 의미를 가지는 문자도 포함하여, 거의 모든 문자를 인코딩합니다.

console.log(encodedKeyword);

//decodeURI,decodeURIComponent (반대의 동작)

{const encodedURI = 'https://www.google.com/search?q=%EC%96%84%EC%BD%94';
const decodedURI = decodeURI(encodedURI);

console.log(decodedURI);}

const encodedComp = '%EC%96%84%EC%BD%94';
const decodedComp = decodeURI(encodedComp);

console.log(decodedComp);