function handleModal() {

    const showButton = document.querySelector('.show-modal')
    const modal = document.querySelector('.modal__controller')
    const input = document.querySelector('.container__input > input')

    showButton.addEventListener('click',() => {
        modal.classList.add('animation-in')
        modal.classList.remove('animation-out')
        modal.showModal()
    });

    newCards ()
    closeModal()
}

function closeModal() {

    const closeButton = document.querySelector('.modal__button-close')
    const modal = document.querySelector('.modal__controller')

    closeButton.addEventListener('click', () => {
        modal.classList.add('animation-out')
        modal.classList.remove('animation-in')

        setTimeout( () => {
            const closeModal = modal.close()
        }, 400)
    })
}