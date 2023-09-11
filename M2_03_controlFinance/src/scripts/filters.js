const inflow = document.querySelector ('.inflow')

const outflow = document.querySelector ('.outflow')

const allItens = document.querySelector('.all')

inflow.addEventListener('click', () => {
    const inflow = insertedValues.filter(obj => obj.categoryID == 0)
    sum = 0
    renderCards(inflow)
})

outflow.addEventListener('click', () => {
    const outflow = insertedValues.filter(obj => obj.categoryID == 1)
    sum = 0
    renderCards(outflow)
})

allItens.addEventListener('click', () => {
    sum = 0
    renderCards(insertedValues)

})
