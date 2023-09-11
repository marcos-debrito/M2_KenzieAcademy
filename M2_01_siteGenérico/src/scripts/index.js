/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function handleModal() {
    let buttonRegister = document.querySelectorAll('.registerButton')
    const modalContainer = document.querySelector('#registerContainer')

    for (i=0; i < buttonRegister.length; i++){
    buttonRegister[i].addEventListener('click', () => {
        modalContainer.showModal()
    })
    }
    closeModal()
}

function closeModal() {
    const buttonClose = document.querySelector('#closeModal')
    const modalContainer = document.querySelector('#registerContainer')

    buttonClose.addEventListener('click', () => {
        modalContainer.close()
    })
}
handleModal()
