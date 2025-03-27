{
  // JSONPlaceholder에서 사용자 데이터 가져옴
  interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  // 전체 사용자 데이터 관리 (배열)
  type Users = IUser[];

  //# 비동기적으로 사용자 데이터를 가져오는 함수
  // @Params
  // - page: 현재 출력되는 페이지
  // - limit: 한 페이지 당 출력되는 사용자 데이터의 개수 (기본값 3개)
  const fetchUsers = async (page: number, limit: number = 3) => {
    try {
      //? JSONPlaceholder의 옵션
      // : _page 옵션: 대량의 데이터 호출 시 특정 페이지 데이터만 가져옴
      // : _limit 옵션: 데이터 조회 시 한 번에 가져올 항목의 최대 수를 지정
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`);

      // _page 값부터 _page * _limit 값의 데이터까지 반환
      // page 1: 1, 2, 3
      // page 2: 4, 5, 6
      // page 3: 7, 8, 9 ...

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const users: Users = await response.json();

      return users;
    } catch (error) {
      console.error('Fetch error: ', error);
      return [];
    }
  };

  //# 각 데이터가 나열될 카드를 동적으로 생성하는 함수
  // @Params
  // - IUser 타입의 객체 데이터
  const createUserCard = (user: IUser): HTMLElement => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';

    userCard.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Username: </strong> ${user.username}</p>
      <p><strong>Email: </strong> ${user.email}</p>
    `;

    return userCard;
  }


  //# 생성된 카드를 화면에 출력하는 함수
  // @Params: 사용자 배열을 전달
  const diplayUsers = (users: Users) => {
    const userList = document.getElementById('user-list');

    if (userList) {
      userList.innerHTML = '';

      users.forEach(user => {
        const userCard = createUserCard(user);
        userList.appendChild(userCard);
      })
    }
  }

  // 현재 페이지 수를 기본값 1로 설정
  let currentPage = 1;

  //# 현재 페이지 정보를 수정하는 함수
  const updatePageInfo = () => {
    const pageInfo = document.getElementById('page-info');

    if (pageInfo) {
      pageInfo.textContent = `Page ${currentPage}`;
    }
  }

  //# 비동기적으로 데이터를 가져와서 각 페이지별 카드 생성 + 출력하는 함수
  const loadPage = async (page: number) => {
    const users = await fetchUsers(page);

    // 현재 페이지에 해당하는 3개(기본값)의 데이터를 displayUsers에 전달
    diplayUsers(users);

    updatePageInfo();
  }

  //# addEventListeners 함수: 이벤트 리스너 추가
  const addEventListeners = () => {
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');

    if (prevPageButton && nextPageButton) {
      prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          loadPage(currentPage);
        }
      });

      nextPageButton.addEventListener('click', () => {
        currentPage++;
        loadPage(currentPage);
      })
    }
  }

  const init = () => {
    addEventListeners();
    loadPage(currentPage);
  }

  document.addEventListener('DOMContentLoaded', init);
}