// H_Rendering.tsx
import React from 'react'

//! 렌더링
// : 작성한 코드를 화면에 출력하는 기능

interface IItem {
  // 여행 짐 싸기
  // : 짐 항목의 이름, 준비 여부 완료
  name: string;
  isPacked: boolean;
}

//# 자식 컴폰넌트
function Item({ name, isPacked }: IItem) {

  //! 1. if 조건문을 사용한 조건부 렌더링
  //? react는 괄호 또한 문법적 요소로 사용
  // JS내부에서 HTML 작성 시: ()
  // HTML내부에서 JS 작성 시: {}

  // if (isPacked) {
  //   return(
  //     <li>{name} ❤</li>
  //   )
  // } else {
  //   return(
  //     <li>{name}</li>
  //   )
  // }

  //! 2. 삼항 연산자를 사용한 조건부 렌더링
  // 조건 ? 참일 경우 : 거짓일 경우
  // return (
  //,   // HTML 내에서 삼항 연산자(JS 문법) 사용 시 {} 사용
  //   <li>{isPacked ? name + '👍' : name}</li>
  // )

  //! 3. 논리 연산자를 사용한 조건부 렌더링
  return (
    <li>
      {/* 
        - 논리 연산자
        A && B
        : A, B 둘다 true여야만 true값이 반환
        : A값이 false인 경우 B의 값이 출력 X
        : A값이 true인 경우 B의 값이 출력 O
      */}
      {name} {isPacked && '✅'}
    </li>
  )

}


//# 부모 컴포넌트
function H_Rendering() {
  const people = ['조승범', '윤대휘', '정규민', '박성욱', '김소빈'];

  const peopleDescription = [
    {
      id: 0,
      name: '조승범',
      job: '원장'
    },
    {
      id: 1,
      name: '윤대휘',
      job: '멘토'
    },
    {
      id: 2,
      name: '정규민',
      job: '멘토'
    },
    {
      id: 3,
      name: '박성욱',
      job: '멘토'
    },
    {
      id: 4,
      name: '김소빈',
      job: '멘토'
    },
  ];

  //! map 콜백함수를 사용한 배열 렌더링
  // : 요소 개수 변화 X
  // : 전체 내용 렌더링
  const listItems = people.map((person, index) => {
    return <li key={index}>{person}</li>
  });

  //! filter 콜백함수를 사용한 배열 렌더링
  // : 요소 개수 변화 가능
  const businessItems = peopleDescription.filter(person => person.job === '원장');

  // 반환 요소가 단일 요소인 경우 소괄호와 return 키워드 생략 가능
  const businessItemsRender = businessItems.map(person => <li key={person.id}>{person.name}</li>);

  return (
    <div>
      <p>여행용 짐 목록</p>
      <ul>
        <Item name='과자' isPacked={true} />
        <Item name='음료수' isPacked={false} />
      </ul>

      <hr />
      <p>Map을 사용한 전체 리스트 렌더링</p>
      <ul>{listItems}</ul>

      <p>Filter를 사용한 원장님 렌더링</p>
      <ul>{businessItemsRender}</ul>
    </div>
  )
}

export default H_Rendering