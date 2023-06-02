const $modal = document.querySelector("#modal")
const $descriptionInput = document.querySelector("#description")
const $priorityInput = document.querySelector("#priority")
const $deadlineInput = document.querySelector("#deadline")
const $todoColumnBody = document.querySelector("#todoColumn .body")

var todoList = []

function openModal(){
    $modal.style.display = "flex"
}

function closeModal(){
    $modal.style.display = "none"
}

function generateCards(){
    const todoListHtml = todoList.map(function(task){
        return `
        <div class="card"> 
         <div class="info">
            <b>Descrição</b>
            <span>${task.description}</span>
         </div>
        

        <div class="info">
            <b>Prioridade</b>
            <span>${task.priority}</span>
         </div>

         <div class="info">
            <b>Prazo</b>
            <span>${task.deadLine}</span>
         </div>
         </div>
        

        `

    })


    $todoColumnBody.innerHTML = todoListHtml.join("")

}

function createTask (){
   const newTask = {
    description: $descriptionInput.value,
    priority: $priorityInput.value,
    deadLine: $deadlineInput.value,
}

todoList.push(newTask)

    closeModal()
    generateCards()

    console.log(todoList)
}