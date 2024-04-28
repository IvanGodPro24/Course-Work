import {tasksList} from "./elements.mjs"

function renderTask(task) {
    const cssClass = task.done ? 'task-title task-title--done' : 'task-title'
    const priorityButton = task.starred ?
        `<button type="button" data-action="starred" class="btn-action">
            <img src="./img/star-black.svg" alt="Priority" id="img">
        </button>` :
        `<button type="button" data-action="starred" class="btn-action">
            <img src="./img/star.svg" alt="Priority" id="img" ">
        </button>`

    const taskHTML = `
				<li id="${task.id}" class="list-group-item d-flex justify-content-between task-item">
					<span class="${cssClass}" contenteditable="true">${task.text}</span>
					<div class="task-item__buttons">
					    ${priorityButton}
						<button type="button" data-action="done" class="btn-action">
							<img src="./img/tick.svg" alt="Done" id="img">
						</button>
						<button type="button" data-action="delete" class="btn-action">
							<img src="./img/cross.svg" alt="Delete" id="img" ">
						</button>
					</div>
				</li>`

    tasksList.insertAdjacentHTML("beforeend", taskHTML)
}

export default renderTask