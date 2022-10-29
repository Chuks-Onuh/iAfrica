$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
       // $('#menu-jk').scrollToFixed();
    }



})


$( document ).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


});




$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

window.onload= function () {
  setInterval(function(){ 
     plusSlides(1);
  }, 4500);
 }
 function readMoreFunction1() {
    var dots = document.getElementById("dots1");
    var contentText = document.getElementById("content1");
    var btnText = document.getElementById("buttonReadMore1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      contentText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      contentText.style.display = "inline";
    }
  } 
 function readMoreFunction() {
    var dots = document.getElementById("dots");
    var contentText = document.getElementById("content");
    var btnText = document.getElementById("buttonReadMore");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      contentText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      contentText.style.display = "inline";
    }
  }
  function readMoreFunction2() {
    var dots = document.getElementById("dots2");
    var contentText = document.getElementById("content2");
    var btnText = document.getElementById("buttonReadMore2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      contentText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      contentText.style.display = "inline";
    }
  }

  function readMoreFunction3() {
    var dots = document.getElementById("dots3");
    var contentText = document.getElementById("content3");
    var btnText = document.getElementById("buttonReadMore3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      contentText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      contentText.style.display = "inline";
    }
  }

  function readMoreFunction4() {
    var dots = document.getElementById("dots4");
    var contentText = document.getElementById("content4");
    var btnText = document.getElementById("buttonReadMore4");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      contentText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      contentText.style.display = "inline";
    }
  }

  function readMoreFunction5() {
    var dots = document.getElementById("dots5");
    var contentText = document.getElementById("content5");
    var btnText = document.getElementById("buttonReadMore5");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      contentText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      contentText.style.display = "inline";
    }
  }
  function readMoreFunction6() {
    var dots = document.getElementById("dots6");
    var contentText = document.getElementById("content6");
    var btnText = document.getElementById("buttonReadMore6");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      contentText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      contentText.style.display = "inline";
    }
  }
  function readMoreFunction7() {
    var dots = document.getElementById("dots7");
    var contentText = document.getElementById("content7");
    var btnText = document.getElementById("buttonReadMore7");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      contentText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      contentText.style.display = "inline";
    }
  }
  function readMoreFunction8() {
    var dots = document.getElementById("dots8");
    var contentText = document.getElementById("content8");
    var btnText = document.getElementById("buttonReadMore8");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      contentText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      contentText.style.display = "inline";
    }
  }
  