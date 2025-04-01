import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

//! === 컴포넌트 트리 안에서의 상태 ===
// : 상태를 컴포넌트 트리 아래로 전달 (부모 >> 자식 컴포넌트)

//? cf) 상태(State) VS 속성(Props)
// 1) 상태
// - 컴포넌트 '내부'에서 관리되는 데이터
// - 상태가 변경되면 렌더링을 유발(업데이트)
// >> 컴포넌트가 '자기 자신'의 상태 변경 가능

// 2) 속성
// - 부모 컴포넌트(외부)로 부터 받은 데이터
// - 컴포넌트 간의 데이터 전달에 사용
// >> 읽기 전용 데이터: 자식 컴포넌트에서 수정 X

// >> 리액트에서 컴포넌트는 '상태'와 '속성'을 사용하여 데이터와 UI를 관리

export type UserType = {
  username: string;
  height: number;
};

const initialValue: UserType = {
  username: "이도경",
  height: 157,
};

function UseState06() {
  // const [상태변수명, 상태변경함수] = useState<상태변수타입>(초기값);
  const [userInfo, setUserInfo] = useState<UserType>(initialValue);

  const [submittedData, setSubmittedData] = useState<UserType | undefined>();

  const { username, height } = userInfo;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleUserInfoSubmit = () => {
    // 자식 컴포넌트에 데이터 전달
    setSubmittedData(userInfo);    
  }

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        name="username"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="키"
        name="height"
        value={height}
        onChange={handleInputChange}
      />
      <button onClick={handleUserInfoSubmit}>전송</button>
      <ChildComponent userData={submittedData} />
    </div>
  );
}

export default UseState06;
