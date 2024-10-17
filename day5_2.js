//클래스
class YalcoChicken {
  constructor(name, no) {
    this.name = name;
    this.no = no;
  }
  introduce() {
    // 💡 메서드
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

//사용법은 생성자함수와 같음
const chain1 = new YalcoChicken("판교", 3);
const chain2 = new YalcoChicken("강남", 17);
const chain3 = new YalcoChicken("제주", 24);

//클래스와 생성자함수 차이 1.클래스는 호이스팅 되지 않음 2.클래스는 new 키워드 없이 사용시 오류

//constructor 메서드
//인스턴스 생성시 인자를 받아 프로퍼티를 초기화함
//클래스당 하나만 있을수 있음
//다른 메서드 이름을 쓸 수 없음
//생략가능

//클래스에 넣은 함수는 프로토타입으로 들어감

//필드(얼마전에 공식적으로 되었음)
// 필드값이 지정되어 있으므로 constructor 메서드 필요없음
class Slime {
  hp = 50;
  op = 4;
  attack(enemy) {
    enemy.hp -= this.op;
    this.hp += this.op / 4;
  }
}

class YalcoChicken {
  no = 0;
  menu = { 후라이드: 10000, 양념치킨: 12000 };

  constructor(name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order(name) {
    return `${this.menu[name]}원입니다.`;
  }
}
const chain0 = new YalcoChicken("(미정)");
console.log(chain0, chain0.introduce());

const chain4 = new YalcoChicken("판교", 3);
console.log(chain1, chain1.introduce());

chain4.menu["양념치킨"] = 13000; //판교점의 가격만 13000원으로 올림

console.log(chain0.order("양념치킨"), chain1.order("양념치킨"));

//정적 필드

class YalcoChicken {
  // 정적 변수와 메서드
  static brand = "얄코치킨";
  static contact() {
    return `${this.brand}입니다. 무엇을 도와드릴까요?`;
  }

  constructor(name, no) {
    this.name = name;
    this.no = no;
  }
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

console.log(YalcoChicken);
console.log(YalcoChicken.contact());

//클래스도 함수 typeof 하면 function 반환