// helloWorld.ts

console.log('Hello Typescript!');

let num: number = 3; 
// num = '안녕하세요';
console.log(num);

//? cf) ts 코드는 실시간으로 js 컴파일되지 X
//  : TS 문법 코드는 node 파일명.ts로 실행되지 X

//! ts 파일을 js 파일로 컴파일(번역)
// 1. tsc 파일명.ts
//  : 같은 파일명의 js 확장자 파일이 자동 생성
// 2. node 파일명.js
//  : 컴파일 된 js 파일을 Node.js 런타임 환경에서 실행

//! ts-node를 사용하여 실시간 번역 및 실행
// : js 파일이 생성되지 않음

//? node 환경의 의존성은 !반드시! node_modules 폴더가 위치하는 프로젝트 최상단에서 설치

// (sudo) npm install -g ts-node
// npm install ts-node --save-dev

console.log('ts-node로 ts파일 생성하기');

//! git 업로드 시 node_modules 폴더를 제외하고 업로드!!!!!
// : .gitignore 파일 생성

// # node_modules 깃 업로드 방지
// node_modules/
//  */node_modules

//! 해당 프로젝트를 pull한 경우
// : f_typecript(node_modules 폴더가 존재해야하는 위치)
// - npm install