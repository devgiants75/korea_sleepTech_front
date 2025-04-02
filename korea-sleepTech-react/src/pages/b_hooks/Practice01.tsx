import React, { useEffect, useRef, useState } from 'react'

//! 간단한 사진 캡쳐 & 표시 기능
// : 웹캠으로 사진을 찍고, 찍은 사진을 화면에 표시
// - useState, useRef, useEffect 사용

function Practice01() {
  //! useState: 웹캠의 비디오 스트림을 저장
  const [image, setImage] = useState<string | null>(null);

  //! useRef: HTML 요소에 직접적인 조작
  // 비디오 HTML 요소
  const videoRef = useRef<HTMLVideoElement>(null);
  // 캔버스 HTML 요소
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //! useEffect: 마운트 시 실행될 로직 작성
  useEffect(() => {
    async function setupWebcam() { // 비동기 함수로 웹캠 설정
      // 사용자의 미디어 장치에 접근하여 비디오 스트림 값을 요청
      // { video: true }
      // >> 비디오만 요청
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        // 비디오 ref가 현재 참조하는 DOM 요소가 있다면
        videoRef.current.srcObject = stream; // 해당 비디오 요소의 소스로 스트림을 설정
      }
    }
    setupWebcam(); // 위에서 정의한 웹캠 설정 함수 호출
  }, []); // 빈 의존성 배열: 컴포넌트 마운트 시에만 효과 실행

  return (
    <div>
      <h1>카메라 앱</h1>
      {/* playsInline: 전체화면 전환 없이 바로 재생 */}
      <video ref={videoRef} autoPlay playsInline width='320' height='240'></video>
      <button>이미지 캡쳐</button>

      <canvas width='320' height='240' style={{
        display: 'none'
      }}></canvas>
    </div>
  )
}

export default Practice01