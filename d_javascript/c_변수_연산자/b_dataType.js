// b_dataType.js

//# === 자료형(data type) === //
// : 기본 자료형, 참조 자료형

//! 1 기본 자료형
// : string, number, boolean, null & undefined

//* 1) string(문자열)
// : 작은 따옴표, 큰 따옴표, ``(백틱)

let str1 = 'hello';
let str2 = "hello";
let str3 = `hello`;

// +) 탬플릿 문자열: 문자열 내에 변수나 표현식을 사용할 수 있는 문자열
//                  >> 백틱(``) 사용

let name = '이승아';
console.log('안녕하세요 ' + name + '입니다.');

// ``(백틱) 안에 ${}를 사용하여 변수, 표현식 대입
console.log(`안녕하세요 ${name}입니다.`);
console.log(`3 + 5 = ${3 + 5}`);

// cf) 일반 따옴표는 줄바꿈 인식 X
// let multiple = '안녕하세요
// 만나서 반갑습니다.
// ';

let multiple = `안녕하세요
만나서 반갑습니다.
JS 수업입니다 :)`;

console.log(multiple);

//* 2) number (숫자형)
// : 정수 및 실수를 포함하는 자료형

let num = 10;
let float = 10.5;

// cf) typeof 연산자: 자료형 출력 연산자
console.log(typeof num); // number
console.log(typeof float); // number

//* 3) boolean (논리형)
// : 참(true), 거짓(false) 값만을 가지는 자료형

let bool1 = true;
let bool2 = false;

console.log(bool1); // true
console.log(typeof bool1); // boolean

console.log(bool2); // false
console.log(typeof bool2); // boolean

//* 4) null & undefined

// 4-1) null: 아무것도 없다.
//      >> 변수의 데이터가 유효하지 않는 경우

let value = null;
console.log(typeof value); // object

console.log(
  // value의 변수 타입이 object이면서 값이 존재하지 않을 경우 null
  (typeof value === 'object' && !value) ? 'null' : 'not null'
); // null

// 4-2) undefined: 정의되지 않았다.
//      >> 변수가 선언되었으나, 아직 어떠한 값도 할당되지 않을 때의 기본값

let hello;
console.log(hello); // undefined

//! === 자료형 변환 === //
// 1) 문자열 변환(String())

let num1 = 123;
let num2 = 456;

console.log(num1 + num2); // 579
console.log(String(num1) + String(num2)); // 123456

// 2) 숫자형 변환(Number())

let strNum = '123';
console.log(typeof Number(strNum)); // number

let notANumber = '이건 숫자로 변환이 가능?';
console.log(Number(notANumber)); 
// NaN: Not a Number
// - 숫자로 변환할 수 없는 값 변환을 시도한 경우

// 3) 논리형 변환(Boolean())

// false: false, 0, '', null, undefined, NaN
// true: 위의 값을 제외한 모든 데이터를 true로 간주

console.log(Boolean('hello')); // true
console.log(Boolean('')); // false

console.log(Boolean(123)); // true
console.log(Boolean(0)); // false