export const returnHome = () => {

    const button = document.querySelector('button')
    button.addEventListener('click', () => {

        window.location.href = '../../'
    })
}

returnHome()