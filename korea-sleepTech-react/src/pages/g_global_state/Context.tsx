import React, { createContext, useContext, useState } from 'react'

//! === 리액트 '전역' 상태 관리 === //
// : 여러 컴포넌트에서 공통으로 사용하는 데이터를 한 곳에서 관리
// : 프로젝트의 '전체 영역'에서 데이터를 공유할 수 있는 방법
// EX) 로그인 상태, 테마 설정(다크/라이트 모드)
//      , 다국어 처리(언어 설정), 사용자 정보 등

//# === Context API ===
// : React에서 제공하는 '전역 상태 관리 도구'
// - 컴포넌트 '트리' 전체에 걸쳐서 데이터를 효율적으로 전달
// - 상위 컴포넌트 >> 하위 컴포넌트로 props 전달 없이 데이터 공유 가능

// cf) context: 문맥, 환경, 정황, 상태 등
// >> 환경 정보를 통칭 === 상태

//! 1. Context API 구성 요소

//? 1) Context 객체 생성 - React.createContext
// : 데이터를 공유하고자 하는 범위에 대한 Context를 생성
// : 해당 객체는 Provider(제공자)와 Consumer(소비자) 컴포넌트를 포함

//? 2) Provider - Context 객체로부터 생성된 컴포넌트
// : Context를 구독하는 컴포넌트들에게 context의 변화를 알림
// : Provider는 value 속성을 통해 자식 컴포넌트에게 데이터를 전달

//? 3) Consumer - Provider로 부터 데이터를 받아 사용하는 컴포넌트
// : Context의 변화를 구독하는 컴포넌트
// : useContext 훅을 사용하여 해당 데이터에 접근

//! 2. Context API 사용 예제

// 사용자 정보를 표현하는 인터페이스
interface IUser {
  name: string;
}

// 상태와 업데이트 함수를 묶은 타입 정의
interface UserContextType {
  user: IUser | null;
  // cf) React.SetStateAction<T>
  //     : 상태를 업데이트할 수 있는 값 또는 함수 타입

  // cf) React.Dispatch<T>
  //     : 어떤 값을 받아서 처리하는 함수 타입
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  // >> 값 또는 함수를 받아서 상태를 업데이트 하는 함수
}

//? Context 생성
// : 사용자 정보를 저장할 context 객체 생성
// - 초기값 undefined 설정 (null 체크에 대한 안정성 확보)
const UserContext = createContext<UserContextType | undefined>(undefined);

//? Provider 생성
// : 해당 컴포넌트 내부의 자식 & 자손 컴포넌트는 useContext 훅을 통해 데이터 활용 가능
const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// 전역 상태 관리 데이터를 사용할 컴포넌트
const ExampleHeader = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('UserContext가 UserProvider 내에서 사용되지 않음');
  }

  const { user, setUser } = userContext;

  if (!user) {
    return <button onClick={() => setUser({ name: '이승아' })}>로그인</button>
  }

  return (
    <div>
      <h4>프로젝트 헤더</h4>
      <p>{user.name}</p>
    </div>
  );
}

const ExampleNaviBar = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('UserContext가 UserProvider 내에서 사용되지 않음');
  }

  const { user, setUser } = userContext;

  return (
    <div>
      Hello, { user ? user.name : '게스트' }
      <button onClick={() => setUser(null)}>로그아웃</button>
    </div>
  );
}

function Context() {
  return (
    <div>
      <UserProvider>
        <h3>ExampleHeader</h3>
        <ExampleHeader />
        
        <h3>ExampleNaviBar</h3>
        <ExampleNaviBar />
      </UserProvider>
      {/* 
      [ UserContext가 UserProvider 내에서 사용되지 않음 ]
      : context는 provider 내에서 사용!
      <ExampleNaviBar /> 
      */}
    </div>
  )
}

export default Context