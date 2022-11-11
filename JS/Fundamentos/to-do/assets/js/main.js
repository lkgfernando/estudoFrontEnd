//Selecionado elementos do dom
const inputTask = document.querySelector('.input-task')
const btnTask = document.querySelector('#btn-task')
const btnClear = document.querySelector('#btn-clear')
const addTask = document.querySelector('.add-task')


// #################### Functions ##############################

// Cria tag li
function createLi() {
    const li = document.createElement('li')
    return li
}

// Responsável por criar as tarefas
function createTask(text) {
    const li = createLi()
    li.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center">${text}</li>`
    addTask.appendChild(li)
    
}


//Function limpar input
function inputClear() {
    inputTask.value = ''
}

//captura eventos no botão Adicionar
btnTask.addEventListener('click', function() {
    if(!inputTask.value) return

    createTask(inputTask.value)

})

btnClear.addEventListener('click', function() {
    inputClear()
})

