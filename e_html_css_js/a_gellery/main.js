// main.js

// == 기능 구현 == //

// 1) thumb-bar의 이미지 클릭 
// : 해당 이미지로 full-img 변경

// 2) button 태그에 클릭
// - 다크 모드 버튼일 경우
//    : 버튼의 class 속성을 dark로 지정
//    : 버튼의 textContent는 라이트 모드로 변경
//    : overlay의 배경색 rgba(0, 0, 0, 0.5)

// - 라이트 모드 버튼일 경우
//    : 버튼의 class 속성을 light로 지정
//    : 버튼의 textContent는 다크 모드로 변경
//    : overlay의 배경색 rgba(0, 0, 0, 0)

//! 1) HTML 요소 선택
const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');
const button = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//! 2) 썸네일 바에 이벤트 리스너 추가
thumbBar.addEventListener('click', (e) => {
  // cf) target VS currentTarget
  // 1) target: 실제 이벤트가 발생한 요소 - 각각의 이미지
  // 2) currentTarget: 이벤트 핸들러가 바인딩(등록된) 요소

  // 클릭된 요소가 이미지인 경우
  if (e.target.tagName === 'IMG') {
    // 요소.tagName: 해당 요소의 태그명이 전체 대문자로 반환
    const imgSrc = e.target.src; // getAttribute(키);
    displayedImage.src = imgSrc; // 썸네일 이미지에 클릭한 이미지의 src를 삽입
  };
});

//! 3) 다크 / 라이트 버튼 기능 구현
button.addEventListener('click', () => {
  // 클래스 속성으로 현재 상태 확인
  // : 해당 요소의 클래스 리스트에 dark가 있는지 확인

  // 요소.classList: 해당 요소의 class 속성들을 배열로 반환
  // 배열/문자열.contains(값): 해당 값이 포함되었는지 여부를 반환
  if (button.classList.contains('dark')) {
    // 현재 다크 버튼인 경우 라이트 버튼으로 변경
    button.textContent = '라이트 모드';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    // 다크 모드를 지정하는 클래스명을 제거
    button.classList.remove('dark');
  } else {
    // 라이트 모드로 전환
    button.textContent = '다크 모드';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    button.classList.add('dark');
  }
});