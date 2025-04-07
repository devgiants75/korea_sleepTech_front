// auth.store.ts

import { create } from "zustand";

//? auth: 인증(authentication)

//# 사용자 인증을 관리하는 스토어
interface AuthState {
  user: string | null; // 로그인 되어 있지 않은 경우 null 값 저장
  isLogged: boolean;
  login: (user: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  user: null,
  isLogged: false,
  // user 변수에 '이승아'가 전달
  // >> user: '이승아' (key: value)
  login: (user) => set({ user, isLogged: true }), 
  logout: () => set({ user: null, isLogged: false }),
}));