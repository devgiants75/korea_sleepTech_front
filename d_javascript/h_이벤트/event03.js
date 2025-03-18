// event03.js

//! 페이지 로드 이벤트

// DOMContentLoaded 이벤트
// : HTML 문서가 완전히 로드되고 DOM 트리가 완성되었을 때 발생
// - 이미지, css, 스크립트 파일이 아직 로드되지 않아도 이벤트 발생

// cf) load 이벤트
// : 페이지의 모든 콘텐츠가 완전히 로드된 경우에만 발생

window.addEventListener('load', function() {
  console.log('페이지의 모든 콘텐츠가 로드되었습니다.');
});

// HTML 웹 문서의 구조를 인식한 후 JS 기능이 동작되도록 설정
// : 안정성 보장

// cf) HTML DOM 트리 구조 완성 전 JS 기능 사용 시 오류
window.addEventListener('DOMContentLoaded', function() {
  console.log('DOM 트리가 완성되었습니다.');
});