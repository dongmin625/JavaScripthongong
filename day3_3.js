//while문 

let x = 0;

while (x < 10) {
  console.log(x++);
}

//무한 루프

while (x < 10) {
  console.log(x);//x의 값이 변하지 않음
}

// 인위적인 무한반복에 널리 쓰이는 코드
while (true) {
    console.log('무한반복');
  }

// 가독성 위주로 짠 코드
// 코드에 의도가 드러나도록
while (x < 14) {
  const toContinue = x % 2 === 0;
  const toBreak = x > 7;
  const xNow = x++;

  if (toContinue) continue;
  if (toBreak) break;

  console.log(xNow);
}

// let x = 0;
while (x < 14) {
  const xNow = x++;

  if (xNow % 2 === 0) continue;
  if (xNow > 7) break;

  console.log(xNow);
}

//do-while
{
let x = 12;

do {
  console.log(x++);
} while (x < 10);

}