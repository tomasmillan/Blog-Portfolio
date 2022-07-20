/* Open and close menu */
const menuToggle = document.querySelector('.menu__toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    console.log('activaste el menu');
}

window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0); 
    console.log('estas scrolleando')
})
console.log('hola   ')