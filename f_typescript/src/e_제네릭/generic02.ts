// generic02.ts

//! 제네릭의 제약 조건
// : 타입 매개변수가 특정 조건을 만족해야 한다는 것을 명시
// - 제네릭 타입의 사용 범위를 제한

// function printLength<T>(arg: T): void {
//   console.log(arg.length); // 'T' 형식에 'length' 속성이 없습니다.
// }

// >>> 정해져있지 않은 T 타입에 .length 속성의 존재 유무를 확인할 수 없어 에러!
//     EX) number, boolean 타입은 해당 속성이 X

//? 제약 조건 예시
interface ILength {
  length: number;
}

// T의 타입 변수가 반드시! ILength 인터페이스를 포함하는 타입!
// : '타입변수' extends '반드시포함할타입'
// >> 타입의 검증이 타입 변수 지정 시에 결정
function constraints<T extends ILength>(arg: T): void {
  console.log(arg.length);
}

// constraints<number>(123); // 'number' 형식이 'ILength' 제약 조건을 만족하지 않습니다.
// constraints<boolean>(true); // 'boolean' 형식이 'ILength' 제약 조건을 만족하지 않습니다.
constraints<string>('안녕하세요'); // 5

console.log(constraints({
  length: 10, // 필수 속성만 명시 되어 있으면 가능 - length 속성을 반드시 포함! (구조적 타이핑)
  value: 3,
  addedOption: 'hi'
}));

//# +) 최소한의 속성을 가진 객체 찾기
// keyof 연산자
type Type = {
  name: string;
  age: number;
}

type Union = keyof Type;
// Union = "name" | "age";
// : 객체 형태의 타입에서 속성만 뽑아 유니온 타입으로 생성해주는 연산자

let keyofValue1: Union = "name";
let keyofValue2: Union = "age";

//# 조건부 타입
// : 타입 매개변수에 대한 조건 표현식을 사용
// - if문과 유사한 기능

type Check<T> = T extends string? 'String' : 'Not a String'; // 타입에 따라 리터럴 타입을 반환

type Type1 = Check<string>;
type Type2 = Check<number>;

let a: Type1 = "String";
let b: Type2 = "Not a String";

function checkType<T>(value: T): Check<T> {
  // typeof 데이터 
  // : 해당 데이터의 타입을 반환
  let result = typeof value === 'string' ? ('String' as Check<T>) : ('Not a String' as Check<T>);
  return result;
}

console.log(checkType('문자열 전달')); // String 
console.log(checkType(500)); // Not a String