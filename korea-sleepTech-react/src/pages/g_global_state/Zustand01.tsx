import { useAuthStore } from '@/stores/auth.store';
import React from 'react'
import { create } from 'zustand';

//! === Zustand 상태 관리 프로그램 (외부 라이브러리) ===
// : 독일어로 '상태'
// - React Hooks 기반 + 최소한의 API를 사용하여 상태를 쉽게 생성하고 접근
// - 컴포넌트 간 전역 상태를 공유하게 해주는 상태 관리 라이브러리

//? 1) Zustand 장점
// - 간결성: 최소한의 코드로 상태 관리
// - 유연성: 여러 상태 조각을 하나의 저장소에서 결합

//? 2) Zustand 사용 방법
// - 설치: npm i zustand (i: install)

// - 사용법
// : 상태를 단일 저장소인 store에 저장
// : 해당 저장소를 가져와서(import) 컴포넌트에 자동으로 업데이트 전달

//# === Zustand 예제 (폴더/파일 단위 분리 X) === //

//* 1. store 생성
// : 전역 상태가 담긴 저장소
// - 애플리케이션 상태를 저장하는 곳
// - create 함수를 사용하여 생성 (zustand 라이브러리에 포함)
// >> 애플리케이션에서 관리할 상태와 상태 업데이트 함수들이 포함

//! 저장소 타입 선언
interface CountState {
  // 객체의 속성
  count: number;

  // 객체의 메서드
  increment: () => void; // 입력값 없이 +1 증가
  decrement: () => void; // 입력값 없이 -1 감소
}

//! 저장소 생성 
// === 외부의 store 공간 ===
// : create 함수로 스토어 생성
//   >> 스토어명: use + 관리할데이터명 + Store
//      EX) useUserStore, useProductStore, useCartStore 등

// const use데이터Store = create<저장소내부타입>();

//? >> create 함수는 set 함수를 인자로 전달
//     : zustand 스토어의 상태를 업데이트 하는 데 사용

export const useCountStore = create<CountState>((set) => ({
  // 상태 변경 전 초기값 설정
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
}));

// cf) 화살표 함수에서 객체를 바로 반환하는 경우 (return 키워드 생략 시)
//     : 소괄호로 감싸서 반환
//     - 객체의 {}를 함수 블록으로 인식하고 {} 내부를 구현부로 인식

//! 외부 컴포넌트 생성
function Component() {
  const { count, increment } = useCountStore();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>증가</button>
    </div>
  )
}

function Zustand01() {
  const { count, decrement } = useCountStore();
  const { user } = useAuthStore();

  return (
    <div>
      <p>User(Zustand02): {user}</p>
      Count: {count}
      <button onClick={decrement}>감소</button>
      <Component />
    </div>
  )
}

export default Zustand01