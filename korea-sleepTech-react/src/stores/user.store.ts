//! 사용자 관리 예제

import { create } from "zustand";

//# user(회원) 데이터 정보 정의
interface User {
  id: number;
  name: string;
}

//# 전체 회원의 데이터에 대한 상태 정의
// : 저장소 상태 정의
// - 데이터(속성), 기능(메서드 - 추가, 수정, 삭제)
interface UserState {
  users: User[];

  addUser: (user: User) => void;
  updateUser: (id: number, name: string) => void;
  deleteUser: (id: number) => void;
}

//# 전체 회원에 대한 전역 상태 관리 - 스토어
export const useUsersStore = create<UserState>((set) => ({
  // 저장소 초기 데이터 설정
  users: [],

  addUser: (member) => set((state) => ({
    users: [...state.users, member]
  })),
  updateUser: (id, name) => set(state => ({
    users: state.users.map(user => user.id === id ? { ...user, name } : user )
  })),
  deleteUser: (id) => set(state => ({
    users: state.users.filter(user => user.id !== id)
  })),
}));