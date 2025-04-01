import React, { useRef, useState } from 'react'

//! === useRef ===
// : use + reference(참조)
// : 변경 가능한 참조 객체를 생성할 수 있는 기능 (훅)

//? 사용 목적
// - DOM 요소에 직접적으로 접근하고 조작
// - 컴포넌트가 재렌더링될 때도 값이 유지되는 변수 관리
// - 이전 상태를 기억 (렌더링 사이에 지속되는 값 유지)

//? 기본 구조
// const refContainer = useRef(initialValue);

// 1) refContainer
// : useRef는 객체를 반환 //? cf) useState는 배열 반환
//   - 해당 객체는 current 속성을 포함
//   - 컴포넌트의 재렌더링과 무관하게 값이 유지
// : refContainer.current 
//   - 저장된 현재 값에 접근

// 2) initialValue
// : 참조 객체의 초기값

function UseRef01() {
  const [text, setText] = useState<string>('');

  //? useRef VS 일반 변수(let)
  // 1) useRef: 리렌더링 사이에 값이 유지
  // - 값을 바꿔도 컴포넌트를 리렌더링하지 않음
  // - 값은 항상 최신값으로 유지 (.current 값을 계속 업데이트)
  const lengthRef = useRef(0);

  // 2) 일반 변수
  // : 함수형 컴포넌트는 매번 리렌더링 시 마다 함수 전체가 다시 실행(UseRef01)
  // - let lengthData에 0의 값이 매번 다시 초기화!
  let lengthData = 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    lengthRef.current = e.target.value.length;
    lengthData = e.target.value.length;
    console.log(lengthData);
  }

  return (
    <div>
      <h4>현재 텍스트 길이 측정 예제</h4>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>Text 길이(참조): {lengthRef.current}</p>
      <p>Text 길이(변수): {lengthData}</p>
    </div>
  )
}

export default UseRef01