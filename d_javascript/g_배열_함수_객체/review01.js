// review01.js

//# Todo 리스트 만들기 (할 일 목록 관리 시스템) //

//! Todo 객체 구성
// - id: 각 할 일의 고유 식별자 (주로 숫자나 문자열로 표현)
// - content: 할 일의 내용을 문자열로 저장
// - completed: 할 일의 완료 상태를 나타내는 boolean 데이터

/*
  Todo 객체 예시
  let todo = {
    id: 1,
    content: '정보처리기능사 필기 원서 접수',
    completed: false
  }
*/

//! === 프로젝트 개요 === //
// Todo 객체 데이터에 대한 CRUD 기능

// 1. 할 일 추가: 객체를 사용하여 할 일을 저장하고 배열에 객체를 추가
// >> 새로운 할 일(객체)을 목록(배열)에 추가

// 2. 할 일 수정: 완료된 할 일의 completed 값을 전환 (토글, toggle)

// 3. 할 일 삭제: 지정하는 할 일을 목록에서 제거

// 4. 할 일 목록 출력: 현재 목록의 상태를 콘솔에 출력

//! === 프로젝트 구현 === //
let todos = []; // 배열 리터럴 방식 선언 (빈 배열) - 할 일 목록을 저장할 배열 초기화
let nextId = 1; // 고유 ID값을 위한 전역 변수

// 1) 할 일 추가 함수
function addTodo(content) { // 함수 호출 시 인자로 할 일의 내용 전달받음
  // 새로운 할일 생성
  const newTodo = {
    id: nextId,
    content: content,
    completed: false
  };

  nextId++; // 다음 할 일 추가 시 사용할 고유 ID 값 증가
  todos.push(newTodo);
  // 현재까지의 todo 리스트를 출력하는 함수
  displayTodos();
}

// 2) 할 일 수정 함수: 완료 상태를 변경
// : 수정하고자 하는 id 할 일의 '완료 상태 전환(토글)'
function toggleTodo(id) {
  // 전체 할 일 목록 중 id값과 일치하는 할 일만 완료 상태 전환
  todos = todos.map(todo => {
    // id값 일치 여부 확인 (if문)
    if (todo.id === id) {
      // cf) 스프레드(spread, ...) 연산자
      // : 객체나 배열의 내부 요소만을 추출하는 연산자

      // let arr1 = [1, 2, 3];
      // let arr2 = [ ...arr1 ]; >> arr1의 요소만 가져와서 새로운 배열 생성 (메모리 주소가 다름)

      // 객체명.속성키 = 속성값; >> 객체 속성값 재할당 || 객체의 속성 생성

      // let obj1 = { a: 1, b: 2 };
      // obj1.a = 3; - 재할당
      // obj1.c = 5; - 생성
      // >> { a: 3, b: 2, c: 5 }; 

      // cf) 기존속성키: 새로운 속성값; >> 객체 내부에서 속성값 재할당
      return { ...todo, completed: !todo.completed }; // { ...todo } >> todo의 요소만 가져와서 새로운 객체 생성
    }

    return todo; // id가 일치하지 않는 데이터는 기존 객체를 그대로 반환
  });

  displayTodos();
}

// 3) 할 일 삭제 함수
// : 삭제하고자 하는 id를 가진 할 일을 todos 배열에서 제거
// > 배열 내부 요소 개수의 변화 O (filter)
function deleteTodo(id) {
  // 1, 2, 3, 4, 5 중 4를 제거
  // 4와 일치하지 않는 1, 2, 3, 5만을 새로운 배열로 저장
  // >> 4가 삭제된 효과
  todos = todos.filter(todo => todo.id !== id);
  displayTodos();
}

// 4) 할 일 출력 함수
function displayTodos() {
  console.log('=== 현재의 할 일 목록 ===');
  todos.forEach(todo => {
    console.log(`${todo.id}: ${todo.content} - ${todo.completed ? '완료됨' : '완료되지 않음'}`);
    // 논리 연산자
    // : 완료 시 ^^ 기호를 출력
    // console.log(`${todo.id}: ${todo.content} - ${todo.completed && '^^'}`);
  });
}

//! === 프로젝트 실행 ===
addTodo('자바스크립트 복습하기!');
addTodo('자바 복습하기!!');
addTodo('이력서 작성하기!');
addTodo('자기소개서 작성 시작해보기?');

toggleTodo(3);

deleteTodo(3);

addTodo('자격증 일정 알아보기');

toggleTodo(1);