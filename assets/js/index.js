
let menuButton=document.querySelector("#menu");
let menuItems=document.querySelector("#menu-items");
menuButton.addEventListener('click',function(){
    if(menuItems.classList.contains('menu-close')){
        menuItems.classList.remove('menu-close');
    }
    else{
        menuItems.classList.add('menu-close');
    }
});