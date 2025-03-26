// type08.ts
// export const tmp = '';
{
    //! === 타입 단언(Type Assertion) ===//
    // : 개발자가 TS 컴파일러(tsc) 보다 데이터 타입의 주도권을 가지는 방법
    // - 컴파일러에게 '이 데이터의 타입을 내가! 지정한 타입으로 간주해라!'라는 지시
    //? 타입 단언 방법
    // : as 키워드를 사용
    // : 데이터 as 데이터타입
    var someValue = 'this is a string';
    // someValue = true; 
    // : 어떤 값이든 할당은 가능하지만 개발자가 문자열로 단언!하고 싶음
    // let length = someValue.length;
    // console.log(length); // undefined
    var length_1 = someValue.length;
    console.log(length_1);
    16;
    //? 타입 단언 사용 예시
    // : 웹 개발에서 DOM 요소를 조작할 때, 특정 DOM 요소를 구체적인 HTMLElement 타입으로 단언!
    // - ts가 자동으로 해당 DOM 요소의 정확한 타입을 추론할 수 X
    //# 1) HTMLElement 타입 단언
    // HTMLElement:모든 HTML 요소 타입의 최상위 타입
    // - getElementById(), querySelector()로 HTML 요소를 가져올 때
    //   리턴받는 DOM 객체의 타입은 HTMLElement 타입!
    // - 각 DOM 객체가 가지는 고유한 속성에 접근하려면 반드시 타입 단언이 필수!
    document.addEventListener('DOMContentLoaded', function () {
        var button = document.getElementById('myButton');
        // bool 속성
        // : HTML) 키워드 만으로 명시
        //         disabled - 버튼을 비활성화
        // : DOM) DOM객체.bool속성 = true;
        if (button) {
            // 찾는 조건의 HTML 요소가 없는 경우 null값을 반환
            // button.disabled = true; // 'HTMLElement' 형식에 'disabled' 속성이 없습니다.
            button.disabled = true;
            // cf) HTMLElement의 하위 요소
            // 버튼: HTMLButtonElement
            // DIV: HTMLDivElement
            // input: HTMLInputElement 등
        }
    });
    // tsc type08.ts
}
