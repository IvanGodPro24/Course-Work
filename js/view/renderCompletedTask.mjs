import {completedTasksList} from "./elements.mjs"

function renderCompletedTask(task) {
    const cssClass = 'task-title task-title--done'

    const taskHTML = `
        <li id="${task.id}" class="list-group-item d-flex justify-content-between task-item">
            <span class="${cssClass}" contenteditable="true">${task.text}</span>
            <div class="task-item__buttons">
                <button type="button" data-action="done" class="btn-action">
                    <img src="./img/tick.svg" alt="Done" id="img">
                </button>
                <button type="button" data-action="delete" class="btn-action">
                    <img src="./img/cross.svg" alt="Done" id="img">
                </button>
            </div>
        </li>`

    completedTasksList.insertAdjacentHTML("beforeend", taskHTML)
}

export default renderCompletedTask