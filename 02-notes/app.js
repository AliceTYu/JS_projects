const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = [
    {
        title: 'прочитать 50стр',
        completed: false,
    }, 
    {
        title: 'напистаь программу на JS',
        completed: true,
    },
]

function render() {
    listElement.innerHTML = ''
    if (notes.length === 0){ 
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i = 0; i < notes.length; i++){
        listElement.insertAdjacentHTML('beforeend', getListTemplate(notes[i], i))
    }    
    // for (let note of notes){
    //     listElement.insertAdjacentHTML('beforeend', getListTemplate(note))
    // }
}

render()

createBtn.onclick = function () {
    if (inputElement.value!=''){
        const newNote = {
            title: inputElement.value,
            completed: false,
        }
        notes.push(newNote)
        render()
    }    
    inputElement.value = ''
}

listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type == "toggle"){
            notes[index].completed = !notes[index].completed
        } else if (type == "remove"){
            notes.splice(index, 1)
        }
        render()
    }
}

function getListTemplate(note, index){
    return `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="${note.completed ? 'text-decoration-line-through' : ''}"> ${note.title} </span>
        <span>
            <span class="btn btn-small btn-${note.completed ? 'info' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
        </span>
    </li>`
}
