//접근자 프로퍼티
//getter, setter 함수라고도 부름 스스로는 값을 갖지 않음 - 다른 프로퍼티의 값을 읽거나 저장할 때 사용
const person1 = {
  age: 17,

  get koreanAge() {
    return this.age + 1;
  },

  set koreanAge(krAge) {
    this.age = krAge - 1;
  },
};

console.log(person1, person1.koreanAge);

class YalcoChicken {
  constructor(name, no) {
    this.name = name;
    this.no = no;
  }
  get chainTitle() {
    return `${this.no}호 ${this.name}점`;
  }
  set chainNo(chainNo) {
    if (typeof chainNo !== "number") return;
    if (chainNo <= 0) return;
    this.no = chainNo;
  }
}

const chain1 = new YalcoChicken("판교", 3);
console.log(chain1.chainTitle);

//getter :반드시 값을 반환해야함 ,특정 프로퍼티를 원하는 방식으로 가공하여 내보낼 때 사용
//setter :하나의 인자를 받음 ,특정 프로퍼티에 값이 저장되는 방식을 조작하거나 제한하는데 사용

class YalcoChicken {
  constructor(name, no) {
    this.name = name;
    this.no = no;
  }
  get no() {
    return this._no + "호점";
  }
  set no(no) {
    this._no = no;
  }
}

const chain2 = new YalcoChicken("판교", 3);

//private 필드를 통한 은닉 #을 붙임
//private는 해당 클래스 외부에서는 접근불가

class Employee {
  #name = "";
  #age = 0;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
}

const emp1 = new Employee("김복동", 32);

class Employee {
  #name = "";
  #age = 0;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  get name() {
    // [n]: n + 1 번째 글자를 반환
    return this.#name[0] + "모씨";
  }
  get age() {
    return this.#age - (this.#age % 10) + "대";
  }
  set age(age) {
    if (typeof age === "number" && age > 0) {
      this.#age = age;
    }
  }
  getOlder(years) {
    this.#age += years;
  }
}

const emp2 = new Employee("김복동", 22);
