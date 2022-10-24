//Seleções de elementos
const fullForm = document.querySelector("#full-form")
const fullInput = document.querySelector("#full-input")
const fullList = document.querySelector("#full-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")

//Funçoes
const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("full-list")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-to-do")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.append(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-to-do")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.append(editBtn)
    
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-to-do")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.append(deleteBtn)

    fullList.appendChild(todo)
    fullInput.value = ""
    fullInput.focus()
}
//Eventos
fullForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = fullInput.value

    if(inputValue){
        saveTodo(inputValue)
    }
})

document.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div")

    if(targetEl.classList.contains("finish-to-do")) {
        parentEl.classList.toggle("done")
    }

    if(targetEl.classList.contains("remove-to-do"))
})