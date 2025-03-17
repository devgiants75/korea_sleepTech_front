// review02.js

//# 장바구니 시스템 정의 //

//! === 프로그램 데이터 정의 ===
// 장바구니
// 1) id - 상품의 고유 식별자 (숫자)
// 2) name - 상품 이름 (문자)
// 3) price - 가격 (숫자)
// 4) quantity - 사용자가 선택한 해당 상품의 수량

/*
let product = {
  id: 1,
  name: 'banana',
  price: 6900,
  quantity: 2
}
*/

//! === 프로그램 기능 정의 ===
// 장바구니의 각 제품에 대한 CRUD(추가, 조회, 수정, 삭제)

// cf) 추가 기능: 장바구니에 이미 존재하는 상품이면 수량 업데이트
//      수정 기능: 특정 상품의 수량 업데이트

//! === 프로그램 구현 ===

let cart = [];

//? 1) 장바구니에 상품 추가
function addToCart(id, name, price, quantity) {
  // 장바구니 내에 상품이 존재하는 지 검색
  // : findIndex
  // : 배열 내에 동일한 요소 검색 - 있으면 index 반환 / 없으면 -1 반환
  const index = cart.findIndex(item => item.id === id);

  if (index > -1) {
    // 상품이 이미 장바구니에 있을 경우
    cart[index].quantity += quantity; // 이미 2개가 존재하고 1개를 추가: 총 3개
  } else {
    // 상품이 장바구니에 없을 경우
    cart.push({ id, name, price, quantity }); // 새 상품을 장바구니에 추가
  }

  displayCart();
}

//? 2) 장바구니 내의 모든 상품을 조회
function displayCart() {
  console.log('=== Cart Contents ===');
  cart.forEach(item => {
    console.log(`${item.name} - Price: $${item.price}, Quantity: ${item.quantity}`);
    console.log(`Total ${item.name}'s Price: $${item.price * item.quantity}`);
  })
}

//? 3) 특정 상품의 수량을 변경하는 함수
function updateQuantity(id, quantity) {
  const index = cart.findIndex(item => item.id === id);

  if (index > -1 && quantity > 0) {
    // 상품이 존재하고 수량이 0보다 크면: 상품 업데이트
    cart[index].quantity += quantity;
  } else {
    console.log('유효하지 않은 상품이거나 수량이 0보다 커야 합니다.');
  }

  displayCart();
}

//? 4) 특정 상품을 삭제하는 함수
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  displayCart();
}

//? 5) 장바구니의 총합을 계산하는 함수
// : reduce()함수
// 배열.reduce((acc, value, index, array) => { ... }, initialValue);
function calculateTotal() {
  let total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  }, 0)
  console.log(`Cart Total Price: $${total}`);
}

// function calculateTotal() {
//   let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
// }

//? 6) 장바구니 전체 상품을 삭제하는 함수
function clearCart() {
  cart = [];
  console.log('Cart is empty!');
  displayCart();
}

//! === 장바구니 시스템 사용 ===
addToCart(1, 'banana', 3000, 3);
addToCart(2, 'orange', 2000, 1);

updateQuantity(1, 5);

removeFromCart(1);

addToCart(3, 'mango', 4000, 2);

calculateTotal(); // Cart Total Price: $10000

clearCart(); // Cart is empty!