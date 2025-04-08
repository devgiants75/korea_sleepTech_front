/** @jsxImportSource @emotion/react */
// : Emotion의 css props를 사용하기 위한 선언
// - 해당 주석이 없으면 css={s.layout} 같은 방식이 작동하지 X

import React, { useRef, useState } from "react";
import * as s from "./LoginPageStyle";
// : Emotion으로 작성된 스타일 모듈 전체를 s라는 이름으로 불러옴

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
  const handleInputOnChange = () => {};

  const handleInputOnKeyDown = () => {};

  const handleLoginSubmitOnClick = () => {};

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
