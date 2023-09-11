export const inputPrice = () => {
    const input = document.querySelector('input')
    const span = document.querySelector('#span__price')

    input.addEventListener('input',() => {
        span.innerText = input.value

        const controller = input.value

        return controller
    })
}

export const renderCards = (array) => {

    const ul = document.querySelector('ul')
    ul.innerHTML = ''

    array.forEach(obj => {

        ul.insertAdjacentHTML(
           "afterbegin",
           
           `
           <li>
           <img src="${obj.img}">
            <div class="card-itens">
                <div class="card__header">
                    <span>${obj.band}</span><span>${obj.year}</span>
                </div>
            <h4>${obj.title}</h4>
                <div class="card__price">
           <span>R$${obj.price}</span><button>Comprar</button>
                </div>
           </div>
           </li>
           `
        )
    });
}