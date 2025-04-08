import React from 'react'
import styles from "./Index.module.css";

//! === 리액트 Style 적용 === //

// 1. 일반 css 파일 적용
// : 프로젝트 생성 시 기본 제공하는 App.css, index.css 형식

// import '파일경로/파일명.css' 로 사용
// >> 전체, 태그, 클래스, 아이디 선택자 등으로 요소에 직접 적용

// 2. CSS Module
// : 전역적인 CSS 작성 X / 컴포넌트 단위로 CSS를 작성하는 기능
// - 각 컴포넌트에 대해 고유한 클래스 이름을 생성 CSS 스타일을 적용

function Index() {
  return (
    <div>
      <div className={styles.wrapper}>
        Hello, I'm <span className={styles.text}>CSS Module</span>
      </div>
    </div>
  )
}

export default Index