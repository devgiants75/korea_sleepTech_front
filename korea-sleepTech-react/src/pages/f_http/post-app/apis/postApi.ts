// postApi.ts
// : Axios 요청 모듈

import axios from "axios";

//# axios.create()
// : 커스텀 Axios 인스턴스를 생성하는 함수
// - 기본 axios를 사용하는 대신
//    , 프로젝트 전반에서 공통적으로 사용하는 설정을 미리 지정 가능
//    , 반복 코드 없이 깔끔하게 API 요청 가능

//! 1) 기본 형태
// const instance명 = axios.create(config);

//? cf) config: 다양한 설정을 담은 '객체'

const postApi = axios.create({
  // 모든 요청의 기본 주소(URL) 지정
  // : 이후 API 호출 시, baseURL 뒤에 붙는 경로만 지정하면 전체 URL이 자동 완성
  // - 중복된 도메인의 반복을 줄임
  // - 추후 API 주소가 변경되어도 baseURL 하나만 수정하면 전체 수정 가능
  baseURL: "https://jsonplaceholder.typicode.com",

  // 요청 헤더를 기본 지정
  // : '내가 보내는 데이터는 JSON 형식임'을 알려주는 역할
  headers: {
    // 보내는 데이터의 형식
    "Content-Type": "application/json",

    // "Authorization": "인증 토큰(Bearer token)"
  }
});

// : postApi.get("/posts")
// >> axios.get("https://jsonplaceholder.typicode.com/posts")

export default postApi;