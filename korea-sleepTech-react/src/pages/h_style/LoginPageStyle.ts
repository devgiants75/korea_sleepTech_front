// LoginPageStyle.ts

import { css } from "@emotion/react";

//! 전체 레이아웃 컨테이너 스타일
export const layout = css`
  box-sizing: border-box;
  display: flex; /* flex 컨테이너 생성 */
  flex-direction: column; /* 주축을 세로 방향 지정 */
  align-items: center; /* 가로 중앙 정렬 */
  margin-top: 100px;
  width: 100%;
`;

//! 메인 영역 스타일 (입력폼 영역)
export const main = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 1px solid #dbdbdb;
  padding: 40px;
  width: 400px;
`;