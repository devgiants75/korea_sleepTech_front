//! 카드 메모리 게임 (카드 매칭 게임)
// : 사용자가 카드를 클릭하여 뒤집고
//   , 같은 색상의 카드를 매칭시키는 게임

// +) 게임의 초기화, 카드 뒤집기, 매칭 검사
//    , 게임 완료 확인 등의 기능을 포함

//& 문서의 로딩이 완료되면 함수 실행
document.addEventListener('DOMContentLoaded', () => {
  //! HTML 요소 선택
  const cardContainer = document.getElementById('card-container');
  // : cardContainer 요소의 자식 요소로 동적으로 생성되는 카드들을 전달

  const startButton = document.getElementById('start-button');
  const resetButton = document.getElementById('reset-button');
  const completedButton = document.getElementById('completed-button');

  //! 색상 배열 정의 (6개)
  // : 임의의 색상 지정 가능
  // const colors = ['black', 'red', 'yellow', 'pink', 'orange', 'blue'];
  const colors = [
    "#cc3131",
    "#e3ddbb",
    "#23b923",
    "#34bcbc",
    "#3939db",
    "#e5b7e4",
  ];

  //! colors 배열의 색상을 복제하여 새로운 배열 cardColors 생성
  //? : 스프레드(...)연산자를 사용
  // - 모든 요소를 새로운 배열에 두 배 포함되도록 복사
  let cardColors = [...colors, ...colors];

  //# 게임을 초기화하는 함수
  function initializeGame() {
    //? cardColors 배열을 섞기 (혼합)
    // : shuffle() 사용자 함수 사용 - 배열 요소의 순서를 무작위로 섞음
    shuffle(cardColors);

    //? cardContainer 내부의 HTML을 비움 (초기화)
    // : 게임 새로 시작 시 기존의 카드를 제거
    cardContainer.innerHTML = '';

    //? 12개의 카드를 for 반복문으로 생성하여 HTML 요소로 할당
    for (let i = 0; i < 12; i++) {
      // cardContainer 내부 HTML  추가
      cardContainer.innerHTML += `
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <img src="./front.jpg" alt="카드의 앞면" />
            </div>
            <div class="card-back" style="background-color: ${cardColors[i]};"></div>
          </div>
        </div>
      `;
    }

    //? 12장의 각 카드에 이벤트 리스너를 추가하는 함수 호출
    // : 카드 클릭 시 동작을 정의
    addCardEventListener();
  }

  //# 시작 시 잠시동안 모든 카드의 뒷면(색상)을 공개하는 함수 정의
  function revealCardsTemporary() {
    // 'completed-button' (완료 버튼)을 비활성화
    // : 카드가 뒤집힐 당시에 사용자의 컨트롤을 막는 로직

    // DOM요소.속성 = 속성값;
    // cf) DOM요소.setAttribute(속성, 속성값)
    //? bool 속성인 경우 속성값에 boolean 값을 지정
    //  : <input type="text" autofocus />
    //  : inputElement(DOM요소).autofocus = true;

    completedButton.disabled = true; // disabled 속성: 요소에 대한 컨트롤의 비활성화를 지정

    // 모든 카드 뒤집기 (뒷면 공개 - 색상)
    setTimeout(() => {
      document.querySelectorAll('.card').forEach(card => {
        // 각 요소를 모두 뒤집기
        card.classList.add('flipped');
      });
    }, 100); // 0.1초 동안 함수 실행 

    // 모든 카드 뒤집기 (앞면 공개 - 이미지)
    setTimeout(() => {
      document.querySelectorAll('.card').forEach(card => {
        // 각 요소를 다시 원래 상태로 되돌림
        card.classList.remove('flipped');
      });

      // 'completed-button' 버튼을 다시 활성화
      completedButton.disabled = false;
    }, 2000); // 2초 동안 함수 실행
  }

  //# 모든 카드 요소에 클릭 이벤트 리스너를 추가하는 함수
  // : 카드 클릭 시 뒤집는 기능 구현
  function addCardEventListener() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', flipCard); // flipCard 함수 등록
    });
  }

  //! 변수 선언
  // 카드가 뒤집혔는지 여부
  let hasFlippedCard = false; // 첫 번째 카드가 선택되지 않은 것이 기본값
  // 첫 번째, 두 번재 선택된 카드
  let firstCard, secondCard;
  let lockBoard = false; // 게임판이 잠겨있지 않는 것이 기본값

  // 게임 시작 상태 추적을 위한 변수
  // : 시작 버튼과 재시작 버튼에 대한 이벤트 리스너 내에서 활용
  let isGameStarted = false; 

  //# 카드를 뒤집는 함수 정의
  // : 카드 클릭 시 호출
  function flipCard() {
    if (!isGameStarted || lockBoard) return;

    this.classList.add('flipped');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
    } else {
      hasFlippedCard = false; // 다음 쌍의 선택을 위한 기본값 선언
      secondCard = this;

      // 두 카드가 일치하는지 확인 - 사용자 함수
      checkForMatch(); 
    }
  }
  // const flipCard = (e) => {
  //   if (!isGameStarted || lockBoard) return;
  //   e.target.classList.add('flipped');
  // }

  //# 두 카드가 일치하는지 확인하는 함수 정의
  function checkForMatch() {
    let isMatch = 
      firstCard.querySelector('.card-back').style.backgroundColor
        === secondCard.querySelector('.card-back').style.backgroundColor;

    // 카드가 매치되면 비활성화, 아닐 경우 다시 뒤집기
    // >> 비활성화: 매치된 카드들을 다시 선택할 수 없도록 지정
    isMatch ? disabledCards() : unflipCards();
  }

  //# 매치된 카드를 처리하는 함수 정의
  function disabledCards() {
    // 카드를 뒤집는 기능을 제거
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    // 게임판 초기화 - 사용자 함수 정의
    resetBoard();
  }

  //# 매치되지 않은 카드를 다시 뒤집는 함수 정의
  function unflipCards() {
    lockBoard = true; // 게임판 잠금

    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');

      // 게임판 초기화 - 사용자 함수 정의
      resetBoard();
    }, 1000);
  }

  //# 게임판 초기화 함수 정의
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null]; // 새로운 카드가 담길 수 있도록 설정
  }

  //! 게임 시작 시간을 기록할 변수 선언
  let gameStartTime;

  //# 'start-button' 버튼에 클릭 이벤트 리스너 추가
  startButton.addEventListener('click', () => {
    initializeGame(); // 게임 초기화

    gameStartTime = new Date() ; // 현재 시간을 게임 시작 시간으로 설정

    // 버튼의 가시성 조정: 시작, 재시작, 완료 버튼의 배치를 구현
    toggleButtonVisibility(true);

    revealCardsTemporary(); // 잠시동안 카드 공개
    isGameStarted = true;
  });

  resetButton.addEventListener('click', () => {
    initializeGame(); // 게임 초기화

    gameStartTime = new Date() ; // 현재 시간을 게임 시작 시간으로 설정

    // 버튼의 가시성 조정: 시작, 재시작, 완료 버튼의 배치를 구현
    toggleButtonVisibility(true);

    revealCardsTemporary(); // 잠시동안 카드 공개
    isGameStarted = true;
  });

  completedButton.addEventListener('click', () => {
    // 모든 카드가 뒤집혀있는지 확인

    // every() 메서드
    // : 콜백함수를 인자로 받는 배열 메서드
    // - 배열의 모든 요소가 주어진 함수 조건식을 만족할 때(true값일 경우) true를 반환
    // - 모든 카드 요소에 flipped 클래스 속성이 존재 >> 모두 뒤집어짐
    const allFliped = Array.from(document.querySelectorAll('.card')).every(
      card => card.classList.contains('flipped')
    );

    if (allFliped) {
      // 모든 카드가 뒤집힌 경우
      const gameTime = new Date() - gameStartTime;

      // cf) new Date(): 현재 날짜, 시간을 밀리초 단위로 반환
      alert(`게임완료~! 소요 시간: ${Math.floor(gameTime / 1000)} 초`);

      isGameStarted = false; // 게임 완료 시 시작 상태 false로 설정

      // 게임 재시작
      initializeGame();

      // 시작 버튼만 보이도록 버튼 가시성 조정
      toggleButtonVisibility(false);
    } else {
      alert('완료되지 않았습니다.');
    }
  });

  //# 버튼 가시성 토글 함수
  function toggleButtonVisibility(isGameStarted) {
    // 게임 시작 여부가 true라면: 보여지지 않음
    startButton.style.display = isGameStarted ? 'none' : 'block';
    
    resetButton.style.display = isGameStarted ? 'block' : 'none';
    completedButton.style.display = isGameStarted ? 'block' : 'none';
  }

  // 초기에는 시작 버튼만 표시
  toggleButtonVisibility(false);
  // 게임 초기화 & 화면 렌더링
  initializeGame();
});

//& 배열의 요소를 무작위로 섞는 사용자(커스텀) 함수
// : 배열의 각 요소를 다른 임의의 위치와 교환
function shuffle(array) {
  // 배열의 마지막 요소부터 시작하여 첫 번째 요소까지 역순으로 반복
  // : 배열의 마지막 요소의 인덱스 번호 === length - 1

  // i는 11부터 0까지 반복 (요소가 12개)
  let length = array.length;

  for (let i = length - 1; i > 0; i--) {
    // 현재 요소(i)와 무작위로 선택된 요소(j)의 위치를 교환

    let j = Math.floor(Math.random() * (i + 1));
    // Math.random() * (i + 1)
    // : 0부터 i까지의 무작위 인덱스를 생성
    // Math.floor()
    // : 소수점 아래를 버리고 정수 인덱스를 반환

    //? 구조 분해 할당
    // : 배열의 i번째 요소와 j번째 요소를 서로 바꿈
    // - '피셔-에이츠 셔플'의 알고리즘을 기반
    [array[i], array[j]] = [array[j], array[i]];
  }
}
