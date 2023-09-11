let sum = 0

const createCard = (obj) => {
    
    const li = document.createElement('li')
    const span = document.createElement('span')
    const div = document.createElement('div')
        const button = document.createElement('button')
        const trashButton = document.createElement('button')

    span.innerText = `R$ ${obj.value}`
    

    if (obj.categoryID == 0){
        button.innerText = 'Entrada'
        sum += obj.value
    } else {
        button.innerText = 'Saída'
        sum -= obj.value
    }
    trashButton.classList.add('trash')

   trashButton.id = obj.id

    div.append(button, trashButton)
    li.append(span, div)

    return li
}

const renderCards = (array) => {
    
    const ul = document.querySelector('ul')
    ul.innerHTML = ' '
    sum = 0
    const sumValues = document.querySelector('.total')
    sumValues.innerText = sum

        array.forEach( (element) => { 

        const li = createCard(element)
        ul.appendChild(li)

        const sumValues = document.querySelector('.total')
        sumValues.innerText = `R$ ${sum}`
    })

    handleDeleteCards(insertedValues)
}

const newCards = () => {

    let card = {}

    const buttons = document.querySelectorAll('.type')
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            card.categoryID = parseFloat(e.target.id)
        })
    })

    const buttonAction = document.querySelector('.action__insert')
    buttonAction.addEventListener('click', ()  => {

    const newValue = document.querySelector('.container__input > input').value
    if (card.categoryID == null) {
        alert('Por favor, selecione o tipo')
    } else if (newValue == ''){
        alert('Por favor, digite um valor')
    } else {
    
    card.value = parseFloat(newValue)

    const id = insertedValues.length + 1
    card.id = id

    insertedValues.unshift(card)

    renderCards(insertedValues)
    card = {}

    document.querySelector('.container__input > input').value = null 
    
    const modal = document.querySelector('.modal__controller')
        modal.classList.remove('animation')
        modal.close()
    }})  
    
    handleDeleteCards (insertedValues)
}

const handleDeleteCards = (array) => {
    
    const remove = document.querySelectorAll('.trash')

    remove.forEach ( (element) => {
        element.addEventListener('click', (element) => {
            
            const buttonId = element.target.id
            

            const findValueIndex = array.findIndex(obj => obj.id == Number(buttonId))
            

            const itemRemoved = array.splice(findValueIndex, 1)
            console.log(itemRemoved)
            renderCards(array)
        })
    })
}

