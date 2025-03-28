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
}