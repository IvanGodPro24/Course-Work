import forEdit from "./forEdit.mjs"

function editTask() {
    const taskElements = document.querySelectorAll('#tasksList .task-title')
    const completedTaskElements = document.querySelectorAll('#completedTasksList .task-title')

    taskElements.forEach(taskElement => {
        taskElement.addEventListener('blur', forEdit)
    })

    completedTaskElements.forEach(completedTaskElement => {
        completedTaskElement.addEventListener('blur', forEdit)
    })
}

export default editTask