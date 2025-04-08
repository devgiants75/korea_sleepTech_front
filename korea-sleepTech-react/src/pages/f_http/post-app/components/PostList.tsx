import React, { useEffect, useState } from 'react'
import { Post } from '../types/Post'
import postApi from '../apis/postApi';

//! === 게시글 목록 & 삭제 ===
function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const res = await postApi.get("/posts?_limit=5"); // 임시로 5개만
    setPosts(res.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  //# Event Handler #//
  const handleEdit = (id: number) => {
    localStorage.setItem('editingPostId', String(id));
  }

  const handleDelete = async (id: number) => {
    await postApi.delete(`/posts/${id}`);
    alert("삭제 완료");
    fetchPosts();
  }

  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            {/* 
              post.id!
              : typescript 컴파일러에게 개발자가 null, undefined가 아님을 단언!
              >> id값이 Post 타입에서 옵셔널
            */}
            <button onClick={() => handleEdit(post.id!)}>수정</button>
            <button onClick={() => handleDelete(post.id!)}>삭제</button> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList