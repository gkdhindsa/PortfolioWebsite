  
  const config={
    type: 'carousel',
  perView: 4,
  focusAt: 'center',
  breakpoints: {
  
    800: {
      perView: 2
    },
    480: {
      perView: 1
    }}
  };


    new Glide('.glide', config).mount()



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


/*menu navigation*/
let array=['home', 'skills', 'projects', 'contact']
$.each($('.nav-item'), function(key, value){
  $(value).on('click', function(){
    $('.nav').click()
    let sec= $(value).children('a').attr('href').slice(1,)
  
    $.each(array, function(k, v){
      $(`#${v}`).addClass('hide');
    })
    $(`#${sec}`).removeClass('hide')
  
  }) 
})

function setToggle(){
  document.body.scrollLeft=0;
  
  if(window.screen.width>=768){
    $('.projects-container').removeClass('hide')
    $('.projects-container-2').addClass('hide')
  }
  else{
    $('.projects-container-2').removeClass('hide')
    $('.projects-container').addClass('hide')
  }

}
window.addEventListener("load", setToggle)
window.addEventListener("resize", setToggle);

$.each($('.p-img>img'),function(k,v){
  let val=$(v).attr('alt')
  $(v).parent().children('.img-overlay').children('h4').html(val)
})

