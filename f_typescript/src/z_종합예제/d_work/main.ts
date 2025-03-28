// main.ts
{
  //# 사용자로부터 입력받은 할 일을 관리하는 Task Logger

  //! 1) 할 일 정의 - 인터페이스
  interface Task {
    id: number; // 할 일 고유 번호
    description: string; // 할 일의 설명
    timestamp: Date; // 할 일이 기록된 시각
  }

  //! 2) Task 저장소의 구조 - 클래스
  class TaskLogger {
    private tasks: Task[] = [];
    private taskIdCounter = 0; // 할 일의 ID를 생성하기 위한 카운터

    addTask(description: string): Task {
      const newTask: Task =  {
        id: this.taskIdCounter++, // 현재 카운터 값으로 ID 지정 후 증가
        description,
        timestamp: new Date(),
      };
      this.tasks.push(newTask);
      this.renderTasks(); // 할 일 목록을 화면에 다시 재랜더링
      return newTask;
    }

    deleteTask(taskId: number): void {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      this.renderTasks();
    }

    private createTaskElement(task: Task): HTMLElement {
      const taskItem = document.createElement('div');
      taskItem.className = 'task-item';
      taskItem.innerHTML = `
        <span>${task.description} - ${task.timestamp.toLocaleString()}</span>
        <button data-task-id=${task.id}>Delete</button>
      `;
      return taskItem;
    }

    private renderTasks() {
      const taskList = document.getElementById('task-list');

      if (taskList) {
        taskList.innerHTML = '';
        this.tasks.forEach(task => {
          const taskItem = this.createTaskElement(task);
          taskList.appendChild(taskItem);
        });

        this.addDeleteEventListeners();
      }
    }

    private addDeleteEventListeners() {
      // 모든 삭제 버튼 선택
      const deleteButtons = document.querySelectorAll('.task-item button');
      deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          const taskId = parseInt((e.target as HTMLButtonElement).dataset.taskId || '0', 10);
          this.deleteTask(taskId);
        })
      })
    }
  }
}