{
  // main.ts

  // https://jsonplaceholder.typicode.com/users

  //# 사용자 데이터를 비동기로 가져오고, 모달 창을 통해 세부정보 출력

  //! 1) 사용자 정보 정의 - 인터페이스
  interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  }

  //! 2) 전체 사용자 관리 배열 - 타입 별칭
  type UsersType = IUser[];

  //! 3) 사용자 정보 요청 함수 (async, await - fetch 함수)
  const fetchUsers = async (): Promise<UsersType> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const users: UsersType = await response.json();
      return users;

    } catch (e) {
      console.error('Fetch Error: ', e);
      return [];
    }
  }

  //! 4) 사용자 각각의 정보를 요소로 생성
  const createUserCard = (user: IUser): HTMLElement => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    userCard.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Username: </strong>${user.username}</p>
      <p><strong>Email: </strong>${user.email}</p>
    `;
    return userCard;
  }

  //! 5) 사용자 정보를 화면에 출력
  // : 전체 사용자를 전달받아 각각 요소로 생성
  const displayUsers = (users: UsersType): void => {
    const userList = document.getElementById('user-list');

    if (userList) {
      userList.innerHTML = '';
      users.forEach(user => {
        const userCard = createUserCard(user);
        userList.appendChild(userCard);
      })
    }
  }

  //! 6) 사용자 정보를 받아 모달 창에 표시하는 함수
  const showModal = (user: IUser): void => {
    const modal = document.getElementById('user-modal');
    const modalContent = document.getElementById('modal-user-details');
    
    if (modal && modalContent) {
      modalContent.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Username: </strong>${user.username}</p>
        <p><strong>Email: </strong>${user.email}</p>
        <p><strong>Phone: </strong>${user.phone}</p>
        <p><strong>Website: </strong>${user.website}</p>
      `;

      modal.style.display = 'block'; // 모달 창 표시
    }
  }

  //! 7) 사용자 리스트에 이벤트 리스너를 추가하는 함수
  const addEventListener = (users: UsersType) => {
    const userList = document.getElementById('user-list') as HTMLElement;

    if (userList) {
      userList.addEventListener('click', (e) => {
        //? cf) target VS currentTarget
        // - target: 이벤트가 처음 발생한 DOM 요소(클릭이 일어난 요소)
        // - currentTarget: 발생한 이벤트가 등록된(이벤트 핸들러가 바인딩 된) DOM 요소
        const target = e.target as HTMLElement;
        
        //
      })
    }
  }

  //!
  const init = async(): Promise<void> => {
    const users = await fetchUsers();
    displayUsers(users);
  }

  document.addEventListener('DOMContentLoaded', init);
}