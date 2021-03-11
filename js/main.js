let headerBtn = document.querySelector('.header__menu-btn');
let navBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu');

headerBtn.addEventListener('click', function(){
 menu.classList.add('menu--active');
});

navBtn.addEventListener('click', function(){
  menu.classList.remove('menu--active');
 });