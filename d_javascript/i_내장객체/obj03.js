// obj03.js

//# 4. Math 내장 객체: 수학과 관련된 기본 연산 객체

console.log(`원주율 값: ${Math.PI}`);

console.log(`0이상 1미만의 난수 생성: ${Math.random()}`);
console.log(`0이상 N(10)미만의 난수 생성: ${Math.random() * 10}`);

console.log(`소수점 자리 내림: ${Math.floor(Math.random() * 10)}`);

console.log(`제곱근(square root): ${Math.sqrt(16)}`); // 4
console.log(`제곱근(square root): ${Math.sqrt(256)}`); // 16

//# 5. Date 객체: 날짜, 시간 데이터 객체

// 현재 날짜와 시간 반환
let now = new Date();
console.log(now); // 2025-03-18T06:42:25.444Z // 그리니치 천문대 시간 (우리나라: +9h)

// getDate(): 현재 '일' (1 ~ 31)
// getDay(): 현재 '요일' (일요일 0 ~ 토요일 6)
// getFullYear(): 현재 '년' (YYYY)
// getMonth(): 현재 '월' (1월이 0부터 시작 >> 현재 월은 반환값 + 1)

console.log(now.getDate()); // 18
console.log(now.getDay()); // 2: 화요일
console.log(now.getFullYear()); // 2025
console.log(now.getMonth() + 1); // 3월

// 시간
// getHours(): 0 ~ 23
// getMinutes(): 0 ~ 59
// getSeconds(): 0 ~ 59
console.log(now.getHours()); // 15
console.log(now.getMinutes()); // 47
console.log(now.getSeconds()); // 55

//& 현지 날짜 표기법 & 시간 표기법: Locale(현지의)
console.log(now.toLocaleDateString()); // 2025. 3. 18.
console.log(now.toLocaleTimeString()); // 오후 3:49:00