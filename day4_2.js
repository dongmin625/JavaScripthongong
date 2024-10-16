//매개변수

//함수의 매개변수 갯수를 넘어가는 인수 -> 오류를 발생시키지 않고 무시됨
//함수의 매개벼수 갯수에 모자른 인수 -> 오류를 발생시키지 않고 undefined를 반환함

function add(a, b) {
  return a + b;
}

console.log(add(1, 3), add(1, 3, 5), add(1, 3, 5, 7));

//default 매개변수
function add(a = 2, b = 4) {
  console.log(`${a} + ${b}`);
  return a + b;
}

console.log(
  add(),
  add(1), //a에는 1이 b에는 4가 들어감
  add(1, 3)
);

//arguments -함수내에서 사용가능한 지역 변수(함수 호출 시 전달된 모든 인수들을 배열 형태로 가짐)
//배열의 형태를 한 객체
function add(a, b) {
  console.log("1.", arguments);
  console.log("2.", arguments[0]);
  console.log("3.", typeof arguments);
  return a + b;
}

console.log("4.", add(1, 3, 5, 7));

function add(a, b) {
  for (const arg of arguments) {
    console.log(arg);
  }
  return a + b;
}

console.log(add(1, 3, 5, 7));

//화살표 함수에서는 arguments 사용불가
function getAverage() {
  let result = 0;
  for (const num of arguments) {
    result += num;
  }
  return result / arguments.length;
}

console.log(getAverage(1, 4, 7), getAverage(24, 31, 52, 80));

// 💡 타입에 안전한 버전
function getAverage() {
  let result = 0,
    count = 0;
  for (const num of arguments) {
    if (typeof num !== "number") continue;
    result += num;
    count++;
  }
  return result / count;
}

console.log(getAverage(2, "가", 8, true, 5));

//나머지 변수 :마지막 인자로 만 사용가능 (특정 매개변수 뒤에 정해지지 않은 수의 매개변수들을 받을 때)
//arguments와 달리 실제 배열임

console.log("3.", classIntro(3, "김민지", "영희", "철수", "보라")); // 호이스팅

function classIntro(classNo, teacher, ...children) {
  console.log("1.", children);
  console.log("2.", arguments);

  let childrenStr = "";
  for (const child of children) {
    if (childrenStr) childrenStr += ", ";
    childrenStr += child;
  }
  return (
    `${classNo}반의 선생님은 ${teacher}, ` + `학생들은 ${childrenStr}입니다.`
  );
}
