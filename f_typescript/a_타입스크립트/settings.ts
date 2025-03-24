// settings.ts

/*
# 타입스크립트 환경 설정

! 1. Node.js 설치
: JavaScript의 '런타임(JS의 프로그램을 실행할 수 있는 환경)' 환경
- TS는 JS의 슈퍼셋이기 때문에 'Node.js'환경에서 동작

? Node.js 설치 전 삭제

- 윈도우(Windows)
  : 윈도우 키 > 프로그램 추가/제거 > Node.js 검색 후 삭제

  : 아래 경로에 해당하는 디렉터리(폴더) 삭제
    윈도우 키 > 파일 탐색기

    C:\Program Files\Nodejs
    C:\Program Files (x86)\Nodejs

    C:\Users\ITPS\AppData\Roaming\npm
    C:\사용자\ITPS\AppData\Roaming\npm

    C:\Users\user\AppData\Roaming\npm
    C:\사용자\user\AppData\Roaming\npm

  : 윈도우 키 + r
    > cmd(명령 프롬프트 실행)
    > node -v
      npm -v
      (내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다. - 삭제 완료)

- 맥(Mac OS)
  : Homebrew를 사용하여 Node 제거 방법
    응용 프로그램 > 유틸리티 폴더 > 터미널 실행
    brew uninstall --force node

  : 터미널 재실행
    > node -v
      npm -v
      (내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다. - 삭제 완료)

? Node.js 설치
: 공식 웹 사이트(브라우저 > node.js 검색)
: https://nodejs.org/ko

- LTS(Long Term Support) 버전 설치 권장
: 파일 탐색기 > 다운로드 > 다운로드 된 node.js 실행

? 설치 완료 여부 확인
  윈도우 키 + r > cmd(명령 프롬프트 창)
  node -v / npm -v

? Windows에서 npm 실행이 되지 않을 경우
  (Node.js 시 npm이 자동 설치)

윈도우 키 > 시스템 환경 변수 편집 > 시스템 속성 > 고급 > 우측 하단의 환경 변수 클릭

: (위)사용자 변수에서 변수 Path 더블 클릭
    '사용자 이름'에 대한 사용자 변수 설정
    - 파일 탐색기 > c드라이브 > 사용자(Users) > 자신의 컴퓨터 이름(ITPS) > AppData > Roaming > npm 경로를 복사
    (npm 폴더가 존재하지 않을 경우 생성 후 경로 복사)
    : C:\Users\ITPS\AppData\Roaming\npm

: (아래)시스템 변수 Path 설정
    파일 탐색기 > c드라이브 > Program Files > nodejs 경로를 복사

    > 복사한 경로를 Path 변수란에 새로 만들기 클릭 > 경로 삽입
    (삽입 시 마지막에 \(원화)기호 첨부)
    C:\Program Files\nodejs\

>>>>> 환경 변수 편집 후에는 컴퓨터 자체 '다시 시작'을 권장 <<<<<

! 2. npm 
: NPM(Node Package Manager)은 Node.js의 기본 패키지 관리 도구
- NPM을 사용하여 JS의 라이브러리를 쉽게 설치하고 관리
- 프로젝트의 의존성 관리 & 스크립트 실행 기능을 제공

? cf) Node 설치 시 NPM 자동 설치
  : 설치 확인 명령어
  : npm -v

? npm 기본 명령어
  1. npm init
    : 새로운 Node.js 프로젝트 시작
    - 기본값으로 package.json 파일 생성
    - 'y옵션 추가' (npm init -y)
      : 질문없이 기본값으로 package.json 파일 생성

  2. npm install
    : package.json 파일에 명시된 모든 "의존성"을 설치
    - 특정 패키지 설치 방법 
      : npm install 패키지명
    - '-D | --save-dev 옵션 추가'
      : 개발 의존성으로 패키지를 추가

  3. npm uninstall
    : 모든 "의존성" 패키지 제거
    - 특정 패키지 제거 방법
      : npm uninstall 패키지명
*/ 