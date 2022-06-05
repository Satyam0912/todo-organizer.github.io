const toDoBlock = document.getElementById('to-do-block');

let idCount = 1;

const todoDragStart = (event) => {
    let todoCardIDBeingDragged = event.target.id;
    event.dataTransfer.setData('todoCard', todoCardIDBeingDragged);
}

const allowDrop = (event) => {
    event.preventDefault();
}

const todoDrop = (event) => {
    let todoCardIDBeingDragged = event.dataTransfer.getData('todoCard')
    let todoCardBeingDragged = document.getElementById(todoCardIDBeingDragged)
    let parentElement = event.target;
    parentElement.appendChild(todoCardBeingDragged)
}


const createToDoDiv = (taskInput, priorityInput, todoDeadline) => {

    const toDoCardDiv = document.createElement('div')
    const cardHeaderDiv = document.createElement('div')
    const cardBodyDiv = document.createElement('div')
    const priorityDisplaySpan = document.createElement('span')
    const todoDeadlineSpan = document.createElement('span')
    const cardTitleH5 = document.createElement('h5')
    const deleteBtn = document.createElement('a')

    toDoCardDiv.id = `todo-${idCount}`;

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



    toDoCardDiv.draggable = 'true';
    toDoCardDiv.addEventListener('dragstart', todoDragStart)
    deleteBtn.addEventListener('click', () => toDoCardDiv.style.display = 'none')

    toDoBlock.appendChild(toDoCardDiv);
    toDoCardDiv.appendChild(cardHeaderDiv);
    cardHeaderDiv.appendChild(priorityDisplaySpan);
    cardHeaderDiv.appendChild(todoDeadlineSpan);
    toDoCardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(cardTitleH5);
    cardBodyDiv.appendChild(deleteBtn);

    // <div class="card todo-card" id="test-id" draggable="true" ondragstart="todoDragStart(event)" >
    //     <div class="card-header"><span class="badge rounded-pill bg-danger">high
    //         Priority</span><span>June 16, 2022, 11:50:00 PM</span></div>
    //     <div class="card-body">
    //         <h5 class="card-title">Complete version 2 this project</h5><a
    //             class="btn btn-sm btn-danger">Delete</a>
    //     </div>
    // </div>

    idCount++;
}