// func_practice.js

//# JS 함수 예시 //
//? 요구 사항
// 1. 회사의 직원들을 위해 월별 근무 시간과 시급을 기반으로 급여를 계산하는 프로그램을 작성
// : calculatePay(hours, rate)라는 이름의 함수를 작성
// : 근무 시간(hours)과 시급(rate)을 인자로 받고, 총 급여를 계산하여 반환

// 2. 근무 시간이 160시간을 초과할 경우, 초과 근무 시간은 기본 시급의 1.5배로 계산
// : 함수를 작성한 후, 다음 직원들의 근무 정보를 사용하여 급여를 계산하고 출력

// >> 각 직원의 월별 근무 시간과 시급이 다를 수 있기 때문에 유연하게 동작될 수 있는 함수 작성

// 직원 A: 172시간, 시급 20달러
// 직원 B: 160시간, 시급 22달러
// 직원 C: 180시간, 시급 18달러

//? 예상 출력
// 직원 A 급여: $계산된 금액
// 직원 B 급여: $계산된 금액
// 직원 C 급여: $계산된 금액

function calculatePay(hours, rate) {
  // 월 급여: 근무 시간(hours) * 시급(rate)

  if (hours > 160) {
    const regularPay = 160 * rate;

    // 160 시간 초과 근무 시간의 급여
    const overtimePay = (hours - 160) * (rate * 1.5);

    return regularPay + overtimePay;
  } else {
    return hours * rate;
  }
}

console.log(calculatePay(172, 20)); // 3560
console.log(calculatePay(152, 30)); // 4560
console.log(calculatePay(102, 18)); // 1836