const searchProfile = async (name) => {
    
    const div = document.querySelector('.animation')
    div.classList.add('loader')

    const baseUrl = ' https://api.github.com/users/'
    const profile = await fetch(`${baseUrl + name}`, {method: "GET"})
    .then( (response) => {
       if (response.ok) {
        setTimeout(() => {
            window.location.href = './src/pages/profile.html' 
        }, 2000)
         
       } else {

        setTimeout( () => {
            window.location.href = './src/pages/error.html'
        }, 4000)
        
        throw new Error ('Algo deu errado, tente novamente')
       }
    })
    .catch(error => console.log(error))

    return profile
}

export const userName = () => {

    const nameInput = document.querySelector('input')
    const button = document.querySelector('button')

    button.addEventListener('click', async () => {

        let name = nameInput.value
        localStorage.setItem('user', name)

        await searchProfile(name)
    })
}


userName()