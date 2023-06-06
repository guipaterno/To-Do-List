const $modal = document.querySelector("#modal")
const $descriptionInput = document.querySelector("#description")
const $priorityInput = document.querySelector("#priority")
const $deadlineInput = document.querySelector("#deadline")
const $idInput = document.querySelector("#idInput")

const $todoColumnBody = document.querySelector("#todoColumn .body")

const $creationModeTitle = document.querySelector("#creationModeTitle")
const $editingModeTitle = document.querySelector("#editingModeTitle")

const $creationModeButton = document.querySelector("#creationModeButton")
const $editingModeButton = document.querySelector("#editingModeButton")




var todoList = []

function openModal(id){
    $modal.style.display = "flex"

    if(id){
        $creationModeTitle.style.display = "none"
        $creationModeButton.style.display = "none"

        $editingModeTitle.style.display ="block"
        $editingModeButton.style.display ="block"

        const index = todoList.findIndex(function(task){
            return task.id === id
        })

        const task = todoList[index]

        $idInput.value = task.id
        $descriptionInput.value = task.description
        $priorityInput.value = task.priority
        $deadlineInput.value = task.deadLine
    } else{
        $creationModeTitle.style.display = "block"
        $creationModeButton.style.display = "block"
        
        $editingModeButton.style.display ="none"
        $editingModeTitle.style.display ="none"
    }
}

function closeModal(){
    $modal.style.display = "none"

    $idInput.value = ""
    $descriptionInput.value = ""
    $priorityInput.value = ""
    $deadlineInput.value = ""

}

function generateCards(){
    const todoListHtml = todoList.map(function(task){
        const formattedDate = moment(task.deadLine).format('DD/MM/YYYY')
        return `
        <div class="card" ondblclick="openModal(${task.id})"> 
         <div class="info">
            <b>Descrição</b>
            <span>${task.description}</span>
         </div>
        

        <div class="info">
            <b>Prioridade</b>
            <span>${task.priority}</span>
         </div>

         <div class="info">
            <b>Prazo:</b>
            <span>${formattedDate}</span>
         </div>
         </div>
        

        `

    })


    $todoColumnBody.innerHTML = todoListHtml.join("")

}

function createTask (){
   const newTask = {
    id: Math.floor(Math.random() * 100000000),
    description: $descriptionInput.value,
    priority: $priorityInput.value,
    deadLine: $deadlineInput.value,
}

todoList.push(newTask)

    closeModal()
    generateCards()

   
}


function updateTask(){
    const task = {
        id: $idInput.value,
        description: $descriptionInput.value,
        priority: $priorityInput.value,
        deadLine: $deadlineInput.value,
    }

    const index = todoList.findIndex(function(task){
        return task.id == $idInput.value
    })

    todoList[index] = task

    closeModal()
    generateCards()
}