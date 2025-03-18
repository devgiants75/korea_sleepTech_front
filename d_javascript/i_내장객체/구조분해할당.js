// 구조분해할당.js

//! 구조분해할당(다중 할당)
// : 배열과 객체의 값을 한 번에 여러 개의 변수에 할당

//? 구조분해할당의 형태

// [식별자, 식별자, ...] = 배열;
// {속성명, 속성명, ...} = 객체;

// cf) 식별자: 변수를 나열한 형태

let array = [1, 2, 3];
let [a, b] = array;

// let a = array[0];
// let b = array[1]; - 재선언 불가 오류

console.log(a);
console.log(b);

// >> 배열의 크기는 같을 필요 X - 넘치는 값은 생략

const arrayNum = [1, 2, 3, 4, 5];
const [aa, bb, cc] = arrayNum;

console.log(aa, bb, cc); // 1 2 3

// =================== //
// 객체 생성
const bookObject = {
  name: 'JS 공부하기',
  price: 25000,
  publisher: '코리아IT'
}

//? 객체는 배열과 달리 순서 상관 X
// : 각각 연결된 속성명으로 값이 자동 전달
const { publisher, name, price, author } = bookObject;

console.log(publisher, name, price, author); // 코리아IT JS 공부하기 25000 undefined

// const publisher = bookObject.publisher; - 재선언 X 오류

// cf) 속성명을 변수로 지정하지 않고 새로운 식별자 사용
const { aaa=name, bbb=price } = bookObject; // 식별자=속성명

console.log(aaa, bbb); // JS 공부하기 25000