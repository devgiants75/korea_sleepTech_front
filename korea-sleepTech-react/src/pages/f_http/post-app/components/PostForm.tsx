import React, { useEffect, useState } from "react";
import { Post } from "../types/Post";
import postApi from "../apis/postApi";

//! === 글 작성/수정 폼 ===
function PostForm() {
  const storedId = localStorage.getItem("editingPostId");

  //# HOOKS #//
  const [inputValue, setInputValue] = useState<Post>({
    title: "",
    body: "",
  });
  const { title, body } = inputValue;

  useEffect(() => {
    const fetchPost = async () => {
      if (storedId) {
        try {
          const res = await postApi.get(`/posts/${storedId}`);
          const post = res.data; // 응답 내부의 데이터 추출

          setInputValue({
            title: post.title,
            body: post.body,
          });
        } catch (error) {
          console.error("게시글 조회 실패: ", error);
        }
      }
    }

    fetchPost();
  }, [storedId]);

  //# Event Handler #//
  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    //? 화살표 함수 사용할 때 객체 반환 시 반드시 ()소괄호로 감싸서 반환!
    setInputValue(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    try {
      if (storedId) {
        // 수정(UPDATE)
        await postApi.put(`/posts/${storedId}`, { title, body });
        alert("수정 완료");
        localStorage.removeItem("editingPostId");

      } else {
        if (title.trim() && body.trim()) {
          // 생성(CREATE)
          await postApi.post("/posts", { title, body });
          alert("등록 완료");
        } else {
          alert("제목과 내용을 반드시 작성해주세요.");
        }
      }

      setInputValue({
        title: '',
        body: ''
      });

    } catch (error) {
      console.error("요청 실패: ", error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  }

  return (
    <div>
      <h2>{storedId ? "게시글 수정" : "게시글 작성"}</h2>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleInputValueChange}
        placeholder="제목"
      />
      <br />
      <textarea 
        name="body"
        value={body} 
        onChange={handleInputValueChange} 
        placeholder="내용" 
      />
      <br />
      <button onClick={handleSubmit}>{storedId ? "수정하기" : "등록하기"}</button>
    </div>
  );
}

export default PostForm;
