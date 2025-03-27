// Todo 할 일 목록
{
    //! TaskManager 클래스
    // : T 제네릭 타입의 할 일 목록을 관리
    var TaskManager_1 = /** @class */ (function () {
        // 2) 생성자
        function TaskManager() {
            this.tasks = [];
            this.nextId = 1;
        }
        // 3) 메서드
        TaskManager.prototype.addTask = function (content) {
            this.tasks.push({
                id: this.nextId,
                content: content,
                completed: false
            });
            this.nextId++;
            this.updateTaskCount(); // 할 일 개수 업데이트
        };
        TaskManager.prototype.removeTask = function (id) {
            this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
            this.renderTasks('task-list');
            this.updateTaskCount();
        };
        // 랜더링 할 컨테이너(ul 태그)의 ID를 매개변수로 전달
        TaskManager.prototype.renderTasks = function (taskListId) {
            var _this = this;
            var taskList = document.getElementById(taskListId);
            taskList.innerHTML = '';
            this.tasks.forEach(function (task) {
                var li = document.createElement('li');
                li.textContent = "".concat(task.content);
                // 삭제 버튼 생성
                var deleteButton = document.createElement('button');
                deleteButton.textContent = '삭제';
                deleteButton.onclick = function () {
                    _this.removeTask(task.id);
                };
                // deleteButton.addEventListener('click', () => {});
                // 완료 체크박스 추가
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                // bool 속성 checked
                // : checked = true;
                // : checked = false;
                checkbox.checked = task.completed;
                // 체크 박스 상태 변경 시: checked 속성 변경 시
                checkbox.onchange = function () {
                    task.completed = !task.completed;
                    _this.renderTasks(taskListId);
                };
                if (task.completed) { // 완료 시 스타일 변경
                    li.style.textDecoration = 'line-through';
                }
                // 생성된 요소 추가
                li.appendChild(deleteButton);
                // A요소.insertBefor(B요소, A요소.firstChild);
                // : A요소 안에 B 요소를 삽입
                // - 내부의 첫 번째 요소보다 '전에' 앞선 배치
                li.insertBefore(checkbox, li.firstChild);
                taskList.appendChild(li);
            });
            this.updateTaskCount();
        };
        TaskManager.prototype.updateTaskCount = function () {
            var countElement = document.getElementById('task-count');
            if (countElement) {
                countElement.textContent = "\uD560 \uC77C \uAC1C\uC218: ".concat(this.tasks.length);
            }
        };
        return TaskManager;
    }());
    document.addEventListener('DOMContentLoaded', function () {
        var taskManager = new TaskManager_1();
        var addButton = document.getElementById('add-button');
        var newTaskInput = document.getElementById('task-input');
        addButton.addEventListener('click', function () {
            if (newTaskInput.value.trim() !== '') {
                taskManager.addTask(newTaskInput.value);
                taskManager.renderTasks('task-list');
                newTaskInput.value = '';
            }
        });
    });
    // tsc main.ts
}
