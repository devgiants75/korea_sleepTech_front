// dom01.js

//# DOM (문서 객체 모델, Document Object Model)

// cf) JS 문서 객체
// : HTML 안에서 요소(Element)로 불리는 객체
// : JS 문서 객체 === HTML 요소

//! 1. DOM 정의
// : 웹 페이지를 문서 객체로 조작하고 관리할 수 있는 인터페이스(상호작용, 규약)

//! 2. DOM 사용 방법
// : JS에서 HTML의 요소를 문서객체로써 선택, 추가, 수정, 삭제하는 메서드와 속성 사용
// >> CRUD

//! 3. DOM 조작 방법

//? 1) DOMContentLoaded 이벤트
// : JS 내에서 문서 객체 조작 시
//   , HTML의 모든 문서 구조(내용)가 모두 로드된 이후에 이벤트 발생

document.addEventListener('DOMContentLoaded', () => {
  // .addEventLister('이벤트', 콜백함수);
  // : 이벤트의 콜백함수는 화살표함수 사용 권장
});

//? 2) 문서 객체 가져오기

// 2-1) 전체 HTML 구조를 객체로 인식하여 속성을 가져옴(중첩 객체)
// EX) document.head / document.title

// 2-2) querySelector() & querySelectorAll() 메서드
// : 선택자를 활용하여 단일 혹은 여러 개의 요소를 읽어올 때 사용
// : 태그, #아이디, .클래스, 선택자A 선택자B(자식 요소 선택자)
document.addEventListener('DOMContentLoaded', () => {
  // querySelector()
  // : 요소를 하나만 추출(여러 개일 경우 제일 상단의 요소만 가져오기)
  const header = document.querySelector('h1');

  // 텍스트, 스타일 변경
  header.textContent = 'HEADER ONE';
  header.style.color = 'white';
  header.style.backgroundColor = 'black';
  header.style.padding = '20px';

  // querySelectorAll();
  // : 문서 객체를 여러 개 추출하여 배열로 읽음
  const items = document.querySelectorAll('li');

  items.forEach(item => {
    item.textContent = 'LIST ITEM';
    item.style.color = 'pink';
    item.style.listStyle = 'none';
    item.style.backgroundColor = 'black';
  });
});

// 2-3) getElementById('아이디명');
// : 주어진 ID를 가진 요소를 찾아 해당 요소를 반환
// - ID의 경우 문서 내에서 유일!
// - # 기호 없이 아이디명만 문자열로 전달
document.addEventListener('DOMContentLoaded', () => {
  // cf) getElementsByClassName('클래스명')
  //    : 해당 클래스명을 가진 요소를 컬렉션 객체로 반환
  //    >> for문 사용, 인덱스 번호 사용 X 
  const divElement = document.getElementById('getElementById');

  divElement.style.color = 'blue';
  divElement.style.backgroundColor = 'yellow';
  divElement.classList.add('special');
});