// 생성자 함수
function YalcoChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  };
}

// 객체 생성
const chain1 = new YalcoChicken("판교", 3);
const chain2 = new YalcoChicken("강남", 17);
const chain3 = new YalcoChicken("제주", 24);

console.log(YalcoChicken("홍대", 30)); //new를 붙이지 않으면 undefined만 반환

console.log(new YalcoChicken("건대", 40)); //올바른 생성자 함수 호출(new)

// 본사에서 새 업무(메서드):introEng를 추가
// 프로토타입: 본사에서 배포하는 메뉴얼이라고 이해
YalcoChicken.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};

function YalcoChicken(name, no) {
  //생성자 함수
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  };
}

function createYalcoChicken(name, no) {
  //객체 직접 반환 함수
  return {
    name,
    no,
    introduce() {
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    },
  };
}

// 객체 리터럴
const chain4 = {
  name: "판교",
  no: 3,
  introduce: function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  },
};

// 객체 반환 함수
const chain5 = createYalcoChicken("강남", 17);

// 생성자 함수
const chain6 = new YalcoChicken("제주", 24);

//instanceof 해당 객체가 생성자 함수에 의해 만들어졌는지 판단
console.log(chain4 instanceof YalcoChicken); // ->false
console.log(chain6 instanceof YalcoChicken); // ->true

function YalcoChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  };
}

// 본사의 정보와 업무
YalcoChicken.brand = "얄코치킨";
YalcoChicken.contact = function () {
  return `${this.brand}입니다. 무엇을 도와드릴까요?`;
};

const chain7 = new YalcoChicken("판교", 3);

console.log(YalcoChicken.contact()); //본사에서 할수있는 메서드
console.log(chain7.contact()); //chain7 에는 contact라는 메서드가 없으므로 error

//new 실수 방지
function YalcoChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  };

  if (!new.target) {
    // 이 부분을 지우고 다시 해 볼 것
    return new YalcoChicken(name, no);
  }
}

const chain8 = new YalcoChicken("판교", 3);
const chain9 = YalcoChicken("강남", 17);

console.log(chain1, chain2);
