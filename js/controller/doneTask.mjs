import {tasksList, completedTasksList} from "../view/elements.mjs"
import checkEmptyList from "../view/checkEmptyList.mjs"
import {getTasks, saveToLocalStorage} from "../model/tasksManager.mjs"

function doneTask(event) {
    if (event.target.dataset.action !== 'done') return

    const closestLi = event.target.closest('li')

    const id = Number(closestLi.id)

    const taskIndex = getTasks().findIndex(task => task.id === id)

    getTasks()[taskIndex].done = !getTasks()[taskIndex].done

    const taskTitle = closestLi.querySelector('span')
    taskTitle.classList.toggle('task-title--done')

    if (getTasks()[taskIndex].done) {
        const priorityButton = closestLi.querySelector('[data-action="starred"]')
        if (priorityButton) {
            priorityButton.remove()
            getTasks()[taskIndex].starred = false
        }
        completedTasksList.appendChild(closestLi)
    } else {
        const priorityButtonHTML = `
                <button type="button" data-action="starred" class="btn-action">
                    <img src="./img/star.svg" alt="Priority" id="img">
                </button>`
        closestLi.querySelector('.task-item__buttons').insertAdjacentHTML('afterbegin', priorityButtonHTML)
        tasksList.appendChild(closestLi)
    }

    checkEmptyList()

    saveToLocalStorage()
}

export default doneTask