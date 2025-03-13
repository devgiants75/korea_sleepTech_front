// c_operaion01.js

//# === 연산자(Opertaion) === //
// : 수학적 계산을 위한 코드 (산술, 할당, 비교, 논리)

//! 산술 연산자
// 사칙연산
// ++, --, %(나눗셈-나머지)

let x = 10;
let y = 3;
console.log('==산술연산자==');
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y); // 나눈 결과값: 몫 + 나머지
console.log(x % y); // 나눈 나머지값

// cf) 증감연산자: 수를 1씩 증가 또는 감소
//    >> 1항 연산식

x = 10
console.log(x++); // 10
console.log(++x); // 12
console.log(x--); // 12
console.log(--x); // 10

//! 2. 할당(대입) 연산자
// =(할당), +=, -=, *=, /=, %=

let a = 10;
a += 5; // 15
a -= 2; // 13
a *= 3; // 39
a /= 4; // 9.75
console.log(a);

//! 3. 비교 연산자
// : 결과를 boolean값으로 반환 (상대적인 크기를 비교)

// 부등호: >, <, >=, <=
// 동등, 부등: ==, !=
// 일치, 불일치: ===, !==

let value1 = 10; // number
let value2 = '10'; // string

//? cf) 동등(부등) VS 일치(불일치)
// 1) 동등, 부등
//    : 값의 동일성을 판단
//    - 데이터 유형은 고려하지 X
console.log(value1 == value2); // true
console.log(value1 != value2); // false

// 2) 일치, 불일치*****
//    : 엄격하게 값과 데이터 유형의 완전한 동일성을 판단
console.log(value1 === value2); // false
console.log(value1 !== value2); // true

// cf) 문자열 비교 연산자: 정렬(기본값 - 오름차순)
//    >> a ~ z까지 뒤로 갈수록 큰값
let str1 = 'abc';
let str2 = 'bcd';

console.log(str1 < str2); // true
console.log(str1 === str2); // false
console.log(str1 > str2); // false