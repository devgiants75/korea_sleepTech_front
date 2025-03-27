// main.ts

//! JSONPlaceholder의 photos 데이터 사용
// https://jsonplaceholder.typicode.com/photos

//# == 요구사항 정리 ==
// 1. 각 페이지에 photos 데이터의 사진 4개씩 첨부 (img 태그)
// : 50개의 데이터를 각 페이지에 4개씩 첨부 
// : 50 === (4 * 12) + 2

// 2. 각 사진의 이름(title)은 사진 아래 작성 (p태그)

// 3. 페이지 간 이동은 버튼(Previous, Next)으로 이동

//# == 코드 작성 ==

type PhotoType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

let currentPage = 1; // 현재 페이지 번호를 추적 (기본값 1: 첫 페이지)
const photoPerPage = 4; // 한 페이지에 표시할 사진의 수

async function fetchPhotos(page: number) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`);

    if (!response.ok) {
      throw new Error('데이터를 가져오지 못했습니다.');
    }

    const photos: PhotoType[] = await response.json();

    //? slice(시작인덱스, 끝인덱스)
    // : 배열 메서드, 특정 부분을 새로운 배열로 반환
    // : 시작인덱스 <= x < 끝인덱스

    // 1 페이지: 0 ~ 3 인덱스
    // 2 페이지: 4 ~ 7 인덱스
    // ...

    // (page - 1) * photoPerPage: 시작 인덱스
    // page * photoPerPage: 끝 인덱스

    return photos.slice((page - 1) * photoPerPage, page * photoPerPage);
  } catch (error) {
    console.error('Failed');
    return [];
  }
}

//? 사진을 랜더링 하는 함수: 4개씩 나누어진 사진 배열을 매개변수로 받음
function renderPhotos(photos: PhotoType[]) {
  const container = document.getElementById('photo-container') as HTMLElement;

  container.innerHTML = '';

  // 각 사진에 대한 HTML 요소 생성
  photos.forEach(photo => {
    const photoElement = document.createElement('div');
    photoElement.className = 'photo-item';
    photoElement.innerHTML = `
      <img src='${photo.thumbnailUrl}' alt='${photo.title}' />
      <p>${photo.title}</p>
    `;
    container.appendChild(photoElement);
  })
}

//! 버튼 이벤트 등록
document.getElementById('prev-button')!.addEventListener('click', () => {
  // 이벤트가 등록될 DOM 요소에 대한 단언: ! 기호
  if (currentPage > 1) {
    currentPage--;
    updatePhotos();
  }
});

document.getElementById('next-button')!.addEventListener('click', () => {
  currentPage++;
  updatePhotos();
});

//? 전체 프로젝트 실행
async function updatePhotos() {
  const photos = await fetchPhotos(currentPage);

  renderPhotos(photos);
}

updatePhotos();