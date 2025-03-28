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
    // 요소에 사용자 지정 속성을 지정
    // : HTML에서 제공하는 속성 외에 커스텀 속성을 생성
    userCard.dataset.userId = user.id.toString();

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
        // >> 클릭이 발생한 요소는 card 내부의 h2, p태그가 될 가능성이 존재

        // 이벤트가 발생한 요소와 가장 가까운(closest) .user-card 요소를 반환
        const userCard = target.closest('.user-card') as HTMLElement | null;

        if (userCard) {
          const userId = parseInt(userCard.dataset.userId || '0', 10);
          // users 배열에서 userId와 일치하는 사용자 객체 반환
          const user = users.find(u => u.id === userId);
          if (user) {
            showModal(user);
          }
        }
      })
    }

    const modal = document.getElementById('user-modal') as HTMLElement;
    const closeModal = document.querySelector('.close') as HTMLElement;

    if (modal && closeModal) {
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      // 브라우저 전체를 DOM 요소로 반환(브라우저 탭의 전체 여역)
      // <=> document: window에 로드되는 HTML 문서 그 자체
      window.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
  };

  //!
  const init = async(): Promise<void> => {
    const users = await fetchUsers();
    displayUsers(users);
    addEventListener(users);
  }

  document.addEventListener('DOMContentLoaded', init);
}