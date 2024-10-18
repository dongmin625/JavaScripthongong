//String

const strObj1 = new String();
const strObj2 = new String("Hello World!");
const strObj3 = '동민';

console.log(strObj1);
console.log(strObj2);

//valueOf는 객체의 기본 원시 값을 반환하는 메서드입니다.
console.log(strObj1.valueOf(), strObj1.toString());
console.log(strObj2.valueOf(), strObj2.toString());
console.log(strObj3.valueOf(), strObj3.toString());


//⭐ 생성자로서가 아닌 String 함수는 주어진 인자를 문자열로 변환하여 반환

const str1 = String('Hello World!');
const str2 = String(123);
const str3 = String(true);
const str4 = String({x: 1, y: 2}); // 💡 [object Object]
const str5 = String([1, 2, 3]); // 💡 1,2,3

console.log(typeof str1, str1);
console.log(typeof str2, str2);
console.log(typeof str3, str3);
console.log(typeof str4, str4);
console.log(typeof str5, str5);

let myStr = '안녕하세요!';

console.log(
  myStr.length,
  myStr[0],
  myStr[myStr.length - 1]
);

myStr[myStr.length - 1] = '?';
console.log(myStr); // 💡 배열과 달리 그대로
//String은 원시값이므로 특정글자만 수정하는것은 불가능(자바에서는 StringBuffer를 통해 할수는 있다 나머지 언어들 대부분 불가)
//수정하기 위해서는 단순히 다른값을 대입해주어야 함


//toUpperCase, toLowerCase
const word = 'Hello, World.';
console.log(
  word.toUpperCase(),
  word.toLowerCase()
);

console.log(word); //Hello, World. ⭐️ 기존의 문자열은 바꾸지 않음! 다음의 메서드들 모두 마찬가지 
//다른 변수에 할당해서 사용하면 저장가능

//활용
function areSameWords (word1, word2) {
    return word1.toLowerCase() === word2.toLowerCase();
  }
  
  console.log(
    areSameWords('Hello', 'hello'),
    areSameWords('가나다', '가나다'),
    areSameWords('ABC', 'DEF')
  );

//charAt ,at
console.log(
    'Hello World!'.charAt(0),//인자로 주어진 인덱스의 문자 반환
    '안녕하세요~'.charAt(2)
  );

  console.log(
    //신기능, 배열에서도 사용
    '안녕하세요~'.at(1),
    //음수로 뒤에서부터 접근 가능 ( -1 부터 )
    '안녕하세요~'.at(-1)
  );

//indexOf , lastIndexOf
//인자로 주어진 문자열이 앞, 또는 뒤에서 처음 나타나는 인덱스 반환(세는건 항상 앞에서 부터 셈) ,포함되지 않을 시 -1 반환
const word1 = '반갑습니다!';
console.log (
  word1.indexOf('습'),
  word1.lastIndexOf('습')
);

//includes,startWith,endWith
//인자로 주어진 문자열 포함( 아무곳에 / 맨 앞에 / 맨 끝에 ) 여부 불리언으로 반환
const sentence = '옛날에 호랑이 한 마리가 살았어요.';

for (const word of ['옛날에', '호랑이', '살았어요.', '나무꾼']) {
  console.log(
    'includes', word, sentence.includes(word)
  );
  console.log(
    'startsWith', word, sentence.startsWith(word)
  );
  console.log(
    'endsWith', word, sentence.endsWith(word)
  );
  console.log('- - - - -');
}

//search
//인자로 받은 정규표현식과 일치하는 첫 부분의 인덱스 반환
//없을시 -1 반환

console.log(
    '하루가 7번 지나면 1주일이 되는 거야.'.search(/[0-9]/),// 4 
    '하루가 일곱 번 지나면 일주일이 되는 거야.'.search(/[0-9]/) //-1
  );

//substring 파이썬 문자열 슬라이싱과 유사
//인자를 하나만 넣으면 해당 인덱스부터 끝까지
//음수나 범위 외 숫자는 범위 내 최소/최대 숫자로
const word2 = 'ABCDEFGHIJKL';
const part = word2.substring(4, 8) //4번째 인덱스부터 8번전까지 반환

console.log(word2, part);

console.log(
    word.substring(-1),//0과 같음 ->전체 출력
    word.substring(4, 100),
    word.substring(100)//공백출력
  );

  const sentence1 = '옛날에 호랑이 한 마리가 살았어요.';

const firstWord = sentence1.substring(
  0, sentence1.indexOf(' ')
);
const lastWord = sentence1.substring(
  sentence1.lastIndexOf(' ') + 1, sentence1.length
);

console.log(firstWord, lastWord);

//slice
//substring과 같으나 음수로 뒤에서부터 자를 수 있음
const word3 = 'ABCDEFGHIJKL';
console.log(
  word3.substring(4, 8),
  word3.slice(4, 8),
);

console.log(
    word3.substring(-4),
    word3.slice(-4)
  );

  const sentence2 = '옛날에 호랑이 한 마리가 살았어요.';

  const firstWord2 = sentence.slice(
    0, sentence.indexOf(' ')
  );
  
  const lastWord2 = sentence.slice(
    sentence2.lastIndexOf(' ') + 1 - sentence2.length
  );
  
  console.log(firstWord2, lastWord2);

//split 
//인수로 주어진 문자열이나 정규표현식으로 분리하여 배열을 반환
console.log(
    '010-1234-5678'.split('-'),
    'ABC1DEF2GHI3JKL'.split(/[0-9]/)
  )

// 인자로 빈 문자열을 넣거나 인자 생략시
const word4 = '안녕하세요';

console.log(
  word4.split(''),//한글자씩 잘라서 배열로 반환
  word4.split()//그냥 반환
)

const word5 = '하나 하면 할머니가 지팡이 짚고서 잘잘잘';

console.log(
  word.split(' ', 2),//두번째 인자는 배열 요소 몇개를 가지고 올지 정함
  word.split(' ', 4)
)

//trim(앞뒤) , trimStart(앞) , trimEnd(뒤)
const word6 = '  Hello World!  ';
console.log(`--${word}--`);
console.log(`--${word.trim()}--`);
console.log(`--${word.trimStart()}--`);
console.log(`--${word.trimEnd()}--`);

//repeat 
//인자로 주어진 횟수만큼 문자열 반복
//인수가 없거나 0이면 빈 문자열 반환, 음수면 오류 발생
const word7 = '호이';

console.log(word.repeat(3));
console.log(word.repeat(0));
console.log(word.repeat());

//replace , replaceAll
//첫번째 인자로 받은 문자열 또는 정규식을 두 번째 인자로 치환한 결과를 반환
console.log(
    '이스탄불은 터키의 수도이다.'.replace('터키', '튀르키예')
  );
//replace의 첫 인자가 문자열이면 일치하는 첫 부분만 치환
//모두 치환하려면 정규식 /.../g 사용
console.log(word.replaceAll('밥', '라면'));
console.log(word.replaceAll(/밥/g, '라면'));

//메서드 체이닝 
//값을 반환하는 인스턴스 메서드를 연속으로 사용
const word8 = ' 모두 HELLO! ';
const rpFrom = 'hello';
const rpTo = 'bye';

console.log(
  word8
  .trimStart()                // '모두 HELLO! '
  .toLowerCase()              // '모두 hello! '
  .replaceAll(rpFrom, rpTo)   // '모두 bye! '
  .toUpperCase()              // '모두 BYE! '
  .repeat(3)                  // '모두 BYE! 모두 BYE! 모두 BYE! '
  .trimEnd()                  // '모두 BYE! 모두 BYE! 모두 BYE!'
);

console.log(word); // 원본은 그대로