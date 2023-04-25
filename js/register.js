
let btnSenha = document.querySelector('#btnSenha');
let btnConfirmeSenha = document.querySelector('#btnComfirmeSenha');

let labelNome = document.querySelector('#label-nome');
let nome = document.querySelector('#input-nome');
let validNome = false

let labelUsuario = document.querySelector('#label-usuario');
let usuario = document.querySelector('#input-usuario');
let validUsuario = false

let labelSenha = document.querySelector('#label-senha'); 
let senha = document.querySelector('#input-senha');
let validSenha = false

let labelComfirmeSenha = document.querySelector('#label-comfirme-senha');
let comfirmeSenha = document.querySelector('#input-comfirme-senha');
let validComfirSenha = false

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Isira no minimo 3 caracteres'
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: #bacbe8')
        labelNome.innerHTML = 'Nome'
        validNome = true
    }
})

usuario.addEventListener('keyup', ()=>{
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Isira no minimo 5 caracteres'
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: #bacbe8')
        labelUsuario.innerHTML = 'Usuario'
        validUsuario = true

    }
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Isira no minimo 6 caracteres'
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: #bacbe8')
        labelSenha.innerHTML = 'Senha'
        validSenha = true
    }
})

comfirmeSenha.addEventListener('keyup', ()=>{
    if(senha.value != comfirmeSenha.value){
        labelComfirmeSenha.setAttribute('style', 'color: red')
        labelComfirmeSenha.innerHTML = 'Senhas deven ser iguais '
        validComfirSenha = false
    } else {
        labelComfirmeSenha.setAttribute('style', 'color: #bacbe8')
        labelComfirmeSenha.innerHTML = 'Comfirme senha'
        validComfirSenha = true
    }

})

function cadastrar(){
    if (validNome && validUsuario && validSenha && validComfirSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push({
            nomeCad: nome.value,
            userCad: usuario.value,
            senhaCad: senha.value,

        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = 'Cadastrando Usuário...'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(()=>{
            window.location.href = 'http://127.0.0.1:5500/login.html'
          }, 3000)
    
    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencha corretamente os campos'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
        
    }
    
}

btnSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#input-senha');
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');

    }

});

btnConfirmeSenha.addEventListener('click', () => {
    let inputConfirmeSenha = document.querySelector('#input-comfirme-senha');
    if (inputConfirmeSenha.getAttribute('type') == 'password') {
        inputConfirmeSenha.setAttribute('type', 'text');
    } else {
        inputConfirmeSenha.setAttribute('type', 'password');

    }

});






