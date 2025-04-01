import React, { useRef, useState } from "react";

//! === 장바구니 구현 === //
// : 배열 렌더링 (추가, 조회, 수정, 삭제 - CRUD)
// - 해당 과정에서 배열 내부의 각 요소를 구분짓는 id값을 포함한 객체

//? 장바구니 타입 정의
interface IItem {
  id: number; // 제품 고유 번호
  name: string; // 제품명
  amount: number; // 수량
}

//? 기존 장바구니 목록
const initialItems: IItem[] = [
  { id: 1, name: "사과", amount: 2 },
  { id: 2, name: "칸쵸", amount: 3 },
  { id: 3, name: "우유", amount: 1 },
];

//& 자식 컴포넌트
// : 장바구니 항목 1개
// - 부모로 부터 각 아이템 데이터를 인자로 받아 하나의 장바구니 항목을 생성

interface IItemProps {
  item: IItem;
  // 장바구니 수정: 수정할 고유 아이템의 id값, 수정할 수량 데이터
  // >> 전체 장바구니 순회 + 매개변수의 id와 일치하는 제품의 수량을 변경
  onUpdate: (id: number, amount: number) => void;
  // 장바구니 삭제: 삭제할 고유 아이템의 id값
  // >> 전체 장바구니 순회 + 매개변수의 id와 일치하지 않는 제품만 새로운 배열에 저장
  onRemove: (id: number) => void;
}

function Item({ item, onUpdate, onRemove }: IItemProps) {
  return (
    <div>
      <b>{item.name} </b>- amount: {item.amount}
      <input
        type="number"
        value={item.amount}
        onChange={(e) => onUpdate(item.id, Number(e.target.value))}
      />
      <button onClick={() => onRemove(item.id)}>삭제</button>
    </div>
  );
}

//& 부모 컴포넌트
function Practice() {
  const [items, setItems] = useState<IItem[]>(initialItems);
  const nextId = useRef<number>(4);

  const handleCreateItem = (name: string, amount: number) => {
    const newItem = {
      id: nextId.current,
      name,
      amount,
    };
    setItems([...items, newItem]);
    nextId.current++; // items(상태 변수)의 변경 여부와 상관없이 값이 유지
  };

  const handleUpdateAmount = (id: number, amount: number) => {
    // 전체 배열을 순회하여 각 차례의 아이템의 id와 매개변수의 id가
    // 1) 일치한다면: 새로운 객체에 전체 속성을 가져와 amount값만 수정
    // 2) 일치하지 않는다면: 해당 아이템 그대로 반환

    // >> 변경된 배열을 상태 설정 함수의 인자로 전달
    setItems(
      items.map((item) => (item.id === id ? { ...item, amount } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    // 전체 배열을 순회하여 각 차례의 아이템의 id와 매개변수의 id가
    // , 일치하지 않는 요소들만 새로운 배열에 담아 반환

    // >> 변경된 배열을 상태 설정 함수의 인자로 전달
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div
      style={{
        backgroundColor: "lightblue",
      }}
    >
      {/* 
      <Item item={initialItems[0]} />
      <Item item={initialItems[1]} />
      <Item item={initialItems[2]} /> 
      */}
      <hr />
      <button onClick={() => handleCreateItem('새로운 항목', 1)}>새 항목 추가</button>
      {items.map((item) => (
        // map, filter처럼 배열을 순회하는 메서드 사용 시
        // : 생성되는 컴포넌트 또는 요소에 각각을 구분할 수 있는 key값을 전달
        // >> key값은 각 요소를 분리할 수 있는 고유값 지정을 권장!!
        // <Item item={item} key={index} />
        <Item
          item={item}
          key={item.id}
          onRemove={handleRemoveItem}
          onUpdate={handleUpdateAmount}
        />
      ))}
      <hr />
    </div>
  );
}

export default Practice;
