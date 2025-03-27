// mainAnswer.ts

const fetchButton = document.getElementById('fetchUserData');

// cf) 지정한 선택자가 해당 문서에 존재하지 않을 경우 null 값 반환
// : 해당 요소가 존재하지 않을 경우 null값에 대한 오류 방지를 위해
//   , ? 옵셔널 기호를 사용

// A?.~~
// : A가 존재할 경우 뒤의 기능이 실행, 존재하지 않을 경우 실행되지 않음
fetchButton?.addEventListener('click', async () => {
  //! DOM 요소 가져오기
  const userDataDiv = document.getElementById('userData');
  const userIdElement = document.getElementById('userId') as HTMLInputElement;

  const userId = userIdElement ? userIdElement.value : '';

  const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

  if (userDataDiv) {
    userDataDiv.innerHTML = `<p>Loading user data</p>`;

    try {
      const fetchResponse = await fetch(apiUrl);

      if (!fetchResponse.ok) {
        throw new Error('사용자 데이터에 접근할 수 없습니다.');
      }

      const user = await fetchResponse.json();

      userDataDiv.innerHTML = `
        <h2>User Details</h2>
        <p>Id: ${user.id}</p>
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address.street}</p>
      `;

    } catch (error) {
      userDataDiv.innerHTML = `<p>${error}</p>`;
    }
  }
});