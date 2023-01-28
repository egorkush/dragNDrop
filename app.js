const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.draggable = 'true'


item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
}

function dragstart(event) {
    // console.log('dragstart')
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    // console.log('dragend')
    // event.target.classList.remove('hold', 'hide')
    event.target.className = 'item'
    // event.target.classList.remove('hide')
    // console.log('dragend', this)
}

function dragover(event) {
    event.preventDefault()
    // console.log('dragover')
}

function dragenter(event) {
    event.target.classList.add('hovered')
    // console.log('dragenter')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
    // console.log('dragleave')
}

function drop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
    // console.log('drop')
}
