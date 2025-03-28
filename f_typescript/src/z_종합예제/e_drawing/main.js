// main.ts
var app = document.getElementById('app');
//! 2) 기본 상태 설정
var toolState = {
    color: '#000000', // 기본 검정색
    size: 5, // 기본 굵기
    isEraser: false, // 기본은 펜 모드
};
//! 3) 상태 변경 함수
// cf) keyof 연산자
// : 객체의 키 값들을 숫자나 문자열 리터럴 유니언 값으로 생성
// EX) 'color' | 'size' | 'isEraser'
//? @Params: ToolState 타입의 키와 해당 키의 타입을 제네릭을 통해 설정
// EX) key: 'color', value: string(ToolState color의 타입)
// EX) key: 'size', value: number
// EX) key: 'isEraser', value: boolean
function setTool(key, value) {
    toolState[key] = value; // 상태 업데이트
}
//! 4) 툴바를 만드는 함수
function createToolbar() {
    //* 색상 선택
    var colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = toolState.color;
    colorInput.oninput = function () { return setTool('color', colorInput.value); };
    //* 브러시 크기 조절
    var sizeInput = document.createElement('input');
    sizeInput.type = 'range';
    sizeInput.min = '1';
    sizeInput.max = '10';
    // input 태그의 value 값은 string
    sizeInput.value = toolState.size.toString();
    sizeInput.oninput = function () { return setTool('size', parseInt(sizeInput.value)); };
    //* 지우개 버튼
    var earserButton = document.createElement('button');
    earserButton.textContent = '지우개';
    earserButton.onclick = function () {
        toolState.isEraser = !toolState.isEraser; // 상태 토글
        earserButton.textContent = toolState.isEraser ? '펜' : '지우개';
    };
    //# 캔버스 초기화 버튼
    var clearButton = document.createElement('button');
    clearButton.textContent = '초기화';
    clearButton.onclick = function () { return ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height); }; // 전체 비우기
    //# 그림 저장 버튼
    var saveButton = document.createElement('button');
    saveButton.textContent = '저장';
    saveButton.onclick = function () {
        var link = document.createElement('a');
        link.download = 'drawing.png'; // 저장 파일명
        link.href = canvas.toDataURL(); // 이미지 URL 생성
        link.click(); // 자동 다운로드 실행
    };
    //# 툴바 묶기
    var toolbar = document.createElement('div');
    toolbar.className = 'toolbar';
    toolbar.append(colorInput, sizeInput, earserButton, clearButton, saveButton);
    return toolbar;
}
//! 5) 캔버스 생성
var canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 500;
//! 6) 2D 그리기 컨텍스트 가져오기
// const ctx = canvas.getContext('2d')!; 
// ctx.lineCap = 'round';
var ctx = canvas.getContext('2d');
if (ctx) {
    ctx.lineCap = 'round'; // 선 끝 둥글게
}
//! 7) 마우스 이벤트 상태
var isDrawing = false;
// 마우스를 눌렀을 때
canvas.addEventListener('mousedown', function (e) {
    isDrawing = true;
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath(); // 경로 시작 - 그리기 시작
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(e.offsetX, e.offsetY); // 그리기 시작점 설정
});
// 마우스 이동 시 (그림을 그리고 있을 때)
canvas.addEventListener('mousemove', function (e) {
    if (!isDrawing)
        return; // 그리지 않으면 리턴
    if (ctx) {
        ctx.strokeStyle = toolState.isEraser ? '#ffffff' : toolState.color;
        ctx.lineWidth = toolState.size;
        ctx.lineTo(e.offsetX, e.offsetY); // 선 그릴 좌표
        ctx.stroke(); // 선 그리기
    }
});
// 마우스를 뗐을 때
canvas.addEventListener('mouseup', function () {
    isDrawing = false; // 그리기 종료
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath(); // 경로 종료
});
// 캔버스를 벗어난 경우에도 종료
canvas.addEventListener('mouseleave', function () {
    isDrawing = false; // 그리기 종료
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath(); // 경로 종료
});
app === null || app === void 0 ? void 0 : app.appendChild(createToolbar()); // 툴바 추가
app === null || app === void 0 ? void 0 : app.appendChild(canvas);
