// generic01.ts
export const tmp = '';

//! === 제네릭(Generic, 일반적인) ===//

// 1. 제네릭 정의
// : 재사용 가능한 컴포넌트(코드 단위)를 만드는 데 사용
// - 데이터 타입을 미리 지정하지 X
// - 사용 시점에 데이터 타입을 지정 O

// 2. 제네릭 필요성
// - 코드 중복 줄임, 타입 안정성을 보장('컴파일'시점에 타입을 체크)

// 3. 제네릭 기본 문법
// : 사용할 컴포넌트(변수, 함수, 클래스 등)의 이름 뒤에 <>(꺽쇠괄호)안에 '타입 변수'를 지정

// cf) 타입 변수
// : 임의의 키워드 사용 
// - 일반적으로 대문자 알파벳 하나를 사용 (T: Type, U, V ,,,)

function generic<T>(arg: T): T {
  return arg;
}

generic<string>('안녕');
generic<number>(123);

console.log(generic<string>('hello')); // hello
console.log(generic<number>(345)); // 345

// +) 하나의 컴포넌트에 여러 개의 타입 변수 지정
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

let pairOutput1 = pair<string, number>('안녕', 123);
let pairOutput2 = pair<number, string>(123, 'hello');

//? cf) 타입 단언과 제네릭 타입을 활용
function pair2<T, U>(first: T, second: T): U {
  return [first, second] as U; // U를 T[] 타입으로 단언
}

console.log(pair2<string, string[]>('hello', 'hello')); // [ 'hello', 'hello' ]

//# 제네릭을 사용하는 컴포넌트 예시
// 1) 제네릭 함수
function genericFunc<T>(args: T[]): T[] {
  console.log(`배열의 길이: ${args.length}`);
  return args;
}

let resultFunc = genericFunc<boolean>([true, true, false]); // 배열의 길이: 3
console.log(resultFunc); // [ true, true, false ]

// 2) 제네릭 인터페이스
// : 타입 매개변수 T

interface IGeneric<T> {
  // 인터페이스(객체)의 메서드
  (key: T): T;
}

// 함수
function example<T>(arg: T): T {
  return arg;
}

let myGeneric: IGeneric<number> = example;
// 함수 example을 IGenric<number> 인터페이스에 할당!

// myGeneric: 객체
// >> example은 객체의 메서드 형태로 할당!

console.log(example(5)); // 5
console.log(myGeneric(5)); // 5

// 3) 제네릭 클래스
class GenericClass<T> {
  value: T;
  add: (x: T, y: T) => T;

  constructor(value: T, addFunc: (x: T, y: T) => T) {
    this.value = value;
    this.add = addFunc;
  }
}

let myGenericNumber = new GenericClass<number>(0, (x, y) => x + y);
console.log(myGenericNumber.add(4, 6)); // 10

//# 제네릭 함수 구현 예제
function reverseArray<T>(array: T[]): T[] {
  // 배열 메서드
  // : .reverse()
  // - 요소의 순서를 역전시키는 메서드
  let reverseArr = array.reverse();
  return reverseArr
}

let stringArr = reverseArray(['1', '2', '3']);
// let stringArr = reverseArray<string>(['1', '2', '3']);
// : 배열 안의 요소 타입으로 타입 변수값이 자동 지정

let booleanArr = reverseArray([true, true, false, true]);
console.log(booleanArr); // [ true, false, true, true ]

//# 제네릭 인터페이스 예제
interface KeyValue<K, V> {
  key: K,
  value: V
}

let keyValue1: KeyValue<string, number> = {
  key: '이승아',
  value: 123
}

let keyValue2: KeyValue<boolean, string> = {
  key: true,
  value: '이도경'
}