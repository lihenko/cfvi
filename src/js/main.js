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


jQuery('.home-hero-slider').slick({
  infinite: true,
  dots:false,
  arrows:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: jQuery('.home-hero-slider-next-button'),
  prevArrow: jQuery('.home-hero-slider-prev-button'),
  responsive: [
    {
      breakpoint: 640,
      settings: {
        arrows:false,
        dots:true,
      }
    },
  ]
});


jQuery('.facilities-slider').slick({
  autoplay: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  arrows: true,
  dots: false,
  asNavFor: '.facilities-slider-thumbnails',
  nextArrow: jQuery('.facilities-slider-next-button'),
  prevArrow: jQuery('.facilities-slider-prev-button'),
  responsive: [
    {
      breakpoint: 640,
      settings: {
        arrows:false,
      }
    },
  ]
});

jQuery('.facilities-slider-thumbnails').slick({
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.facilities-slider',
  dots: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 510,
      settings: {
        slidesToShow: 3,
        arrows: false,
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
  ]
});

var product_menu = jQuery('#product_menu_select');

product_menu.on('change', function () {
  var product = jQuery(this).val();
  jQuery('.desktop-product-menu-item').removeClass('active');
  jQuery('.desktop-product-menu-wrap').find("[data-type='" + product + "']").addClass('active');
  jQuery('.product-tab').removeClass('active').addClass('hidden');
  jQuery('.product-tabs').find("#"+product).removeClass('hidden').addClass('.active');
})

var desktop_product_menu_item = jQuery('.desktop-product-menu-item');

desktop_product_menu_item.on('click', function () {
  var current_product_type = jQuery(this).data('type');
  desktop_product_menu_item.removeClass('active');
  jQuery(this).addClass('active');
  jQuery('#product_menu_select').val(current_product_type).change();
})


jQuery('.sertificates-slider').slick({
  infinite: true,
  dots:false,
  arrows:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: jQuery('.sertificates-slider-next-button'),
  prevArrow: jQuery('.sertificates-slider-prev-button'),
  responsive: [
    {
      breakpoint: 640,
      settings: {
        arrows:false,
        dots:true,
      }
    },
  ]
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