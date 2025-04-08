import React from 'react'
import styles from "./Index.module.css";
import styled from 'styled-components';
import Emotion from './Emotion';
import LoginPage from './LoginPage';

//! === 리액트 Style 적용 === //

//! 1. 일반 css 파일 적용
// : 프로젝트 생성 시 기본 제공하는 App.css, index.css 형식

// import '파일경로/파일명.css' 로 사용
// >> 전체, 태그, 클래스, 아이디 선택자 등으로 요소에 직접 적용

//! 2. CSS Module
// : 전역적인 CSS 작성 X / 컴포넌트 단위로 CSS를 작성하는 기능
// - 각 컴포넌트에 대해 고유한 클래스 이름을 생성 CSS 스타일을 적용

//! 3. styled-components
// : CSS를 JS 파일 안에 작성할 수 있게 해주는 라이브러리
// - 컴포넌트마다 스타일을 지정하는 모듈화 & 조건부 스타일을 제공

//? 설치
// : npm i styled-componets
// : npm i --save-dev @types/styled-components

//? 사용 방법
// const 컴포넌트명 = styled.태그명`스타일 규칙; 스타일 규칙;`;

interface ButtonProps {
  primary?: boolean;
}

const MyButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.primary ? "#4caf50" : "black")};
  color: ${(props) => (props.primary ? "white" : "pink")};
  margin: 0 auto;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;



function Index() {
  return (
    <div>
      <div className={styles.wrapper}>
        Hello, I'm <span className={styles.text}>CSS Module</span>
      </div>

      <MyButton primary>스타일드 컴포넌트 버튼</MyButton>
      <MyButton>스타일드 컴포넌트 버튼</MyButton>

      <Emotion />

      <LoginPage />
    </div>
  )
}

export default Index