// useInput.ts

import { useState } from "react";

//! useInput
// : input 창에 입력되는 값을 저장하고 UI의 변경 상태에 따라 관리
// - 여러 개의 input 창을 하나의 훅으로 관리

export function useInput(initialValue: string) {
  // useInput에 대한 호출 마다 새로운 데이터가 상태 관리
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue(initialValue);
  };

  return { 
    // 현재의 상태 값
    value, 
    // 초기화 함수
    handleReset, 

    // 바인딩 값: UI에 직접적으로 적용될 속성과 함수를 정의
    // <input type="text" value={입력받는 데이터} onChange={value값을 업데이트하는 이벤트 핸들러} />
    bind: { 
      // 변수명 전달은 객체 속성에서
      // 변수명이 key로, 변수의 데이터가 value로 전달
      value, 
      
      // key: value
      onChange: handleValueChange 
    } 
  };
}
