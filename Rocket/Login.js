function Login(){
    var done = 0;
    var usuario = document.login.usuario.value;
    var password = document.login.password.value;
    if(usuario =='admin1' || 'admin2'){
    if(password == '123456'){
        window.location = "Categorias.html" 
    }else{
        alert('Usuario o clave incorrecta')
    }
    }else{
    if(usuario == "" || password == ""){
        alert('Todos los campos son obligatorios')
    }
    }
}
document.oncontextmenu = function(){return false}

const passwordInput = document.getElementById('password');
const showPasswordButton = document.getElementById('showPasswordButton');
const showIcon = document.getElementById('showIcon');
const hideIcon = document.getElementById('hideIcon');

showPasswordButton.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showIcon.style.display = 'none';
    hideIcon.style.display = 'inline-block';
  } else {
    passwordInput.type = 'password';
    showIcon.style.display = 'inline-block';
    hideIcon.style.display = 'none';
  }
});