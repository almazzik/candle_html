const menuBtn = document.querySelector('.menu_btn');
const menuModile = document.querySelector('.header_menu-list');


menuBtn.addEventListener('click', ()=> {
  menuModile.classList.toggle('menu-open');
});