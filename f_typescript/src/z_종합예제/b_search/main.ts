// main.ts
export const tmp = '';

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