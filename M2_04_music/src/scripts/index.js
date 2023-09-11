import { products,categories } from "./productsData.js";
import { renderDarkMode} from "./filters.js"
import { renderCards, inputPrice } from "./renderCards.js";

categories.forEach( (element) => {

    let btn = document.createElement('button')
    const container = document.querySelector('.container__buttons')

    btn.classList.add('btn__filter')
    btn.innerHTML = element 

    btn.addEventListener('click', () => {

        categories.forEach( (category) => {
            if(btn.innerHTML == categories[0]){
                renderCards(products)
             } else if (btn.innerHTML == category){
                 const index = categories.indexOf(category)

                 const filter = products.filter(element => element.category == index)

                 renderCards(filter)
            }
        })
    })
    container.append(btn)
})

 const filterProducts = (products) => {

    const input = document.querySelector('input')
    input.addEventListener('input', () => {

        let newArr = []
        products.forEach( product => {
         if (product.price <= input.value ){
                newArr.push(product)}
        }) 
        renderCards(newArr) 
    })
 }


renderDarkMode()
inputPrice()
renderCards(products)
filterProducts(products)