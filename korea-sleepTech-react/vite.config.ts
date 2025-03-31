import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/

//? npm install --save-dev @types/node
// : vite.config.ts는 Node.js 환경에서 실행
// >> 오류가 난 이유) TypeScript가 Node.js 내장 모듈(path, fs 등)을 타입 정보 부족으로 인식 X
// >> 해결 방법) Node.js 타입 정의 설치
//              : npm install --save-dev @types/node

// +) tsconfig.app.json 에도 경로 설정 추가!!!

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // @ 기호를 src 폴더로 인식
    }
  }
})
