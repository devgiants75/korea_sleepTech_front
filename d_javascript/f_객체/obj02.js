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