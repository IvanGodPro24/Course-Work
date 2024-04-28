import { form, tasksList, removeTasks, editElement, completedTasksList } from "../view/elements.mjs"
import addTask from "./addTask.mjs"
import deleteTask from "./deleteTask.mjs"
import doneTask from "./doneTask.mjs"
import removeDoneTasks from "./removeDoneTask.mjs"
import editTask from "./editTask.mjs"
import starredTask from "./starredTask.mjs"
import whatToRender from "./whatToRender.mjs"

export function bindEvents() {
    form.addEventListener("submit", addTask)

    tasksList.addEventListener('click', deleteTask)

    tasksList.addEventListener('click', doneTask)

    removeTasks.addEventListener('click', removeDoneTasks)

    editElement.addEventListener('click', editTask)

    completedTasksList.addEventListener('click', deleteTask)

    completedTasksList.addEventListener('click', doneTask)

    tasksList.addEventListener('click', starredTask)
}

export function initialize() {
    whatToRender()
    bindEvents()
}