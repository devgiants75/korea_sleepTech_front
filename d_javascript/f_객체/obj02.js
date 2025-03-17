// obj02.js

//! '객체' 멤버 접근 방법
// cf) 멤버: 속성, 메서드

// : 객체는 각 요소값에 대해 '키'를 통해 접근

// 1) 점표기법
// - 객체명.속성명
// - 객체명.메서드명() 

// 2) 대괄호표기법
// - 객체명[속성명]
// - 객체명[메서드명]

let dog = {
  name: {
    last: 'choco',
    first: 'coco'
  },
  age: 3,
  color: 'white',
  favoriteToy: ['곰인형', '탱탱볼'],

  bark: function() {
    console.log('멍멍');
  },
  greet: function() {
    console.log(`Hello, ${this.name}`);
    console.log(`Hello, ${this.name.last}`);
  }
}

// 1) 점 표기법
console.log(dog.age); // 3
console.log(dog.name.first); // coco
console.log(dog.favoriteToy[1]); // 탱탱볼

dog.greet();
// Hello, [object Object]
// Hello, choco

// 2) 대괄호 표기법
// 객체명['키']: 키값을 문자열로 전달
console.log(dog['age']); // 3

// + 객체 프로퍼티(속성) 추가
// : 객체명.프로퍼티명 = 값(데이터);
dog.speed = 10;
console.log(dog['speed']); // 10

//! JS의 this 키워드 //
console.log('=== this ===');

// this: 지금 동작(호출)하고 있는 코드를 내포하고 있는 객체를 가리킴

//? 1. 전역 컨텍스트

// cf) 전역 컨텍스트(global context)
// : 파일 전체에서 가장 바깥쪽에 있는 상태
// : 전역 실행 상태

console.log(this); // {}: 해당 파일의 전역 스코프(전역 상태)

let num = 1;
const PI = 3.14;
function add(a, b) {
  return a + b;
}

// - Node.js에서는 global(전역) 객체
// - 브라우저 환경에서는 window 객체

//? 함수 컨텍스트: 함수 내부의 this

// 1) 일반 함수의 this
// : 전역 객체를 의미 (전역 컨텍스트와 동일)
function showThis() {
  console.log(this);
}

showThis(); // <ref *1> Object [global]

// 2) 객체의 메서드 안의 this
// : 객체의 변수에 할당되는 함수
// - 메서드 호출 시 this는 해당 메서드를 호출한 객체에 바인딩(bind: 묶다, 고정하다)

const myObject = {
  name: 'object',
  showThis: function() {
    console.log(this);
  }
}

myObject.showThis(); 
// { name: 'object', showThis: [Function: showThis] }
// >> myObject 즉, 메서드를 호출한 객체 그 자체가 출력

// 3) 생성자 함수와 this

// cf) 리터럴 객체 사용 시: this값 고정
//    VS 생성자 함수 사용 시: this값은 현재의 객체에 바인딩 (어떤 객체를 호출하느냐에 따라 달라짐)

function Person(name) {
  // this.name: 객체의 변수
  // name(우항): 매개변수로 전달받는 실제 데이터값
  this.name = name;
}

const person1 = new Person('이승아'); // this.name = '이승아'
const person2 = new Person('이도경'); // this.name = '이도경'

console.log(person1.name); 
console.log(person2.name); 

// 4) 화살표 함수와 this
const arrowObject = {
  name: 'object',
  showThis: () => {
    // '화살표 함수가 정의된 객체'의 생성 스코프를 this가 가져옴
    console.log(this);
  }
}

arrowObject.showThis(); // {}: global 전역 객체

//! 객체 내부의 this
// - 선언적 함수, 함수 표현식 VS 화살표 함수의 this 바인딩이 다름
// >> 현재의 객체값을 활용하기 위함이기 때문에 선언적 함수, 함수 표현식 사용 권장