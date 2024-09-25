//main.js file




// Scroll to top
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);


function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

jQuery(document).on('click', 'a[href^="#"]', function (event) {
  if (jQuery(this).attr('href') == '#') {
    return;
  } else {
    event.preventDefault();
    jQuery('html, body').animate({
        scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top
    }, 500);
  }
  
});


jQuery('.testimonials-slider').slick({
  autoplay: true,
  slidesToScroll: 1,
  slidesToShow: 2,
  arrows: true,
  dots: false,
  nextArrow: jQuery('.testimonials-slider-next-button'),
  prevArrow: jQuery('.testimonials-slider-prev-button'),
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows:false,
        dots:true,
      }
    },
  ]
});