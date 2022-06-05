const createToDo = () => {
    const taskInput = document.getElementById('task-input').value;
    const priorityInput = document.getElementById('priority-input').value;
    const todoDeadline = new Date(document.getElementById('todo-deadline').value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    })

    if (taskInput !== '') {
        createToDoDiv(taskInput, priorityInput, todoDeadline);
        document.getElementById('task-input').value = '';
    }
}



