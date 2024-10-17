//상속
class Bird {
  wings = 2;
}
class Eagle extends Bird {
  claws = 2;
}
class Penguin extends Bird {
  swim() {
    console.log("수영중...");
  }
}
class EmperorPenguin extends Penguin {
  size = "XXXL";
}

const birdy = new Bird();
const eaglee = new Eagle();
const pengu = new Penguin();
const pengdol = new EmperorPenguin();

console.log(birdy, eaglee, pengu, pengdol);

//instanceof 객체가 해당 클래스의 객체인지 확인
for (const i of [
  ["1.", birdy instanceof Bird],
  ["2.", eaglee instanceof Bird],
  ["3.", eaglee instanceof Eagle],
  ["4.", pengdol instanceof Penguin],
  ["5.", pengdol instanceof Bird],
  ["6.", birdy instanceof Eagle],
]) {
  console.log(i[0], i[1]);
}

//오버라이딩
//자식 클래스에서 부모로부터 물려받은 속성이나 기능을 덮어씀

class Bird {
  wings = 2;
  canFly = true;
  travel() {
    console.log("비행중...");
  }
}
class Eagle extends Bird {
  claws = 2;
}
class Penguin extends Bird {
  canFly = false;
  travel() {
    console.log("수영중...");
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

class ConceptYalcoChicken extends YalcoChicken {
  #word = "";
  constructor(name, no, word) {
    super(name, no);//부모생성자 사용
    this.#word = word;
  }
  introWithConcept() {
    return super.introduce() + " " + this.#word;//부모 메서드 사용
  }
  order(name) {
    return super.order(name) + " " + this.#word;//부모 메서드 사용
  }
}

const pikaChain = new ConceptYalcoChicken("도봉", 50, "피카피카~");

//정적메서드 오버라이딩 (자바에서는 불가능)
class YalcoChicken {
    static brand = '얄코치킨';
    static contact () {
      console.log(`${this.brand}입니다. 무엇을 도와드릴까요?`);
    }
  }
  
  class ConceptYalcoChicken extends YalcoChicken {
    static contact () {
      super.contact();
      console.log('컨셉 가맹문의는 홈페이지를 참조하세요.');
    }
  }
  
  ConceptYalcoChicken.contact();