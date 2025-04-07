import axios from "axios";
import React, { useEffect, useState } from "react";

//! === Axios === //
// : JS에서 HTTP 요청을 실행하기 위한 라이브러리
// - Promise 기반의 HTTP 클라이언트, 브라우저와 node.js에서 모두 사용 가능

//# HTTP 통신 //
// : HyperText Transfer Protocol
// - 웹에서 데이터를 교환하는 주요 체계(규칙)
// - 클라이언트(브라우저)와 서버(백엔드)가 서로 데이터를 주고 받는 방식
// >> 요청(Request)과 응답(Response)의 형태로 데이터가 교환

//? cf) 프로토콜: 컴퓨터나 기기 간에 데이터를 교환할 때 지켜야 하는 규칙 체계

//& HTTP 통신의 기본 구조
//! 1) 요청(Request)의 구성
// : 클라이언트가 서버에게 보내는 정보
// - URL: 어디에 보낼지 (주소)
// - Method: 어떤 동작을 할 건지 (GET, POST 등)
// - Headers: 추가 정보들 (예: 인증 토큰)
// - Body: 보낼 데이터 (POST나 PUT 등에서 사용)

//! 2) 응답(Response)의 구성
// : 서버가 클라이언트에게 돌려주는 정보
// - Status Code: 결과 상태 (예: 200 성공, 404 없음)
// - Headers: 응답 정보 (예: 응답 형식)
// - Body: 실제 데이터 (예: JSON, HTML 등)

//& HTTP 메서드(Method)
// 1) GET: 데이터 가져오기
// 2) POST: 새 데이터 생성
// 3) PUT: 기존 데이터 수정
// 4) DELETE: 데이터 삭제

// cf) PATCH: 기존의 데이터에서 '일부 데이터'를 대체

//# Axios 장점
// : 간결한 API를 사용 (HTTP 요청과 응답 처리가 간결하고 직관적임)
// - 자동으로 JSON 데이터 변환을 지원

//# Axios 설치
// : npm install axios

// cf) axios 타입 정의 파일 설치
// : npm install --save-dev @types/axios

//! axios를 사용한 사용자 데이터 처리
// https://jsonplaceholder.typicode.com/

interface User {
  id: number;
  name: string;
  email: string;
}

function Index() {
  /*
    cf) fetch (JS 기본 내장 함수)
    fetch('https://example.com')
      .then(res => res.json())
      .then(data => console.log(data));
  
    ? 에러 처리가 복잡, 
      요청/응답 헤더 설정이 복잡
  */

  const [users, setUsers] = useState<User[] | null>(null);

  // 새로운 사용자 입력에 대한 상태 관리
  const [newUser, setNewUser] = useState<User>({
    id: 0,
    name: '',
    email: ''
  });

  // 수정될 데이터의 id를 담는 상태 관리
  const [editingUserId, setEditingUserId] = useState<number | null>(null);

  // 입력되는 input창의 체인지 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewUser({
      ...newUser,
      [name]: value
    });
  }

  // 전송 이벤트 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 기본 행위 방지

    if (editingUserId !== null) {
      // 수정될 사용자의 id값이 상태관리되고 있다면
      updateUser(editingUserId, newUser);
    } else {
      createUser(newUser);
    }
  }

  //# axios를 사용한 get 요청 (가져오다)
  const fetchUsers = async () => {
    try {
      //! axios의 메서드 사용 방법 (headers 정보는 제외)
      // - axios.get('url')
      // - axios.post('url', 저장할 데이터)
      // - axios.put('url', 수정할 데이터)
      // - axios.delete('url')

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = response.data; // axios 응답 내부의 데이터는 자동으로 객체 형 변환

      setUsers(data);
    } catch (e) {
      console.error("Error fetching data: ", e);
    }
  };

  //# axios를 사용하는 post 요청 (전송하다)
  const createUser = async (newUser: User) => {

  }
  
  //# axios를 사용하는 put 요청 (수정하다)
  const updateUser = async (id: number, updateUser: User) => {

  }

  useEffect(() => {
    fetchUsers();
  }, []); // 마운트 시에만 실행

  return (
    <div>
      <h1>리액트 HTTP 통신 라이브러리 (Axios)</h1>
      <h2
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        1. Axios Get
      </h2>
      {/* 
        users 데이터가 존재할 경우 UI 출력
        , 그렇지 않을 경우 p태그(데이터를 가져오는 중입니다.) 
      */}
      {/* 
      {users?.map(user => (
        <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))} 
       */}
      {users ? (
        users.map((user) => (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <p>데이터를 가져오는 중입니다.</p>
      )}

      <h2
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        2. Axios Post
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <button>{editingUserId ? "사용자 수정" : "사용자 추가"}</button>
      </form>
    </div>
  );
}

export default Index;
