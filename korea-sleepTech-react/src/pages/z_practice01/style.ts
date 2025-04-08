// style.ts

import { css } from "@emotion/react";

export const container = css`
  max-width: 550px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  text-align: center;
`;

export const title = css`
  margin-bottom: 10px
`;

export const input = css`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const buttonsContainer = css`
  margin-bottom: 10px;
`;

export const button = css`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const todoList = css`
  list-style: none;
  padding: 0;
`;

export const todoItem = css`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const todoText = (completed: boolean) => css`
  cursor: pointer;
  text-decoration: ${completed ? 'line-through' : 'none'};
  color: ${completed ? '#888' : 'inherit'}
`;

export const deleteButton = css`
  color: red;
  background-color: none;
  border: none;
  cursor: pointer;
`;