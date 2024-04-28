import {tasksList} from "./elements.mjs"
import {getTasks} from "./tasksManager.mjs"

function checkEmptyList() {
    const emptyListEl = document.querySelector('#emptyList')

    const emptyListExists = emptyListEl !== null

    if (getTasks().length === 0 || getTasks().every(task => task.done)) {
        if (!emptyListExists) {
            const emptyListElement = `
                <li id="emptyList" class="list-group-item empty-list">
                    <img src="./img/to-do.svg" alt="to-do" id="big-img" class="mt-3">
                    <div class="empty-list__title">to-do is empty</div>
                </li>`
            tasksList.insertAdjacentHTML('afterbegin', emptyListElement)
        }
    } else {
        if (emptyListExists) {
            emptyListEl.remove()
        }
    }
}

export default checkEmptyList