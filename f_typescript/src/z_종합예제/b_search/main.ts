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
// @Return: 외부 API에서 받아온 객체 정보를 반환 (Promise<Users>)