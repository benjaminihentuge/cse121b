export function addTask(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function getTasks() {
    return JSON.parse(localStorage.getItem('tasks'));
}

export function deleteTask(tasks, index) {
    tasks.splice(index, 1);
    addTask(tasks);
}

export function editTask(tasks, index, newText) {
    tasks[index].text = newText;
    addTask(tasks);
}
