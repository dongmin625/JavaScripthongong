//함수 더 알아보기

//중첩된 함수
function outer() {
  const name = "바깥쪽";
  console.log(name, "함수");

  function inner() {
    const name = "안쪽";
    console.log(name, "함수");
  }
  inner();
}

outer();

//재귀 함수 stack 오버플로우 발생할수도 있으니 주의!

function upto5(x) {
  console.log(x);
  if (x < 5) {
    upto5(x + 1);
  } else {
    console.log("- - -");
  }
}

upto5(1);
upto5(3);
upto5(7);

function fact(x) {
  return x === 0 ? 1 : x * fact(x - 1);
}

console.log(fact(1), fact(2), fact(3), fact(4));

//원시 타입 : 인자로 들어간 함수 내에서 변경에 영향을 받지 않음
//참조 타입 : 인자로 들어간 한수 내에서 요소가 변하면 실제로도 변함

//but 함수에 주어진 인자를 변경하는 것은 좋지 않음
