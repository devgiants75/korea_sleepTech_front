/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react'

//! === Emotion ===
// : CSS-in-JS 라이브러리
// - JS, TS 파일 내에서 직접 스타일을 정의하고 컴포넌트에 적용

//? 장점
// : 컴포넌트 기반 스타일링
// : 조건부 스타일링 (props 기반)
// : ThemeProvider 지원 (전역 테마)

//? 설치 명령어 (별도 타입 설치 필요 X: 기본 타입 지원!)
// : npm install @emotion/react @emotion/styled

// 1) @emotion/react
// : css 함수로 스타일 정의 후 css={} 속성으로 적용

// - 스타일 객체를 변수로 저장하고 재사용 가능 + className 없이도 스타일 적용 가능
const boxStyle = css`
  width: 300px;
  height: 300px;
  background-color: orange;
`;

// 2) @emotion/styled
// : styled-components 처럼 사용

const EmotionStyledButton = styled.button`
  background-color: hotpink;
  color: white;
  margin: 10px;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
`;

function Emotion() {
  return (
    // Emotion의 css props 적용 시 반드시 import 위에 주석 필요!
    // /** @jsxImportSource @emotion/react */
    <div css={boxStyle}>
      <h2>이모션: styled 함수</h2>
      <EmotionStyledButton>이모션 버튼(스타일 함수)</EmotionStyledButton>
    </div>
  )
}

export default Emotion