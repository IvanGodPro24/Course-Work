import renderTask from "../view/renderTask.mjs"
import renderCompletedTask from "../view/renderCompletedTask.mjs"
import {getTasks} from "../model/tasksManager.mjs"

function whatToRender() {
    const sortedTasks = getTasks().slice().sort((a, b) => {
        if (a.starred && !b.starred) return -1
        if (!a.starred && b.starred) return 1

        if (a.done && !b.done) return 1
        if (!a.done && b.done) return -1

        return a.id - b.id
    })

    sortedTasks.forEach(task => {
        if (task.done) {
            renderCompletedTask(task)
        } else {
            renderTask(task)
        }
    })
}

export default whatToRender