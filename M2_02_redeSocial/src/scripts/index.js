function listCardsSuggestions(array){

    for (i = 0; i < array.length ; i++){
       createCardsSuggestions(array[i])
    }
    
}

function createCardsSuggestions(obj){
    let div = document.createElement('div');
        let figure = document.createElement('figure')
    let img = document.createElement('img');
    let divNames = document.createElement('div');
        let name = document.createElement('span');
        let stack = document.createElement('span');
    let button = document.createElement('button')

    img.src = obj.img;
    name.innerText = obj.user;
    name.className = 'nameSuggestion'
    stack.innerText = obj.stack;
    stack.className = 'stack'
    button.innerText = 'Seguir'

    button.addEventListener('click', () => {

       button.classList.toggle('follow')

       if (button.innerText == 'Seguir'){
        button.innerText = 'Seguindo'
       } else {
        button.innerText = 'Seguir'
       }

    })

    divNames.append(name, stack);
    figure.append(img, divNames);

    div.append(figure, button);

    let aside = document.querySelector('.container__sugestions')
    aside.appendChild(div)

}

function publishPosts(){

    document.querySelector('.container__posts').innerHTML = ''
    let title = document.createElement('h2')
    title.innerText = 'Posts'
    document.querySelector('.container__posts').appendChild(title)

    for (i = 0; i < posts.length; i++){
        
        for (j = 0; i < users.length; j++){

            if (posts[i].user == users[j].user){
                
                let card = createCards(users[j])
                
                let post = createPosts(posts[i])

                let button = createButton(posts[i])

                let div = document.createElement('div')
                div.className = 'posts__style'

                div.append(card, post, button)

                let postagem = document.querySelector('.container__posts')
                postagem.appendChild(div)
                break
            } 
        }   
    }   
}

        function createCards(obj){
            
            let div = document.createElement('div');
            div.className = 'post__name'
            let img = document.createElement('img');
            let divNames = document.createElement('div');
                let name = document.createElement('span');
                let stack = document.createElement('span');

            img.src = obj.img;
            name.innerText = obj.user;
            name.className = 'name__style'
            stack.innerText = obj.stack;
            stack.className = 'stack'

            divNames.append(name, stack);
            div.append(img, divNames);

            return div
        }

        function createPosts(obj){
            let postTitle = document.createElement('span')
            postTitle.className = 'text__title'
            let postText = document.createElement('span')
            postText.className = 'text__user'
            postText.classList.add('post__height')
            let div = document.createElement('div')
            div.className = 'post__text'

            postTitle.innerText = obj.title
            postText.innerText = obj.text

            div.append(postTitle, postText)

            return div
        }

        function createButton(obj) {
            let btn = document.createElement('button')  
            let fig = document.createElement('figure')
            let img = document.createElement('img')
            let div = document.createElement('div')
            let span = document.createElement('span') //likes

            btn.className = 'modal__button'
            btn.id = obj.id
            img.className = 'heart-grey';
            div.className = 'post__buttons'
                
            span.innerText = obj.likes
            img.src = './src/assets/img/heart_grey.svg'
            
                img.addEventListener('click', () => {
                    
                    if (img.classList.contains('heart-grey')){
                    img.src = './src/assets/img/heart_red.svg'
                    span.innerText = obj.likes + 1 
                    img.className = ''
                    } else {
                    img.src = './src/assets/img/heart_grey.svg'
                    span.innerText = obj.likes 
                    img.className = 'heart-grey'
                    }
                    
                })

            fig.append(img, span)
            btn.innerText = 'Abrir post'

            div.append(btn, fig)

            return div
        }


function showPostModal(array) {
    let modalController = document.querySelector('#modal')
    let modalContainer = document.createElement('div')
    modalContainer.className = 'modal__container'
     let buttons = document.querySelectorAll('.modal__button') 
            
        for (i=0; i < buttons.length; i++){
            buttons[i].addEventListener('click', () => {
                modalController.innerHTML = ''
        
                const post = findPost(array, event.target.id)
         
                const modalUser = createCards(post)
                const modalCard = createPosts(post)
        
                const buttonClose = document.createElement('button')
                    
                buttonClose.classList.add('buttonClose')
                buttonClose.innerText = 'X'
                    
                    buttonClose.addEventListener('click', () => {
                        modalController.close()
                        })
        
                modalController.append(modalUser, buttonClose, modalCard)
                modalController.showModal()
                document.querySelector('dialog > .post__text > .text__user').classList.remove('post__height')
                })
            }
        
        }
        
function findPost(array, id) {
let post = {}
        
    for (let i = 0; i < array.length; i++){
        if (array[i].id == id){
            post = array[i]
        
            return post
            }
        }
    }
      
publishPosts()
showPostModal(posts)
listCardsSuggestions(suggestUsers)


let buttonNewPost = document.querySelector('.post__text > button')

buttonNewPost.addEventListener('click', () => {

    let titlePost = document.querySelector('.input__title').value
    let description = document.querySelector('.my-post').value

    if (description == '' || titlePost ==''){
        return alert('invalid')
    }

    let newPost = {
        id: 0,
        title: titlePost,
        text: description,
        user: "Marcos Brito",
        stack: "Future Full Stack developer",
        img: "./src/assets/img/user1.svg",
        likes: 0
    }

    posts.unshift(newPost)

    publishPosts()
    showPostModal(posts)

    document.querySelector('.input__title').value = ''
    document.querySelector('.my-post').value = ''
})


