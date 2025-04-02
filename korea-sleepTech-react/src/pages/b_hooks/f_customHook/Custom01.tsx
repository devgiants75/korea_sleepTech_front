import React from 'react'
import { useCounter } from './useCounter';

/*
! == 커스텀 훅(Custom Hook) ==
: 리액트의 기본 Hook을 사용하여 작성되는 재사용 가능한 로직의 모음
>> useState, useEffect, useRef 등

? Custom Hook 생성 방법
- use로 시작하는 함수 정의 (use + 기능을 설명하는 키워드)
  : 해당 함수 내부에서 다른 Hook(리액트 함수형 컴포넌트)을 호출
- 결과와 기능을 반환
*/

function Custom01() {
  // const [state, setState] = useState<stateType>();
  const { count, increment, decrement, reset } = useCounter<number>(0);

  return (
    <div>
      {count}
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>초기화</button>
    </div>
  )
}

export default Custom01