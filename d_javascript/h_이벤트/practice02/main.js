// main.js

/* 검색 필터 기능 */

document.addEventListener('DOMContentLoaded', () => {
  // HTML 요소 가져오기
  const inputField = document.querySelector('#search-input');
  const list = document.querySelector('#item-list');
  const items = document.querySelectorAll('li');
  const noResult = document.querySelector('#no-result');

  // 검색어 입력 시 입력값과 리스트의 내용값을 비교하는 '이벤트 핸들러 정의'
  inputField.addEventListener('input', () => {
    // input 요소의 입력값 가져오기
    let value = inputField.value.toLowerCase();

    // 보여지는 아이템의 수를 저장
    // : 입력값이 아이템의 내용에 포함되어 필터링되는 데이터의 수
    let visibleItemsCount = 0;

    items.forEach(item => {
      // HTML요소.textContent: HTML 요소 객체의 내용 값

      // 데이터.includes(값)
      // : 데이터 안에 값의 포함 여부를 boolean 반환
      // cf) 데이터: 배열, 문자열 사용 가능

      if (item.textContent.toLowerCase().includes(value)) {
        // CSS display 속성에 ''(빈문자열)지정 시
        // : 속성을 보여줌
        // cf) none 값이 아니라면 보여짐
        item.style.display = '';
        visibleItemsCount++; // 포함되는 요소(필터링된 요소)의 개수를 카운팅
      } else {
        // 포함되지 않는 경우: 숨김
        item.style.display = 'none';
      }
    });

    // 보여지는 아이템이 0초과: 있다면!
    // : noResult는 보이지 X
    noResult.style.display
      = visibleItemsCount > 0 ? 'none' : 'block';
  });
});