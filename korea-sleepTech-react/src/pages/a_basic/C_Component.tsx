// C_Component.tsx
import React from 'react';
import dog from '@/assets/images/dog.jpg';

/*
! 컴포넌트(Component)
: 사용자 인터페이스(UI)를 구축하는 기본 요소 단위

? 컴포넌트 사용 방법
1) 컴포넌트 내보내기(export, export default)

2) 컴포넌트 가져오기
: 불러오는 환경에서 경로를 지정
- Vite React의 경우 상대경로, 절대경로 모두 사용 가능
- @(기본 URL 설정)를 사용한 절대 경로 사용을 권장!
  >> vite.config.ts와 tsconfig.json 파일에 각각 경로 지정 필수!!

  (1) export 
    : 컴포넌트명 변경 불가능
  (2) export default
    : 컴포넌트명 변경 가능

? 특징
: 파일명이 반드시! 대문자로 시작 (UpperCamelCase 사용)
  EX) MainContainer, NavBar 등
  - JS의 일반 함수 형태와 구분(일반 함수 - lowerCamelCase 사용)

: rfc, rfce 스니팻 사용 시 
  - 파일명이 함수명으로 구현, 해당 함수는 컴포넌트로 인식
  - 파일명을 대문자로 작성 권장

  cf) index.tsx 파일명: 폴더명을 활용한 import 위함
      >> 내부의 함수명은 대문자로 수정: 외부에서 인식 가능한 컴포넌트가 생성
*/

//! 컴포넌트 생성
// Img 컴포넌트
export function Img() {
  //? HTML 코드 내에서 JS 문법 사용 시 
  // : 중괄호 내에 작성

  //? JS 코드 내에서 HTML 코드 작성 시
  // : 소괄호 내에 작성
  
  // tsx의 '함수형' 컴포넌트는 return 시 HTML을 반환
  return (
    <div>
      {/* 
      JSX(TSX) 문법 내에서는 HTML 요소의 대소문자를 구분! 
      : 반드시 소문자 작성!
      */}
      <img src={dog} alt="강아지" width={300} />
    </div>
  )
}

function imgFunc() {
  // ts의 '일반 함수' (컴포넌트 X)
  return 
}

function C_Component() {
  // JSX 컴포넌트 사용 시
  // : 마크업(태그)이 한 개인 경우 () 소괄호 생략 가능
  // - 여러 개일 경우 반드시! 소괄호로 감싸서 사용
  return (
    <div>
      <p>컴포넌트의 시작</p>
      {/* 소문자로 시작하는 요소: HTML 태그 */}
      <img src={dog} alt="img태그를 사용한 강아지" width={100} />

      {/* 대문자로 시작하는 요소: React 컴포넌트 */}
      <Img />
    </div>
  )
}

export default C_Component