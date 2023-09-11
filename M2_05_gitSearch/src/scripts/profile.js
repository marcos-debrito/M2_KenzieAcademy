const nameUser = localStorage.getItem('user')
const baseUrl = ' https://api.github.com/users/'

const profile = async (user) => {
    const profile = await fetch(`${baseUrl + user}`, {method: "GET"})
    .then( (response) => {
        if (response.ok) {
         return response.json()}
}) 
    return profile
}
const repos = async (user) => {
    const repos = await fetch(`${baseUrl + user}/repos`, {method: "GET"})
    .then( (response) => {
        if (response.ok) {
            return response.json()}
        })
        return repos
}


const createHeader = async() => {

    const user = await profile(nameUser)
    const divContainer = document.querySelector('.container')

    divContainer.insertAdjacentHTML('afterbegin', 
    `
    <header>
          <div>
            <img src="${user.avatar_url}" alt="imagem de pergil">
            <span>${user.name}</span>
          </div>

          <button>Trocar de usuário</button>
      </header>
    `
    ) 
    returnHome()
}

const createRepos = async() => {

    const repositories = await repos(nameUser)
    const main = document.createElement('main')
    const ul = document.createElement('ul')
    const divContainer = document.querySelector('.container')

    main.appendChild(ul)
    divContainer.appendChild(main)

    repositories.forEach( (obj) => {
        console.log(obj)

        ul.insertAdjacentHTML('beforeend',
        `
        <li>
            <span class="header">${obj.name}</span>

            <span class="description">${obj.description}</span>

            <a href='${obj.html_url}' target='_blank'>Repositório</a>
        </li>
        `)

    })
}

const returnHome = () => {

const button = document.querySelector('button')
const div = document.querySelector('.animation')



button.addEventListener('click', () => {
    div.classList.add('loader')

    setTimeout( () => {
        window.location.href = '../../'
    }, 1500)
        
    })
}


createHeader()
createRepos()