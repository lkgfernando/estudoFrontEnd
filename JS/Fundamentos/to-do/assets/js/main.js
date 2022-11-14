//Selecionado elementos do dom
const inputTask = document.querySelector('.input-task')
const btnTask = document.querySelector('#btn-task')
const btnClear = document.querySelector('#btn-clear')
const addTask = document.querySelector('.list-group')


// #################### Functions ##############################

// Cria tags
function createLi() {
    const li = document.createElement('li')
    li.classList.add('list-group-item')
    li.classList.add('d-flex')
    li.classList.add('justify-content-between')
    li.classList.add('align-items-center')
    li.classList.add('card-text')
    return li
}

function createButtonDelete(li) {
    li.innerHTML += ' '
    const buttonDelete = document.createElement('button')
    buttonDelete.classList.add('btn')
    buttonDelete.classList.add('btn-outline-secondary')
    buttonDelete.classList.add('delete-task')
    buttonDelete.innerText = 'Excluir'
    li.appendChild(buttonDelete)
}



//Captura teclar precionada no teclado

inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return
        createTask(inputTask.value)
    }
})

// Responsável por criar as tarefas
function createTask(text) {
    const li = createLi()
    li.innerHTML = text
    addTask.appendChild(li)
    inputClear()
    createButtonDelete(li)
    saveTask()
    
}


//Function limpar input
function inputClear() {
    inputTask.value = ''
    inputTask.focus()
}


//captura eventos no botão Adicionar
btnTask.addEventListener('click', function() {
    if(!inputTask.value) return

    createTask(inputTask.value)

})

btnClear.addEventListener('click', function() {
    inputClear()
})

//Captura evento ao clicar no botão excluir

document.addEventListener('click', function(e) {
    const el = e.target

    if(el.classList.contains('delete-task')) {

        el.parentElement.remove()
        saveTask()
                
    }
})


//Function saveTask

function saveTask() {
    const itemTask = addTask.querySelectorAll('li')
    const listTask = []

    for (let task of itemTask ) {
        let taskText = task.innerText
        taskText = taskText.replace('Excluir', '').trim()
        listTask.push(taskText)
    }

    const taskJason = JSON.stringify(listTask)
    localStorage.setItem('task', taskJason)

        
}

function readTask() {
    const tasks = localStorage.getItem('task')
    const listTheTask = JSON.parse(tasks)

    for (let task of listTheTask) {
        createTask(task)
    }
}

readTask()
