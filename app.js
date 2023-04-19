const btnToggleMenu = document.querySelector('.btn-toggle-menu')
const navMenu = document.querySelector('.nav-menu-container')
const navListMenu = document.querySelector('.nav-list-menu')

document.addEventListener('click',(e)=>{
    if(btnToggleMenu.contains(e.target)){
        navMenu.classList.toggle('active')
    }else if(navMenu.classList.contains('active') && !navListMenu.contains(e.target)){
        navMenu.classList.toggle('active')
    }
})