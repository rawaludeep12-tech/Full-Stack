document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    if (taskInput && addTaskBtn && taskList) {
        addTaskBtn.addEventListener('click', addTask);
        taskList.addEventListener('click', handleTaskClick);
        taskList.addEventListener('dblclick', handleTaskDblClick);

        taskInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') { addTask(); }
        });

        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText === '') { return; }

            const li = document.createElement('li');
            li.className = 'list-group-item user-select-none shadow-sm';
            li.innerHTML = `<i class="fas fa-angle-right text-warning me-2"></i> ${taskText}`;
            taskList.appendChild(li);
            taskInput.value = '';
        }

        function handleTaskClick(e) {
            let target = e.target;
            if (target.tagName === 'I') target = target.parentElement;

            if (target.tagName === 'LI') {
                target.classList.toggle('list-group-item-success');
                target.style.textDecoration = target.classList.contains('list-group-item-success') ? 'line-through' : 'none';
            }
        }

        function handleTaskDblClick(e) {
            let target = e.target;
            if (target.tagName === 'I') target = target.parentElement;

            if (target.tagName === 'LI') {
                taskList.removeChild(target);
            }
        }
    }
});