// dom02.js

//! DOM 조작하기 

// cf) 문서 객체 가져오기
//? head, body, title
// document.head
// document.body
// document.title

//? body 요소 내부에서 만들어진 요소들
// querySelector()
// querySelectorAll()
// getElementById()

//! 1) 글자 조작하기
// 문서객체.textContent
// : 입력된 문자열 그대로 넣기

// 문서객체.innerHTML
// : 입력된 문자열을 HTML 형식으로 넣기

document.addEventListener('DOMContentLoaded', () => {
  const a = document.getElementById('textContent');
  const b = document.getElementById('innerHTML');

  a.textContent = '<h2>textContent 속성</h2>';
  // : 텍스트 자체가 내용으로 삽입

  b.innerHTML = '<h2>innerHTML 속성</h2>';
  // : HTML 문서 구조를 인식하고 해석한 뒤 내용만 삽입
});

// >> textContent 내용만 삽입을 권장

//! 2) 속성 조작하기
// : 문서 객체의 속성(attribute)을 조작

// cf) HTML 요소의 부가 기능을 속성(attribute)으로 작성
//    === JS 객체의 속성: 객체의 기능을 명시 (객체.속성명)

// 문서객체.setAttribute(속성이름, 값)
// : 특정 속성에 값을 지정

// 문서객체.getAttribute(속성이름)
// : 특정 속성값을 추출

document.addEventListener('DOMContentLoaded', () => {
  const dogs = document.querySelectorAll('.dog');

  dogs.forEach((dog, index) => {
    const width = (index + 1) * 100; // 100, 200, 300, 400

    // dog.setAttribute('width', width);
    // dog.setAttribute('height', '250px');
    dog.style.width = width + 'px';
    dog.style.height = '250px';

    const source = '../dog.jpg';
    const alter = '강아지 이미지';

    //? cf) HTML 표준에 정의된 속성들은 setAttribute() 또는 getAttribute() 사용 없이 객체 접근이 가능
    // : 내장된 속성들은 .(점)연산자를 사용하여 속성 읽기 또는 설정 가능

    dog.src = source;
    dog.alt = alter;
  });
});

//! 3) 스타일 조작하기
// : 문서 객체의 스타일 조작 시 style 속성을 사용

//? cf) style 속성은 JS에서 객체로 인식
// : 문서객체.style.스타일속성명;
// >> 식별자에 -(하이픈) 사용 X
// >> lowerCamelCase 사용 권장

// EX) text-align: textAlign
//      font-size: fontSize

/*
선택자 {
  backgroung-color: 250px;
  font-size: 100px
}

CSS: 하이픈(-)으로 이어지는 단어를 연결
*/

document.addEventListener('DOMContentLoaded', () => {
  // id값이 container인 요소 내부의 div 태그만 가져옴
  const divs = document.querySelectorAll('#container div');

  divs.forEach((div, index) => {
    const gradation = index * 10; // 0 ~ 240

    div.style.height = '10px';
    div.style['backgroundColor'] = `rgb(${gradation}, ${gradation}, ${gradation})`;

    // style 객체 사용 시
    // : 주로 .연산자 사용을 권장

    // h1.style.스타일속성명
    // h1.style['스타일속성명']
    // h1.style.['스타일-속성명']
  })
})