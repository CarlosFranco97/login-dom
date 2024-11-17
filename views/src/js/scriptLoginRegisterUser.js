const abrirLogin = document.getElementById('abrir-login');
const formLogin = document.getElementById('login');
const abrirRegistro = document.getElementById('abrir-registro');

abrirLogin.addEventListener('click', () => {
    formLogin.classList.add('abrir-login');
    formLogin.classList.remove('cerrar-login');
});

abrirRegistro.addEventListener('click', () => {
    formLogin.classList.add('cerrar-login');
    formLogin.classList.remove('abrir-login');
});


