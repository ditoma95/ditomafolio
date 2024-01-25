const iconTggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');

iconTggle.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', ()=>{
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) =>{
    menuLink.addEventListener('click', ()=>{
        navbarMenu.classList.remove('active');
    });
});


//change backroug

function scrollHeader() {
    const header = document.getElementById('header');
    this.scrolly >= 20 ? header.classList.add('active') : header.classList.remove('active');
}
window.addEventListener('scroll', scrollHeader);

//les effets
const typed = document.querySelector('.typed');

if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50, 
        backDelay: 2000, 
    });
}