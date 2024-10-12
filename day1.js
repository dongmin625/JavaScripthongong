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