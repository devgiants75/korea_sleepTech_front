export const tmp = '';

//# vite를 사용한 리액트 프로젝트 생성

//? cf) npm 7+
// npm create vite@latest

//! 프로젝트 설정 순서 (터미널에서 대화형으로 진행)
// Project name: 프로젝트 폴더명 
// Package name: package.json의 "name" 속성값 으로 지정 (소문자 작성!!)
// Select a framework: React
// Select a variant: TypeScript

// >> 명령어 실행 폴더 내에 Project name의 리액트(ts) 프로젝트가 생성
//    : 프로젝트 폴더로 이동 (cd Project-name입력 )

//! 프로젝트 초기 설정(★프로젝트 진입점에서 실행!!★)
// package.json에 명시된 의존성 설치
// : npm install

// 개발 서버 실행
// : npm run dev
// >> 브라우저에 http://localhost:5173/ 열기 

//# Vite로 생성된 React 프로젝트 구조
// 1. node_modules: 설치된 패키지
// 2. public: 정적 파일
// 3. src: source, 실제 코드 작성 폴더
//    - App.tsx: 주요 컴포넌트
//    - main.tsx: 앱 진입점
// 4. index.html: HTML 템플릿
//    : React는 S(single)P(page)A(application)
// 5. package.json: 프로젝트 정보 & 의존성
// 6. tsconfig.json: Typescript 설정
// 7. vite.config.ts: Vite 설정

//# 자주 사용하는 명령어
// 1. npm run dev: 개발 서버 실행(핫 리로딩 포함)

// cf) 핫 리로딩
// : 앱을 처음부터 다시 시작하지 않고
//   , 새로운 코드 변경에 따른 해당 변경 사항만 실시간 반영하는 기능

// 2. npm run build: 프로덕션 빌드 생성 (dist 폴더)
// 3. npm run preview: 빌드된 앱 미리보기 (build 후 사용 가능)

//* React 실행 시 자주 발생하는 에러
// 1. npm is not recognized
// : npm install
// 2. Permission denied(macOS)
// : 명령어 앞에 sudo 추가 || 권한 설정 확인