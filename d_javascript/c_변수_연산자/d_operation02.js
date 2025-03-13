// d_operation02.js

//! 4. 논리 연산자
// : 논리값을 연산(boolean값을 반환)

// 1) AND 연산자(&&) - 논리곱
// : false가 하나라도! 있을 경우 무조건! false

// true && true: true
// true && true && false && true && true: false

//? cf) 자바스크립트 '단락 평가'
// : 논리 연산에서 첫 번째 피연산자 값만으로 해당 식의 결과가 확실할 때, 두 번째 값은 평가하지 않는 것

// 2) OR 연산자(||) - 논리합
// : true가 하나라도! 있을 경우 무조건! true

// true || true: true
// false || false || true || false || false: true

// 3) NOT 연산자(!) - 부정논리
// : boolean 자료형의 데이터값 전환(!변수명)

let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true

console.log(!bool1); // falsee
console.log(!bool2); // true

//! 5. 삼항(조건) 연산자
// : 유일하게 피연산자를 3개 가지는 조건 연산자 (기호가 2개)

//? 기본 구조
// 표현식 ? 참일 경우 반환값1 : 거짓일 경우 반환값2

let age = 21;
let beverage = age >= 20 ? 'Beer' : 'Juice';
console.log(beverage); // Beer

let isMember = false;
let discount = isMember ? '10%' : '5%';
console.log(discount);

// +) 삼항연산자의 중첩
//    : 조건의 계산 내에서 또 다른 조건의 계산이 이루어짐

age = 19;
let identity = age >= 20 ? '성인' : (age <= 13 ? '어린이' : '청소년');
console.log(identity); // 청소년

//? 덧셈 연산자
// - 타입이 모두 숫자: 산술 연산의 덧셈
// - 타입이 하나라도 문자열 일 경우: 문자열의 결합
let name1 = '이';
let name2 = '승아';
console.log(name1 + name2); // 이승아

//? typeof 연산자
// : 데이터에 대한 타입이 문자열로 반환
// >> number, string, boolean, undefined, object, function 등

console.log(typeof 123); // number
console.log(typeof '123'); // string

// +) 초기 JS 설계 결함으로 null 데이터의 타입은 object 반환
console.log(typeof null); // object