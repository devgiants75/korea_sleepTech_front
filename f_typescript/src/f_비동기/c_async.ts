// c_async.ts
export const tmp = '';

//! Async & Await
// : 프로미스를 기반으로 비동기 작업을 간편하게 작성하는 방법
// - async 함수 내에서 await 키워드를 사용하여 비동기 코드 작성 (async 함수 내에서만 await 사용 가능!!)
// - 동기 코드와 유사한 형태로 비동기 코드 작성 

async function fetchUserData() {
  // fetch('url'): 'url'의 경로로 데이터를 가져오다
  // >> 외부 프로세스와의 연결 시 발생할 오류 방지 (try - catch와 함께 쓰임)

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    // Promise 객체: 연산 결과에 따라 성공 또는 실패의 상태를 가짐
    
    // cf) fetch('url'): 해당 url을 통해 서버에 데이터를 요청하고 반환된 응답을 Promise 형태로 가져옴
    //    >> Promise가 성공의 상태를 가질 경우 Response 객체를 반환 (요청에 대한 결과값)

    if (!response.ok) {
      throw new Error('데이터를 가져오는 데 실패하였습니다.')
    }

    const data = await response.json(); // 비동기 처리로 가져오는 데이터를 활용할 경우 반드시 비동기 처리!

    console.log(`가져온 데이터: ${data}`, data);
    // cf) 객체와 배열은 템플릿 리터럴(${}) 내부에서 출력 할 경우, 데이터 그 자체가 출력되지 X

  } catch (error) {
    // cer
    console.error('데이터 요청 중 오류: ', error);
  }
}

fetchUserData();
console.log('비동기 처리 이후 실행 될 로직');