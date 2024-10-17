//객체의 스프레드와 디스트럭쳐링

//스프레드
const class1 = {
    x: 1, y: 'A', z: true
  };
  
  const class2 = { ...class1 };
  
  // 아래의 참조복사 코드와 다름!
  // const class2 = class1;
  
  console.log(class2);
{
  const class1 = {
    a: 1, b: 'A', c: true
  };
  const class2 = {
    d: { x: 10, y: 100 }, e: [1, 2, 3]
  };
  const class3 = {
    ...class1, z: 0
  }
  const class4 = {
    ...class2, ...class3, ...class2.d
  }
}

//중복되는 프로퍼티는 뒤의 것이 덮어씀
const class5 = {
    ...{ a: 1, b: 2 },
    ...{ b: 3, c: 4, d: 5 },
    ...{ c: 6, d: 7, e: 8 }
  }
  
  console.log(class5);

  const class10 = {
    x: 1,
    y: { a: 2 },
    z: [3, 4]
  };
  
  const class20 = { ...class1 };
  class10.x++; //원시타입 이므로 class1의 x만 1증가
  class10.y.a++; //참조 이므로 class10,20둘다 바뀜
  class10.z[0]++; //참조 이므로 class10,20둘다 바뀜

  //원시값만 있는 객체만 값에 의한 복사 - 얕은 복사 
  //스프레드 : 얕은 복사

//디스트럭쳐링

//기존코드
const obj1 = {
    x: 1, y: 2, z: 3
  };
  
  const x = obj1.x;
  const y = obj1.y;
  const z = obj1.z;
  
  console.log(x, y, z);

{
const obj2 ={
    x:1,y:2,z:3
};
    const {x,y,z} = obj2//디스트럭쳐링으로 간략화
}
    console.log(x,y,z);

//일부만 가져오는 것도 가능

// const {x,y} =obj2;


// 인자를 하나의 객체로 묶어 받음 
function introduce(person) {
    console.log(`제 이름은 ${person.name}, `
      + `나이는 ${person.age}세구요. `
      + `직업은 ${person.job}, `
      + `${person.married ? '기혼' : '미혼'}입니다.`
    )
  }
  
  // 가독성 좋음, 프로퍼티명만 제대로 입력하면 순서 무관
  const person1 = {
    job: '개발자',
    age: 28,
    married: false,
    name: '김철수',
    blood: 'O' // 추가 인자 무관
  };
  
  introduce(person1);

// 디스트럭쳐링 (적절히 활용)
function introduce({age, married, job, name}) {
    // 순서 무관
    // 이 프로퍼티들을 갖는 객체를 인자로 받겠다는 의도 드러냄
  
    console.log(`제 이름은 ${name}, `
      + `나이는 ${age}세구요. `
      + `직업은 ${job}, `
      + `${married ? '기혼' : '미혼'}입니다.`
    )
  }
  
  const person2 = {
    job: '개발자',
    age: 28,
    married: false,
    name: '김철수',
    blood: 'O'
  };
  
  introduce(person2);
