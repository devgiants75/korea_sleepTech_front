// type06.ts
export const tmp = '';

//! === 리터럴(literal, 문자 그대로의 ) 타입 ===
// : 특정 '값'만을 가질 수 있는 타입을 정의할 때 사용
// - 특정 '값'으로 타입을 제한

//? 리터럴 타입의 종류
// 1) 해당 값만을 가지는 상수(const)
let str1 = '안녕하세요'; // 문자열
str1 = 'hello';
str1 = '곤니치와';

const str2 = '반갑습니다.'; // "반갑습니다." 타입
// str2 = 'h1';
// str2 = '니하오'; - 리터럴 "반갑습니다" 타입

// 2) 해당 값을 타입으로 지정한 변수
let num1 = 123; // 숫자형
num1 = 234;
num1 = 345;

let num2: 123 = 123; // - 리터럴 123 타입
// num2 = 234;
// num2 = 345;

let bool: true = true; // - 리터럴 true 타입
// bool = false;

// >> 다른 값을 할당하려고 하면 타입 에러가 발생

//? 리터럴 타입 사용 예시
// : type 키워드(타입 별칭)와 함께 사용
// - 유니언 타입과 함께 사용하여 다양한 값을 표현함과 동시에 제한 가능
//   >> 변수 혹은 매개변수가 '특정 값' 들 '중' 하나만 가질 수 있도록 제한

// 1) 변수 사용
type Directions = 'up' | 'down' | 'left' | 'right';

let moveUp: Directions;
moveUp = 'up';
// moveUp = '위';

// 2) 매개변수 사용
function setAlignment(align: 'left' | 'center' | 'right') {
  // 함수 내용
  // let container = document.querySelector('#container');
  // container.style.textAlign = align;
}

setAlignment('center');

// 3) 슬립테크반 학생 관리 시스템
type Students = '윤영서' | '문창배' | '전창현' | '고혁재';
let student: Students;

function attendanceFunc(student: Students) {
  console.log(`${student}가 출석하였습니다.`);
}

// attendanceFunc('이승아');
attendanceFunc('고혁재');

//? cf) 리터럴 타입을 활용한 유니언 타입 사용 시 여러 타입의 데이터 혼합 가능
type mixedType1 = 'yes' | 'no' | 1 | 2 | 3;
type mixedType2 = [1, 2] | { id: string; password: string; };

//! 객체 리터럴 타입
// : 실제 객체 데이터 정의
type UserType = {
  name: '이승아',
  height: 169;
}

let user: UserType = {
  name: '이승아',
  // height: 168
  height: 169
}

// user.name = '이도경';

//# +) 객체의 구조적 타이핑(덕 타이핑)
// : 객체의 타입을 실제 값보다는 그 구조나 멤버에 의해 결정하는 방식
// - 객체의 형태가 같다면, 같은 타입으로 간주

type Person = {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Name: ${person.name}, age: ${person.age}`);
}

// Person 타입이 명시적으로 구현되지 않은 객체 생성
const p1 = {
  name: '이승아',
  // age: 28
}

const p2 = {
  name: '이도경',
  age: 29,
  hobby: '배구보기'
}

const p3 = {
  name: '조민지',
  age: 25
}

// greet(p1); - Person 타입 속성 구조와 일치하지 않아 Person으로 취급되지 않음

greet(p2); // 구조적 타이핑에 의해 Person 취급 (hobby 속성은 무시)
greet(p3); // Person과 구조가 일치하기 때문에 Person 취급

//# +) 중첩된 객체 타입 정의
type Address = {
  street: string;
  readonly city: string; // 읽기 전용 속성
  zipCode?: string; // 선택적 프로퍼티(옵셔널)
}

type UserProfile = {
  username: string;
  email: string;
  address: Address; // 타입 객체의 구조를 가짐
}

let userProfile: UserProfile = {
  username: '오선우',
  email: 'qwe123',
  address: {
    street: '123 St',
    city: 'Busan'
  }
}

// userProfile.address.city = 'Daejeon'; // 읽기 전용 속성이므로 'city'에 할당할 수 없습니다.
userProfile.address.zipCode = '중앙대로';

//# +) 객체의 인덱스 서명
// : 객체의 모든 속성에 대해 타입을 정의하지 않고
//   , 키와 값의 타입만 정의하여 구조를 유연하게 적용하는 방법

type UserDataType = {
  //? 일반적인 객체 속성 타입 명시
  name: string; // 속성명: 속성타입; - 속성명 명시!

  //? 인덱스 서명(signature, 시그니처)
  // [propertyName: indexType]: valueType;
  // 키의 타입 명시와 값의 타입 명시를 미리 지정
  [key: string]: string | number | boolean;

  // cf) 키(key)는 string 사용 권장
  //     값(value)는 어떤 타입이든 가능
}

let userData: UserDataType = {
  name: '이승아',

  height: '123',
  age: 29,
  isStudent: false,
  // hobby: ['exercise', 'reading'] 
  // >> 필요한 형식은 이 인덱스 시그니처에서 가져옵니다. - 해당 인덱스 서명에 존재하지 않는 타입의 값
}

userData.email = 'devgiants75';
// userData.address = { city: 'Busan' };