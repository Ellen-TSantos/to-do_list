let btn = document.querySelector('.material-symbols-outlined');

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')

    } else {
        inputSenha.setAttribute('type', 'password')

    }
})

function entrar() {
    let userLabel = document.querySelector('#userLabel')
    let usuario = document.querySelector('#usuario')

    let labelSenha = document.querySelector('#labelSenha')
    let senha = document.querySelector('#senha')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userVald = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if (usuario.value == item.userCad && senha.value == item.senhaCad){

            userVald = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }

        }
    })

    if (usuario.value === "" && senha.value === "") {
        msgError.setAttribute('style', 'display: block')
        msgError.setAttribute('style', 'color: red')
        msgError.innerHTML = 'Preencha todos os campos'
        usuario.focus()
        return;
    }  
      
    if (usuario.value == userVald.user && senha.value == userVald.senha) {

         window.location.href = "http://127.0.0.1:5500/index.html"

        let mathRandon = Math.random().toString(16).substr(2)
        let token = mathRandon + mathRandon

        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userVald))
    } else {
        
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style','color:red', 'display: block')
        msgError.innerHTML = 'Usuario ou senha incorretos'
        usuario.focus()
    }
    
}