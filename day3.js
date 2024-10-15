//블록문과 스코프

{
  const x = "Hello";
  let y = "world!";
  console.log(x, y);
}

console.log(x); //스코프 블록안에 선언된 변수와 상수를 밖에서 사용불가
console.log(y); //스코프 블록안에 선언된 변수와 상수를 밖에서 사용불가

let x = 1;

{
  let y = 2;
  console.log(x, y); //반대로 블록 안쪽에서는 바깥의 것 사용 가능
}
console.log(x);
console.log(y); //error

const xx = 0;
let yy = "Hello!";
console.log(xx, yy); // 0 Hello!

{
  const xx = 1; // 💡 블록 안에서는 바깥의 const 재선언 가능(이름만 같음 별개임)
  let yy = "안녕하세요~";

  console.log(xx, yy); // 1 안녕하세요~
  // ⚠️ const, let을 빼먹으면 재선언이 아니라 바깥것의 값을(변수면) 바꿈!
}

console.log(xx, yy); // 0 Hello!

let a = 0;
let b = 1;
let c = 2;
console.log("시점 1:", a, b, c);

{
  let a = "A";
  let b = "B";
  console.log("시점 2:", a, b, c);

  {
    let a = "가";
    console.log("시점 3:", a, b, c); //안쪽에서 선언 되어 있지 않는것은 바깥쪽으로 스코프를 옮겨 탐색 시점3에서 b =시점2의b 'B' c =시점1의c '2'
  }

  console.log("시점 4:", a, b, c);
}

console.log("시점 5:", a, b, c);

//변수나 상수는 가능한 사용할 블록 내에서 선언 - 메모리 절약
