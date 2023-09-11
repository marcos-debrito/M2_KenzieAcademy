export const renderDarkMode = () => {
    const button = document.querySelector('.theme__controller')
    const html = document.querySelector('html')

    const modePreference = JSON.parse(localStorage.getItem('dark__mode'))

    if (modePreference) {
        html.classList.add('dark__mode')
    } else {
        html.classList.remove('dark__mode')
    }

    
    button.addEventListener ('click', () => {

        html.classList.toggle('dark__mode')
        
        if (html.classList.contains('dark__mode')) {
            localStorage.setItem('dark__mode', true)
            if (button.classList.contains('dark')) {
                button.classList.remove('dark')
                button.classList.add('light')} 
        } else {
            localStorage.setItem('dark__mode', false)
            if (button.classList.contains('light')) {
                button.classList.add('dark')
                button.classList.remove('light')}
        }
    })
}

