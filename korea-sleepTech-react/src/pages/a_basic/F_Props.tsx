import React from 'react'
import { Wrapper } from './G_Props';

/*
  컴포넌트(Component): 리액트의 구성요소(UI)
  Props: 컴포넌트의 속성(Properties의 약어)

  ! Props 전달
  : 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 전달할 때 사용
  - props로 전달된 데이터는 자식 컴포넌트에서 readonly! 처럼 사용
    (변경 불가 데이터)
*/ 

type ChildPropsType = {
  name: string;
}

function ChildComponent(props: ChildPropsType) {
  // props.name = '이도경';
  // : props는 readonly 속성이기 때문에 값의 재할당이 불가!

  return(
    <>
      안녕하세요 {props.name}님
    </>
  )
}

type MultiPropsType = {
  name?: string;
  colorProps: string;
}

function MultiProps({ name = '김명진', colorProps }: MultiPropsType) {
  // 여러 개의 props가 전달되더라도 하나의 객체로 전달받음
  // : 위 처럼 객체나 배열 내부의 요소들을 한번 각각의 요소 변수에 할당하는
  //!   , 구조 분해 할당(비구조화 할당) 가능
  
  //! 기본 속성값 지정
  // : 컴포넌트 호출 시 props를 전달하지 않을 경우 지정될 기본값
  // - 매개변수에서 지정
  // - 속성명 = '기본값'
  return(
    <div style={{ color: colorProps }}>반갑습니다. {name}님</div>
  )
}

function F_Props() {
  const props = {
    colorProps: 'orange',
    name: '이지희',
  }
  return (
    <div>
      {/* 
        Props는 부모 컴포넌트 내에서 자식 컴포넌트에게 '속성'으로 값을 전달
        >> 전달된 데이터는 컴포넌트의 '매개변수'로 받아 사용

        !! props의 경우 자식 컴포넌트에 객체 형식으로 데이터를 전달
        >> 자식 컴포넌트의 매개변수 지정 시 타입을 객체 별칭으로 지정
      */}
      <Wrapper>
        <ChildComponent name='이승아' />
      </Wrapper>

      {/* 여러 개의 props 전달 */}
      <MultiProps name='이도경' colorProps='lightblue' />
      <MultiProps colorProps='lightcoral' />

      {/* ...props가 구조 분해 할당을 사용하여 각각의 속성명을 찾아감 */}
      <MultiProps {...props} />
    </div>
  )
}

export default F_Props