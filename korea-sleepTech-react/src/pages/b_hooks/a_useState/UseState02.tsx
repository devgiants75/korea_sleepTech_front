import React, { useState } from "react";

//! useState: '컴포넌트 내에서' 데이터에 대한 상태 관리
// - 주로 UI에서 발생하는 이벤트에 반응하여 상태 변화

//? 데이터 타입 정의
interface ILogin {
  id: string;
  password: string;
}

const loginInitialValue = {
  id: "",
  password: "",
};

function UseState02() {
  // == useState 훅 == //
  const [inputValue, setInputValue] = useState<string>("");

  // const [id, setId] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  const [login, setLogin] = useState<ILogin>(loginInitialValue);

  // == event handler 정의 == //
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // input 창에 change 변화가 일어나면 처리(handle)할 로직

    // let inputValue = e.target.value;
    // setInputValue(inputValue);
    setInputValue(e.target.value);
  };

  const handleResetClick = () => {
    setInputValue("");
  };

  //? 여러 개의 입력 값을 관리하는 핸들러
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 매개변수로 전달받는 e(이벤트 객체)의 target >> 요소
    // : target 요소 내의 속성에 접근 가능

    // e.target
    // : name과 value값을 추출
    // - name값 지정 시 상태 변수와 이름을 일치
    // - value값은 사용자로부터 입력받는 값
    const { name, value } = e.target;

    setLogin({
      ...login, // id와 password 속성을 모두 가지는 login 객체
      
      // 변경하고자 하는 name키를 가진 value값을 변경 (해당 필드만 값 업데이트)
      [name]: value,
    });
  };

  const handleResetLogin = () => {
    setLogin(loginInitialValue);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 폼 기본 제출 동작 방지

    console.log('폼 데이터가 제출 되었습니다.', login);

    // 데이터에 대한 활용(제출, 사용) 후에는 초기화가 필수!
    setLogin(loginInitialValue);
  };

  return (
    <div>
      <p style={{ color: "lightcoral" }}>useState & 이벤트 핸들러</p>

      <input
        type="text"
        value={inputValue}
        // onChange 이벤트
        // : 사용자가 요소에 변화를 일으킬 때 마다 발생하는 이벤트
        // - input, select, textarea 등의 요소에 적용
        onChange={handleInputChange}
      />

      <select onChange={handleInputChange}>
        <option value="lotte">lotte</option>
        <option value="kia">kia</option>
      </select>

      <button onClick={handleResetClick}>초기화 버튼</button>
      <p>Input Value: {inputValue}</p>

      <h5>여러 개의 입력 상태 관리</h5>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="id"
          placeholder="아이디"
          value={login.id}
          onChange={handleLoginChange}
        />
        <input
          type="text"
          name="password"
          placeholder="비밀번호"
          value={login.password}
          onChange={handleLoginChange}
        />

        <p>아이디: {login.id} / 비밀번호: {login.password}</p>
        <button type="button" onClick={handleResetLogin}>초기화</button>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

export default UseState02;
