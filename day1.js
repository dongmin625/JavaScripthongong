//console

console.log('Hello word!');
console.log(1);
console.log(true);
console.log({name:'홍길동',age:20,married:false});

//콘솔은 소프트웨어 외적으로는 영향을 끼치지 않음 (개발자용 기능)

//console 기능들

console.log('로그 - 기본적인 출력'); //가장 많이 씀
console.info('로그 - 기능적으로는 log와 같음. 사용하기에 따라 용도 구분 가능'); //브라우저 마다 달라서 쓰는곳도 있고 안쓰는곳도 있음
console.warn('경고 - 문제가 될수있는 부분'); //문제가 발생할수 있음을 암시 시켜줌
console.error('오류 - 에러 발생 상황'); // 문제가 발생했을때 알림

//주석과 세미콜론

//주석: 컴퓨터는 무시하는 메시지, 또는 사용하지 않는 코드 잠시처리
//window 의 경우 ctrl + / 하면 해당줄이 자동으로 주석 처리됨!
//한줄
/*범위*/

//세미콜론 
//자바스크립트는 ; 생략가능 but 
console.log('Hello');console.log('World') //다음과 같이 명령문을 한줄로 표시할때는 필수 