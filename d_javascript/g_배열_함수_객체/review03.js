// review03.js

//# 도서관 관리 시스템 //
// : 도서관의 책 관리 시스템을 구현

//! === 프로젝트 데이터 정의 ===
// 1) 도서관 - 객체
// 속성: 여러 도서
// 기능
// - 도서 추가
// - 도서 목록 출력
// - (특정) 도서 대여
// - (특정) 도서 반납

// 2) 도서(책) - 객체
// 속성: 책 고유 ID, 책 제목, 책 저자, 책 대여 가능 여부


let exampleLibrary = {
  books: [], // 도서관의 책 목록을 저장

  // 다양한 메서드 정의
}

let exampleBook = {
  id: 1,
  title: '책 제목',
  author: '책 저자',
  isAvailable: true // 기본값
}

//! === 프로젝트 구현 ===
//? Book 클래스: 각 책의 정보 저장 & 대여 및 반납 기능 정의
class Book {
  // let id;
  // let title;
  // let author;
  // let isAvaible;

  // 생성자 함수(메서드)
  constructor(id, title, author) {
    // 생성자 함수에서 this키워드로 속성 정의되는 값은 필드로 정의!
    this.id = id;
    this.title = title;
    this.author = author;
    this.isAvailable = true; 
  }

  //? 책 대여 기능
  rentBook() {

  }

  //? 책 반납 기능
  returnBook() {

  }
}