const mainMenu = document.querySelector('.right');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
   mainMenu.style.display = 'flex ';
   mainMenu.style.top = '0';
   closeMenu.style.display = 'flex';
   
}

 function close(){
   mainMenu.style.top = '-110%';
   mainMenu.style.display ='flex';
   closeMenu.style.display = 'none';
}