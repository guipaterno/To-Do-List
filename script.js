const $modal = document.querySelector("#modal")
const $descriptionInput = document.querySelector("#description")
const $priorityInput = document.querySelector("#priority")
const $deadlineInput = document.querySelector("#deadline")

function openModal(){
    $modal.style.display = "flex"
}

function closeModal(){
    $modal.style.display = "none"
}

function createTask (){
    console.log($descriptionInput.value)
    console.log($priorityInput.value)
    console.log($deadlineInput.value)

    closeModal()
}