const toDoBlock = document.getElementById('to-do-block');

const createToDoDiv = (taskInput, priorityInput, todoDeadline) => {

    const toDoCardDiv = document.createElement('div')
    const cardHeaderDiv = document.createElement('div')
    const cardBodyDiv = document.createElement('div')
    const priorityDisplaySpan = document.createElement('span')
    const todoDeadlineSpan = document.createElement('span')
    const cardTitleH5 = document.createElement('h5')
    const deleteBtn = document.createElement('a')


    toDoCardDiv.classList = 'card todo-card';
    cardHeaderDiv.classList = 'card-header';
    cardBodyDiv.classList = 'card-body';
    cardTitleH5.classList = 'card-title';
    deleteBtn.classList = 'btn btn-sm btn-danger';

    priorityDisplaySpan.innerText = `${priorityInput} Priority`;
    todoDeadlineSpan.innerText = `${todoDeadline}`;
    deleteBtn.innerText = 'Delete';
    cardTitleH5.innerText = taskInput;

    switch (priorityInput) {
        case 'high':
            priorityDisplaySpan.classList = 'badge rounded-pill bg-danger';
            break;
        case 'medium':
            priorityDisplaySpan.classList = 'badge rounded-pill bg-warning text-dark';
            break;
        case 'low':
            priorityDisplaySpan.classList = 'badge rounded-pill bg-info text-dark';
            break;
    }

    toDoBlock.appendChild(toDoCardDiv);
    toDoCardDiv.appendChild(cardHeaderDiv);
    cardHeaderDiv.appendChild(priorityDisplaySpan);
    cardHeaderDiv.appendChild(todoDeadlineSpan);
    toDoCardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(cardTitleH5);
    cardBodyDiv.appendChild(deleteBtn);

    // <div class="card todo-card">
    //     <div class="card-header">
    //         <span class="badge rounded-pill bg-warning text-dark">Medium Priority</span>
    //         <span class="badge rounded-pill bg-warning text-dark">2022-05-26 03:00 PM</span>
    //     </div>
    //     <div class="card-body">
    //         <h5 class="card-title">Complete revision of async await</h5>
    //         <a href="#" class="btn btn-sm btn-danger">Delete</a>
    //     </div>
    // </div>
}