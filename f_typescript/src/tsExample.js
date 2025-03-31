// tsExample.ts
{
    var count_1 = 0;
    function updateDisplay() {
        var countElement = document.getElementById('countValue');
        if (countElement) {
            // 숫자자료형.toString();
            // : 문자로 변환 메서드
            countElement.textContent = count_1.toString();
        }
    }
    function increment() {
        count_1++;
        updateDisplay();
    }
    function decrement() {
        count_1--;
        updateDisplay();
    }
    document.addEventListener('DOMContentLoaded', function () {
        var incrementButton = document.getElementById('incrementButton');
        var decrementButton = document.getElementById('decrementButton');
        if (incrementButton)
            incrementButton.addEventListener('click', increment);
        if (decrementButton)
            decrementButton.addEventListener('click', decrement);
    });
}
