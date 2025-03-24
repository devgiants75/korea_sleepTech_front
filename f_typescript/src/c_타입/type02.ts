// type02.ts
export const tmp = '';

//! 타입스크립트 객체 타입

//? 1. 객체 타입 지정(명시)
// : {} 중괄호를 사용하여 표현
// - 각 데이터별(속성별) 타입 명시의 구분은 세미콜론 사용 권장

const user: {
  name: string;
  height: number;
  favorite: any[];
  age: number; // 타입에서 명시한 속성은 반드시 객체 내부에 존재!
} = {
  // 객체 내부에서 각 속성의 구분 ,(콤마)로 표시
  name: '이승아',
  height: 169,
  favorite: [1, '운동', false, null, undefined],
  age: 29,
  // nickname: '개구리' - 타입 명시하지않은 속성은 정의할 수 X
}

//! 객체의 선택 속성(선택적 프로퍼티)
// : 속성명 뒤에 물음표(?)를 붙여 해당 속성이 존재하지 않을 수도 있음을 표현
const ldk: {
  name: string;
  height?: number;
} = {
  name: '이도경',
  // height: 157 - 생략해도 오류 X (선택적 프로퍼티)
};

//! 읽기 전용 속성
// : 속성명 앞에 readonly 키워드를 사용하여 해당 속성의 재할당을 금지!
// - 해당 키워드가 붙은 속성은 const와 유사(상수)
const readlonyUser: {
  readonly name: string;
  readonly age: number;
  address?: string;
} = {
  name: '이승아',
  age: 30,
  // address: '부산시'
};

// 객체의 속성값 수정
// 객체.속성 = 재할당값;
// readlonyUser.name = '이도경';
// readlonyUser.age = 20; // 읽기 전용 속성이므로 'age'에 할당할 수 없습니다.
readlonyUser.address = '대전시';

console.log(readlonyUser); // { name: '이승아', age: 30, address: '대전시' }