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
    if (this.isAvailable) {
      // 대여 가능
      this.isAvailable = false;
      console.log(`${this.title} has been rented`);
    } else {
      console.log(`${this.title} is currently not available`);
    }
  }

  //? 책 반납 기능
  returnBook() {
    this.isAvailable = true;
    console.log(`${this.title} has been returned`);
  }
}

//? Library 클래스 
// : Book 객체 목록 관리 & 추가 기능 구현
class Library {
  constructor() {
    this.books = [];
    this.nextBookId = 1;
  }

  // cf) 클래스의 메서드 정의 시 : function 키워드 생략

  addBook(title, author) {
    const newBook = new Book(this.nextBookId, title, author);
    this.books.push(newBook);

    console.log(`${title} 책이 도서관에 추가되었습니다. (저자: ${author})`);
    this.nextBookId++;
  }

  displayBooks() {
    console.log('=== Library ===');
    this.books.forEach(book => {
      console.log(
        `${book.id}: ${book.title} by ${book.author} - ${book.isAvailable ? '대여 가능' : '대여 중'}`
      );
    })
  }

  //? 특정 id 책 대여 & 반납
  rentBook(id) {
    const book = this.books.find(book => book.id === id);

    if (book) {
      book.rentBook();
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }

  returnBook(id) {
    const book = this.books.find(book => book.id === id);

    if (book) {
      book.returnBook();
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }

  //? 특정 id의 책 정보 수정
  updateBook(id, newTitle, newAuthor) {
    // find메서드
    // : 배열에서 제공된 콜백함수를 만족하는 첫 번째 요소를 반환
    // : 만족하는 값이 없으면 undefined를 반환
    const book = this.books.find(book => book.id === id);

    if (!book) {
      console.log('해당 책을 찾을 수 없습니다.');
      return; // 메서드 종료
    }

    if (!newTitle.trim() && !newAuthor.trim()) { // 두 가지의 값이 모두 제공되지 않은 경우
      console.log('제목 또는 저자 중 하나는 반드시 수정되어야 합니다.');
      console.log('현재는 수정된 값이 없습니다.');
      return;
    }

    book.title = newTitle || book.title;
    book.author = newAuthor || book.author;
    console.log(`책 (id: ${id}) 정보가 업데이트되었습니다 : 제목 - ${book.title}, 저자 - ${book.author}`);
  }

  //? 특정 id의 책 정보 삭제
  removeBook(id) {
    const index = this.books.findIndex(book => book.id === id);

    if (index !== -1) {
      // let arr = [1, 2, 3];
      // arr.splice(1, 2);
      // : 1번 인덱스 요소부터 2개 삭제
      // >> [2, 3]
      const removedBook = this.books.splice(index, 1)[0]; // [삭제할 요소]
      console.log(`${removedBook.title} (id: ${removedBook.id}) 책이 도서관에서 삭제되었습니다.`);
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }
}

//! === 프로젝트 실행 ===
const busanLibrary = new Library();

busanLibrary.addBook('SQLD 공부는 재밌어', '이승아');
busanLibrary.addBook('자바 공부는 재밌어', '이도경');
busanLibrary.addBook('자바스크립트 공부는 재밌어', '이지희');
busanLibrary.addBook('리액트 공부는 재밌어', '이지훈');
busanLibrary.addBook('스프링 공부는 재밌어', '이승아');

busanLibrary.displayBooks();

busanLibrary.rentBook(1);
busanLibrary.displayBooks();
busanLibrary.rentBook(1);

busanLibrary.returnBook(1);
busanLibrary.displayBooks();

busanLibrary.updateBook(2, '자바 공부는 어려워', null);
busanLibrary.removeBook(3);
busanLibrary.displayBooks();