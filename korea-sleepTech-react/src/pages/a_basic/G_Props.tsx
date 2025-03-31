// G_Props.tsx
import React from 'react'

//# 자식 컴포넌트: 화살표 함수를 사용한 컴포넌트 생성
// - 부모로 부터 사용자에 대한 데이터를 전달(props)받아 UI로 반환
// - props는 객체의 형태!

type User = {
  name: string;
  age: number;
  email: string;
}

type UserCardProps = { user: User };
// props는 변수, 객체 상관없이 무조건 {} 객체 내에 작성
// - 객체 데이터 틀로 받아오려면 본인의 객체 틀 외에 또 다른 객체 {} 틀로 묶여야 함
// type UserCardProps = {{ name, age, email}: User};

const UserCard = ({ user }: UserCardProps) => {
  console.log(user.name);
  console.log(user.age);

  const { name, age, email } = user;
  console.log(name);
  console.log(age);
  console.log(email);

  return (
    <>
      <p>{user.name} / {user.age} / {user.email}</p>
      {/* <p>{name} / {age} / {email}</p> */}
    </>
  )
}

//# 다른 컴포넌트를 감싸는 Wrapper 컴포넌트
// : props 데이터로 다른 컴포넌트(ReactNode)를 전달받음
type ChildrenType = {
  // ReactNode: React 내의 HTML 요소들 + 사용자 정의 컴포넌트들의 타입
  children: React.ReactNode;
}

export const Wrapper = ({ children }: ChildrenType) => {
  return (
    <div style={{ border: '2px solid black', padding: '16px', backgroundColor: 'lightgreen' }}>
      {/* props로 전달받은 UI를 HTML 내에서 출력 시 JS의 문법 출력 처럼 사용 */}
      {children}
    </div>
  )
}


function G_Props() {
  const userData = {
    name: '이도경', age: 30, email: 'asd123'
  }
  return (
    // ReactNode를 props로 전달받는 컴포넌트는 열리고 닫히는 태그 내에서 
    // : 전달할 ReactNode 작성
    <Wrapper>
      {/* 
      == 콘솔창에 입력값 2번 실행 ==
      strictMode >> import { StrictMode } from 'react' 
      : main.tsx에서 명시
      - 렌더링 시 컴포넌트를 일부러 콘솔창에 두 번 실행 (부작용 확인)
      */}
      <UserCard user={{ name: '이승아', age: 30, email: 'qwe123'}} />
      <UserCard user={userData} />

      <div>안녕</div>
    </Wrapper>
  )
}

export default G_Props