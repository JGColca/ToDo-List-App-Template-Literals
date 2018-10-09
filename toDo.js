let taskNameTextBox = document.getElementById('taskNameTextBox')
let addTaskButton = document.getElementById('addTaskButton')

let pendingTasksList = document.querySelector("#pendingTasksList")
let completedTasksList = document.querySelector("#completedTasksList")


function markAsCompleted(taskCompleteCheckbox) {

    if (taskCompleteCheckbox.checked) {
        completedTasksList.appendChild(taskCompleteCheckbox.parentElement)
    } else {
        pendingTasksList.appendChild(taskCompleteCheckbox.parentElement)
    }

}
function removeTask(deleteButton) {

    deleteButton.parentElement.parentElement.removeChild(deleteButton.parentElement)
}


addTaskButton.addEventListener('click', function () {

    let taskName = taskNameTextBox.value

    let taskItem = `
  <li class="taskListItem">
    <input type='checkbox' onchange = 'markAsCompleted(this)' />
    <label>${taskName}</label>
    <button onclick='removeTask(this)'>Remove</button>
  </li>
                  `
    pendingTasksList.insertAdjacentHTML('beforeend', taskItem)

})
