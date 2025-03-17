// obj03.js

//! 자바스크립트 객체 '프로토타입'
// : 객체의 원형(프로토타입)을 사용하여 새로운 객체를 생성
// > 객체의 속성과 메서드 재사용 가능

// cf) 프로토 타입: 시제품
// >> 모든 객체들이 메서드와 속성을 상속받기 위한 템플릿(틀)으로써 프로토타입 객체를 가짐

//? 1. 생성자 함수
// : new 키워드를 사용하여 함수 호출
// - 관례적으로 UpperCamelCase 사용

function Person(firstName, lastName, age, gender) {
  this.name = {
    first: firstName,
    last: lastName
  };

  this.age = age;
  this.gender = gender;

  this.greeting = function() {
    console.log(`Hello, ${this.name.last}`);
  }
}

let person1 = new Person('승아', '이', 30, 'female');
person1.greeting(); // Hello, 이

//? 2. 클래스
// : 새로운 객체를 생성하는 템플릿 역할

// - 생성자: 클래스에서 객체를 생성하고 초기화하기 위한 '특별한 메서드'
//      >> new 키워드로 객체 생성 시 자동 호출
//      +) 각 클래스는 하나의 constructor(생성자)만을 가짐

class UpperCamelCase {

}

class Human {
  // 속성: 생성자 함수 정의와 동일
  name;
  age;
  job;

  // 생성자: constructor() 메서드 정의
  //  + 생략 시 빈 생성자가 자동 정의
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  // JS의 클래스 메서드
  // : 클래스를 기반으로 만들어진 객체가 공통적으로 가지는 기능 정의
  // - 클래스 내부에서는 function 키워드 사용 X
  greet() {
    console.log(`안녕하세요 ${this.name}님`);
  }
}

let human1 = new Human('이지희', 20, '대학생');
let human2 = new Human('이지훈', 17, '고등학생');

human1.greet(); // 안녕하세요 이지희님
human2.greet(); // 안녕하세요 이지훈님