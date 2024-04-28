import {taskInput} from "./elements.mjs"

function withoutSpaces() {
    taskInput.oninput = () => {
        if (taskInput.value.charAt(0) === ' ') {
            taskInput.value = ''
        }
    }
}

export default withoutSpaces