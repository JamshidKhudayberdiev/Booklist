const form = document.querySelector('form')
const tbody = document.querySelector('tbody')
const container = document.querySelector('.container')
// constructor function 
function Book(name, author, year){
    this.name = name,
    this.author = author,
    this.year = year

}

// UI
function UI() {
    UI.prototype.addBook = function (book){
        const tr = document.createElement('tr')
        const countBook = tbody.childNodes.length
        tr.innerHTML = `
        <th>${countBook + 1}</th>
        <th>${book.name}</th>
        <th>${book.author}</th>
        <th>${book.year}</th>
        <th class="delete "><i class="fas fa-trash"></i></th>
        `
        tbody.appendChild(tr)
        
    }
}

UI.prototype.showMessage = function (type, text){
    const htmlMassage = document.createElement('div')
    htmlMassage.classList.add(`alert`)
    htmlMassage.classList.add(`alert-${type}`)
    htmlMassage.textContent = text
    container.insertBefore(htmlMassage, form)

    setTimeout(() =>{
        htmlMassage.remove()
    }, 3000)
}


form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const ui = new UI()
    if (form.name.value && form.author.value && form.year.value){
        const book = new Book(form.name.value, form.author.value, form.year.value)
        ui.addBook(book)
        ui.showMessage('success', 'You deleted this books')
        
    } else {
        ui.showMessage('warning', 'ERROR!!!')
    }
    
    

    // ui
    

})

tbody.addEventListener('click', (e) =>{
    e.target.classList[0] == 'delete' ? e.target.parentElement.remove() : false
    
    const ui = new UI()
    ui.showMessage('danger', 'You deleted this books')
})