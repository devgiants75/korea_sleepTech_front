// main.ts
{

// https://jsonplaceholder.typicode.com/users

//# == 비동기를 사용한 사용자 정보 조회 & 검색, 필터링 기능 ==//

//! 1) User 인터페이스 정의
// : 사용자 정보 지정
interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

//! 2) Users 타입별칭 정의
// : 사용자 정보를 저장할 배열 타입
type UsersType = IUser[];

//! 3) 사용자 정보를 외부 API에서 가져오는 비동기 함수
// @Params: X
// @Return: 외부 API에서 받아온 객체 정보를 반환 (Promise<UsersType>)
const fetchUsers = async (): Promise<UsersType> => {
  //? Promise.resolve(value)
  // : async 함수는 내부에서 어떤 값을 반환(return)하든 
  //   , 자동으로 Promise.resolve(어떤 값)로 감싸서 반환
  
  // cf) Promise의 반환 - 성공(resolve), 실패(reject)
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const users: UsersType = await response.json();
    return users;

  } catch (error) {
    console.error('Fetch error: ', error);
    return [];
  }
}

// async function(): 반환타입 {}

//! 4) 사용자 정보를 받아 HTML 요소를 생성하는 함수
// @Params: user - IUser 타입
// @Return: HTMLElement 타입
const createUserCard = (user: IUser): HTMLElement => {
  const userCard = document.createElement('div');
  userCard.className = 'user-card';

  userCard.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Username: </strong>${user.username}</p>
    <p><strong>Email: </strong>${user.email}</p>
  `;

  // const titleH2 = document.createElement('h2');
  // titleH2.textContent = `${user.name}`;
  // userCard.appendChild(titleH2);

  return userCard;
}

//! 5) 사용자 정보 배열을 받아 화면에 표시하는 함수(createUserCard에 각 객체 전달)
// @Params: users - UsersType 타입
// @Return: X - void 타입
const displayUsers = (users: UsersType) => {
  const userList = document.getElementById('user-list'); 
  // const userList: HTMLElement | null
  
  if (userList) { // userList가 null이 아니라면
    userList.innerHTML = ''; // const userList: HTMLElement

    users.forEach(user => {
      const userCard = createUserCard(user);
      userList.appendChild(userCard);
    })
  }
}

//! 6) 사용자 정보를 필터링하는 함수
// : 사용자로부터 입력받은 검색어를 사용해 
//   , 사용자의 이름, 사용자명, 이메일 중 하나라도 포함된 경우 출력
// @Params: users - UsersType 타입 (전체 사용자 데이터)
//          , query - string 타입 (필터링할 검색어)
// @Return: UsersType 타입 (필터링 된 사용자들의 데이터)
const filterUsers = (users: UsersType, query: string): UsersType => {
  return users.filter(user => 
    user.name.toLowerCase().includes(query.toLowerCase())
    || user.username.toLowerCase().includes(query.toLowerCase())
    || user.email.toLowerCase().includes(query.toLowerCase())
  );
}

//! 7) 사용자 정보를 정렬하는 함수
// Name 또는 Email을 기준으로 정렬 (오름차순)
// @Params: users - UsersType 타입 (사용자 정보)
//          , key - 'literal 타입' (정렬 키워드를 저장)
// @Return: UsersType 타입 (정렬된 데이터)
const sortUsers = (users: UsersType, key: 'name' | 'email'): UsersType => {
  // 지정된 키(name | email)를 기준으로 사용자 정보 정렬

  //? [...users]
  // : 새로운 배열 주소값!에 기존의 사용자 데이터(요소)만 복사해서 가져옴
  // - 깊은 복사
  // - 배열의 불변성을 보완

  //? 배열.sort()
  // : 배열의 요소를 정렬할 때 사용
  // - 콜백함수를 인자로 받음 (콜백함수의 인자는 비교할 데이터를 2가지 입력)
  
  // cf) 현재 a, b 데이터는 객체 (IUser 인터페이스 타입)
  // - key가 'name'으로 전달되는 경우
  // - 각 데이터들의 name값을 비교
  // a[name].localeCompare(b[name])

  //? 문자열.localeCompare(문자열)
  // : 비교 함수
  // - 문자열을 비교하는 메서드 (알파벳 순 정렬에 유용)
  // - 반환값
  //   -1: 기준 문자열(a)이 비교 문자열(b)보다 앞에 있음
  //    0: 두 문자열이 같음
  //    1: 기준 문자열이 비교 문자열보다 뒤에 있음

  return [...users].sort((a, b) => a[key].localeCompare(b[key]));
}

//! 8) 이벤트 리스너 추가 함수
// @Params: users - UsersType 타입 
// @Return: X
const addEventListener = (users: UsersType): void => {
  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  const sortSelect = document.getElementById('sort-select') as HTMLSelectElement;

  searchInput.addEventListener('input', () => { // 입력값에 대해 필터링 & 정렬
    const query = searchInput.value;
    const filteredUsers = filterUsers(users, query);

    // 필터링된 데이터를 정렬
    // const sortKey = sortSelect.value; // const sortKey: string
    const sortKey = sortSelect.value as 'name' | 'email'; // const sortKey: "name" | "email"
    const sortedUsers = sortUsers(filteredUsers, sortKey);

    displayUsers(sortedUsers);
  });

  sortSelect.addEventListener('change', () => { // 선택 옵션에 대해 필터링 & 정렬
    const query = searchInput.value;
    const filteredUsers = filterUsers(users, query);

    const sortKey = sortSelect.value as 'name' | 'email';
    const sortedUsers = sortUsers(filteredUsers, sortKey);

    displayUsers(sortedUsers);
  });
}

//! 9) 초기화 함수
// : 사용자 데이터를 가져와 화면에 표시 + 이벤트 리스너를 설정
const init = async (): Promise<void> => {
  const users = await fetchUsers();

  displayUsers(users);
  addEventListener(users);
}

// function(): void {}

document.addEventListener('DOMContentLoaded', init);
}