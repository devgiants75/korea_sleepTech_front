import React, { useEffect, useState } from 'react';

/*
! === 부수 효과 (Side Effect) ===
: 컴포넌트의 '주요 기능(상태 관리, UI 렌더링)' 외에 발생하는 작업
EX) API 호출, 이벤트 리스너 등록, 수동 DOM 조작 등

! useEffect
: React 함수형 컴포넌트에서 부수 효과를 수행하기 위한 Hook
- 데이터 가져오기, 컴포넌트 렌더링 시 특정 작업 수행 등에 사용

? React 컴포넌트의 '라이프 사이클'
  1) 마운팅: 컴포넌트가 DOM에 처음 삽입될 때 실행
  2) 업데이트: 컴포넌트의 재렌더링 (주로 state, props의 변경에 의해 발생)
  3) 언마운팅: 컴포넌트가 DOM에서 제거될 때 실행

  useEffect & '라이프 사이클'
  : 마운팅과 업데이트에서 실행할 코드를 useEffect에서 관리
  - 의존성 배열(deps)을 사용하여 업데이트 시 동작을 제어
  
? useEffect의 기본 구조
: 1-2개의 인자가 필요

  1) 첫 번째 인자: 콜백함수(화살표 함수)
  - 부수 효과를 수행하는 함수

  2) 두 번째 인자: 의존성 배열, deps
  - 해당 배열 값이 변경될 때마다 부수 효과가 다시 실행
  cf) 빈 배열 - 컴포넌트가 마운트될 때 한 번만 실행
      +) 의존성 배열에 값이 있더라도 마운트 시에는 반드시 실행

useEffect(() => {
  - 부수 효과 -

  ? useEffect의 정리 함수 
  : useEffect에서 함수를 return하면 해당 함수는 컴포넌트가 화면에서 사라질 때 (언마운트) 실행
  >> 정리 함수(clean-up Function)
  return () => {
  }
}, [의존성배열1, a, b, c]);

VS 이벤트리스너
  dom요소.addEventListener(이벤트, 콜백함수);
  : 이벤트가 발생하면! 콜백함수 실행!
*/ 

function UseEffect01() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('이승아');
  const [time, setTime] = useState<number>(0);

  // 부수 효과를 나타내는 콜백함수는 필수!
  // 의존성 배열의 경우 선택! >> 모든 렌더링 마다 실행!
  useEffect(() => {
    console.log(`Count: ${count}`);

    // count값의 상태가 변경될 때만! 부수효과가 실행
  }, [count]);

  useEffect(() => {
    console.log(`Name: ${name}`);
  }, [name]);

  useEffect(() => {
    // 마운트 시에만 실행 (모든 상태 변화에 반응하지 X)
    console.log('컴포넌트 렌더링');
  }, []);

  useEffect(() => {
    console.log(`==Name: ${name} / Count: ${count}==`);
  }, [name, count]);

  useEffect(() => {
    console.log('⏰ 타이머 시작');

    const timer = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('타이머 정리됨 (컴포넌트가 사라짐)');
    }
  }, []);

  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        증가
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        감소
      </button>

      <br />
      <span>{name}</span>
      {/* 
      해당 버튼의 클릭으로 컴포넌트 내의 상태 변화가 일어남 
      : useEffect의 의존성 배열에 count만 있는 부수 효과는 name의 변경에 반응하지 X
      */}
      <button onClick={() => setName(name === '이승아' ? "이도경" : "이승아")}>
        이름 변경
      </button>

      <p>시간: {time}초</p>
    </div>
  )
}

export default UseEffect01