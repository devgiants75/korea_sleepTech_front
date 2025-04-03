import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

//! === useSearchParams 사용 예제 ===

type Post = {
  id: number;
  title: string;
  body: string;
}

function Posts() {
  //! useSearchParams
  // : 현재 위치의 쿼리 매개변수(쿼리 문자열)에 대한 데이터를 읽고 수정하는 데 사용되는 React Router Dom의 훅

  // <Link to='/router-practice/posts?userId=1'>1번 유저 게시글</Link>
  //? 쿼리 파라미터
  // : 경로값 외에 '키=값'의 형태로 데이터를 전송하는 방법
  // 경로값?키=값 

  const [searchParams] = useSearchParams();
  //? 쿼리 파라미터값 추출
  // useSearchParams 반환 배열 요소
  // : .get('키');
  const userId = searchParams.get('userId');

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = userId ? `?userId=${userId}` : '';

      // jsonplaceholder 쿼리 파라미터 검색
      // : URL경로?검색속성=속성값
      // EX) ?title=hello

      const res = await fetch(`https://jsonplaceholder.typicode.com/posts${query}`);

      const data = await res.json();

      setPosts(data);
    }

    fetchPosts();
  }, [userId]);

  return (
    <div>
      {/* 
        JSX 문법: null 병합 연산자 ??
        const result = A ?? B;

        >> A가 null 또는 undefined 일 경우에만 B값을 사용
          : A가 0, '', false 와 같은 falsy(false가 될 수 있는)값이더라도 그대로 사용
      */}
      <p>필터: userId = {userId ?? '없음'}</p>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts