//boolean 과 관련연산자
console.log(true, !true, false, !false);

console.log(true, !true, !!true, !!!true);

console.log(false, !false, !!false, !!!false);

console.log(
    true === !false,
    !(1 == "1"),
    !(1 === "1"),
    !(typeof false === "boolean")//false typeof가 반환하는 값은 항상 String 임 
);

console.log(
    true && true,
    true && false,
    false && true,
    false && false,
);

console.log(
    true || true,
    true || false,
    false || true,
    false || false,
);

let error = true;
// error = false;

// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!');

// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log('이상 없음.');


let x = true;
// x = false;

// ⭐️ &&, || 연산자는 값 자체를 반환
let y = x && 'abc';
let z = x || 123;

console.log(y, z); //abc,true

let num = 103247;

console.log(
    'num은 3의 배수' +
    (num % 3 === 0 ? '입니다.' : '가 아닙니다.')
);

//let error = true;
//error = false;

error 
    ? console.error('오류 발생!') 
    : console.log('이상 없음');


    console.log(
        1.23 ? true : false,
        -999 ? true: false,
        '0' ? true : false,
        ' ' ? true : false,
        Infinity ? true : false,
        -Infinity ? true : false,
        {} ? true : false,
        [] ? true : false,
    ); //전부 true

    console.log(
        0 ? true : false,
        -0 ? true : false,
        '' ? true : false,
        null ? true : false,
        undefined ? true : false,
        NaN ? true : false,
    );//전부 false