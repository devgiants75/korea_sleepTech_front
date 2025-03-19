// dom03.js

//! 1. 문서객체 생성
// : createElement('문서객체명') 메서드 사용

// cf) 문서 객체는 생성한 뒤 '배치'가 필수!
// >> DOM 트리 구조 내부에 삽입

//? 부모객체.appendChild(자식객체) 메서드
// : 선택된 부모 요소의 자식 요소 리스트에 제일 마지막에 추가

document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('h1');

  // 생성된 태그 조작
  header.textContent = '문서 객체를 동적으로 생성';
  header.setAttribute('data-custom', '사용자 정의 속성');
  header.style.color = 'white';
  header.style.backgroundColor = 'black';

  document.body.appendChild(header);
});

//! 문서 객체 이동
// : appendChild() 메서드를 사용하여 문서 객체 이동
// - 문서 객체의 부모는 반드시 하나여야 함!
// - 문서 객체를 다른 문서 객체에 추가 시 이동 효과

const divA = document.getElementById('first');
const divB = document.getElementById('second');

const h2 = document.createElement('h2');
h2.textContent = '이동하는 h2 태그';

const toFirst = () => {
  divA.appendChild(h2);
  setTimeout(toSecond, 2000);
}

const toSecond = () => {
  divB.appendChild(h2);
  setTimeout(toFirst, 2000);
}

toFirst();

//! 2. 문서 객체 제거
// : 부모 객체.removeChild(자식 객체) 메서드 사용
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const h3 = document.querySelector('h3');
    
    // cf) 문서객체.parentNode: 해당 문서 객체의 부모 객체를 지정
    
    // a >> b >> c >> d
    // EX) a요소.b요소.c요소.removeChild(d요소);
    
    // d요소.parentNode >> c요소가 반환
    
    // document.body.removeChild(h3);
    h3.parentNode.removeChild(h3);
  }, 3000);
});