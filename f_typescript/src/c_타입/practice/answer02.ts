// answer02.ts
export const tmp = '';

//# 사용자 데이터를 요청하는 로직

//! 1. 사용자의 데이터에 대한 응답 정의 (타입 별칭)
type Success = {
  name: string;
  email: string;
}

type Fail = {
  error: string;
}

type FetchResponse = Success | Fail;

//! 2. 사용자의 데이터 요청에 대한 '응답을 처리'하는 함수 정의
function handleResponse(response: FetchResponse) {
  // 성공 또는 실패의 데이터를 처리하는 함수

  // in 연산자
  // : '속성' in 객체명
  // - 해당 속성이 객체에 있는지 여부를 boolean 타입으로 반환
  if ('error' in response) {
    console.error(response.error);
  } else {
    console.log(`Name: ${response.name}, Email: ${response.email}`);
  }
}

//! 3. 비동기 작업을 사용하여 JSONPlaceholder에서 '사용자 데이터'를 가져오는 함수 정의
async function fetchUserData(userId: number) {
  // https://jsonplaceholder.typicode.com/users
  // : 사용자 10명의 데이터 반환
  
  // https://jsonplaceholder.typicode.com/users/${userId}
  // : 특정 id(userId) 사용자 데이터 반환

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    // : fetch 함수: 해당 경로를 통해 데이터를 가져와 Response 객체를 응답하는 함수

    if (!response.ok) {
      throw new Error('네트워크 응답이 실패하였습니다.');
    }

    const data = await response.json(); // 객체 형식으로 데이터 반환

    if (data.id) {
      const userData: FetchResponse = {
        // 좌항: userData 객체의 속성
        // 우항: fetch로 가져온 데이터
        name: data.name,
        email: data.email
      };

      handleResponse(userData);
    } else {
      // 존재하지 않은 사용자인 경우
      handleResponse({ error: '사용자 데이터가 정확하지 않습니다.' });
    }

  } catch (e) {
    // Fail 타입 

    // A instanceof B 연산자
    // : A 데이터가 B 안에 포함되어 있는지 여부를 확인

    handleResponse({ error: e instanceof Error ? e.message : 'Unknown Error' });
  }
}

fetchUserData(1);
fetchUserData(2);
fetchUserData(222); // 네트워크 응답이 실패하였습니다.
// fetchUserData('안녕');