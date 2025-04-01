import React, { useState } from "react";

/*
! useState 사용한 이벤트 처리 & 상태 관리

? == 요구 사항 정리 ==
1. 사용자 아이디, 비밀번호, 이메일 주소 입력 (문자열 데이터)

2. 입력 유효성 검사
  : 모든 필드 입력창으 비워져 있을 수 없음
  : 모든 값을 입력해야 함

3. 상태 관리
  : 입력 값들은 객체로 하나의 useState를 통해 관리 - formData

4. 폼 제출
  : 폼 제출 시 모든 입력값이 콘솔에 출력
  - 입력 조건을 만족하지 않는 경우: 오류 메시지 출력 (오류 메시지도 상태 관리)
*/

interface IFormData {
  id: string;
  password: string;
  email: string;
}

const initialFormData: IFormData = {
  id: "",
  password: "",
  email: "",
};

function UseState04() {
  //! 폼 데이터 상태 관리
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  const { id, password, email } = formData;

  //! 폼 입력 오류 메시지 상태 관리
  const [errors, setErrors] = useState<IFormData>(initialFormData);

  //! 입력 필드의 변경을 감지하는 이벤트 핸들러
  const onSignUpInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //! 폼 제출 이벤트를 처리하는 이벤트 핸들러
  // : 제출 전 각 입력 요소에 대한 유효성 검사
  const onSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //? 임시 오류 메시지 객체 생성
    // : 아이디, 비밀번호, 이메일 순으로 오류 메시지를 담아두는 객체
    let tempErrors = {
      id: "",
      password: "",
      email: "",
    };

    //? 폼의 유효성 상태를 추적하는 변수
    let isValid = true; // 하나라도 유효하지 않으면 false로 지정

    if (!id) {
      // id 입력 필드가 비워진 경우 (빈 문자열 - false)
      tempErrors.id = "아이디를 입력해주세요.";
      isValid = false;
    }

    if (!password) {
      tempErrors.password = "비밀번호를 입력해주세요.";
      isValid = false;
    }

    if (!email) {
      tempErrors.email = "이메일을 입력해주세요.";
      isValid = false;
    }

    setErrors(tempErrors); // 오류 상태 업데이트

    if (isValid) {
      // 모든 입력이 유효한 경우
      console.log("회원가입 데이터: ", formData);
      alert(`회원가입을 축하합니다. ${id}님`);

      setFormData(initialFormData);
    }
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        textAlign: "center",
      }}
    >
      <h3>회원가입</h3>
      <form onSubmit={onSignUpSubmit}>
        <div>
          <label>
            아이디
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={onSignUpInputChange}
            />
          </label>
          {errors.id && <p style={{ color: "red" }}>{errors.id}</p>}
        </div>
        <div>
          <label>
            비밀번호
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={onSignUpInputChange}
            />
          </label>
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <div>
          <label>
            이메일
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={onSignUpInputChange}
            />
          </label>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default UseState04;
