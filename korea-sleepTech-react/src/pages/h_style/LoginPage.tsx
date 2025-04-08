/** @jsxImportSource @emotion/react */
// : Emotion의 css props를 사용하기 위한 선언
// - 해당 주석이 없으면 css={s.layout} 같은 방식이 작동하지 X

import React, { useRef, useState } from "react";
import * as s from "./LoginPageStyle";
// : Emotion으로 작성된 스타일 모듈 전체를 s라는 이름으로 불러옴

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate(); // 로그인 후 페이지 이동을 위한 훅

  // input 요소에 접근하는 ref 배열 (username, password)
  const [inputRefs] = useState([
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]);

  // button 요소에 접근하는 ref 배열 (로그인 버튼 하나)
  const [buttonRefs] = useState([useRef<HTMLButtonElement>(null)]);

  // 사용자 입력 값을 저장할 상태
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  //# Event Handler #//
  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value, // 현재 입력한 name(key)에 해당하는 값만 변경
    });
  };

  const handleInputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // input 요소 참조 값들이 저장된 배열을 순회했을 때
      // , Enter 키가 눌려진 이벤트 객체의 현재 DOM 요소와 일치하는 경우의 index 번호를 반환
      let foundIndex = inputRefs.findIndex(ref => ref.current === e.currentTarget);

      if (foundIndex === inputRefs.length - 1) {
        // 찾은 요소가 마지막 input 창일 경우 버튼 클릭 실행
        buttonRefs[0].current?.click(); // 요소가 존재하는지 확인하고 있으면 클릭!
      }

      // 다음 input으로 포커스 이동
      inputRefs[foundIndex + 1].current?.focus();
    }
  };

  const handleLoginSubmitOnClick = async () => {
    try {
      const response = await axios.post('http://localhost:8080/spring_boot_app/api/login', inputValue);

      console.log(response);
      alert('로그인 성공');

      navigate('/main'); // 로그인 성공 시 메인 페이지로 이동
    } catch (error) {
      console.error('로그인 실패(존재하지 않는 api URL): ', error);
      alert('로그인 실패');
    }
  };

  return (
    <div css={s.layout}>
      <div css={s.main}>
        <input
          type="text"
          placeholder="사용자 이름"
          name="username"
          value={inputValue.username}
          onChange={handleInputOnChange}
          onKeyDown={handleInputOnKeyDown}
          ref={inputRefs[0]}
        />
        <input
          type="text"
          placeholder="비밀번호"
          name="password"
          value={inputValue.password}
          onChange={handleInputOnChange}
          onKeyDown={handleInputOnKeyDown}
          ref={inputRefs[1]}
        />
        <button 
          onClick={handleLoginSubmitOnClick} 
          ref={buttonRefs[0]}
        >로그인</button>
      </div>

      <div css={s.footer}>
        <span>계정이 없으신가요?</span>
        <Link to={"/signup"}>회원가입</Link>
      </div>
    </div>
  );
}

export default LoginPage;
