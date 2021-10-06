let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    document.querySelector('.search-form').classList.remove('munna');
    navbar.classList.toggle('munna');
    loginForm.classList.remove('munna');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('munna');
    navbar.classList.remove('munna');
    document.querySelector('.search-form').classList.remove('munna');
}

document.querySelector('#search-btn').onclick = () =>{
    document.querySelector('.search-form').classList.toggle('munna');
    loginForm.classList.remove('munna');
    navbar.classList.remove('munna');
}

window.onscroll = () =>{
    document.querySelector('.search-form').classList.remove('munna');
    loginForm.classList.remove('munna');
    navbar.classList.remove('munna');
}


let themeBtn = document.querySelector('#theme-btn');
themeBtn.onclick = () =>{

    themeBtn.classList.toggle('fa-sun')

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('munna');
    }
    else{
        document.body.classList.remove('munna')
    }
};


VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 25,
});