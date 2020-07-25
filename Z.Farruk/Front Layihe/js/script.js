$(document).ready(function () {


// Accordion menu

$('.toggle').click(function() {
  event.preventDefault();
  let $this = $(this);
  $("li").siblings().find(".main").removeClass('main')
  $this.addClass("main");

  if ($('.inner').is(':visible')) {
      $(".inner");
      $(".sign").text('+');
  }
  if ($(this).next(".inner").is(':visible')) {
      $(this).next(".inner");
      $(this).children(".sign").text('+');
  } else {
      $(this).next(".inner");
      $(this).children(".sign").text('-');
  }

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show').slideUp(250);
  } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(250);
      $this.next().toggleClass('show');
      $this.next().slideToggle(250);
  }


})

// Box Window Scrooltop
   

$(".scrolltop").on('click',function(){
  $("html").scrollTop(0);
})



// INPUT BASKET

$("#bag").mouseenter(function() {
  if ($("#count").text() == 0) {
      $(".texts").css("opacity", "1")
  }
})

$("#bag").mouseleave(function() {
  $(".texts").css("opacity", "0")
})
  

// HAMBURGER MENU--

$(document).on('click',".fa-bars",function(){
      $(".hamburger").toggleClass('right');
})
$(document).on('click','.fa-times',function(){
  $(".hamburger").removeClass("right").css("transition","all .5s")
})

// HEADER SCROOL

window.addEventListener("scroll",function(){
  let header =document.querySelector("header");
  header.classList.toggle("sticky" ,window.scrollY>350)   
  if(window.scrollY>350){
    document.querySelector(".cardmenu").style.display="none";
    document.querySelector(".menu").style.paddingLeft="5%"
   
  }else{
    document.querySelector(".cardmenu").style.display="block";
    document.querySelector(".menu").style.paddingLeft="0"
  }
})





//  INDEX HTML SLIDER

    $(document).on("click", ".angle", Change);
  function Change() {
    $(".slidercard").toggleClass("active");
  }
  setInterval(Change, 5000);


//   PROGRESS BAR

  $(".skill-per").each(function () {
    var $this = $(this);
    var per = $this.attr("per");
    $this.css("width", per + "%");
    $({ animatedValue: 0 }).animate(
      { animatedValue: per },
      {
        duration: 1000,
        step: function () {
          $this.attr("per", Math.floor(this.animatedValue) + "%");
        },
        complete: function () {
          $this.attr("per", Math.floor(this.animatedValue) + "%");
        },
      }
    );
  });


// PLUGIN SHOP SLIDE 

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


// TABS CODE 



  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
    var parent = $(this).closest('div');

    $(parent).find('li').removeClass('current');
    $(parent).find('.tab-content1').removeClass('current');

    $(this).addClass('current');
    $(parent).find("#"+tab_id).addClass('current');
  })



   
  
   


    
})

