// main.ts
const app = document.getElementById('app');

//! 1) 그림판 툴 상태를 담는 객체
type ToolState = {
  color: string; // 현재 색상
  size: number; // 브러시 크기
  isEraser: boolean; // 지우개 모드 여부
}

//! 2) 기본 상태 설정
const ToolState: ToolState = {
  color: '#000000', // 기본 검정색
  size: 5, // 기본 굵기
  isEraser: false, // 기본은 펜 모드
}

//! 3) 상태 변경 함수

// cf) keyof 연산자
// : 객체의 키 값들을 숫자나 문자열 리터럴 유니언 값으로 생성
// EX) 'color' | 'size' | 'isEraser'

//? @Params: ToolState 타입의 키와 해당 키의 타입을 제네릭을 통해 설정
// EX) key: 'color', value: string(ToolState color의 타입)
// EX) key: 'size', value: number
// EX) key: 'isEraser', value: boolean
function setTool<K extends keyof ToolState>(key: K, value: ToolState[K]) {
  ToolState[key] = value; // 상태 업데이트
}

//! 4) 툴바를 만드는 함수
function createToolbar(): HTMLElement {
  
}