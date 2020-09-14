//for the change of tabs 
$(function() {
  var $a = $(".tabs li");
	$a.click(function() {
		$a.removeClass("active");
		$('.tab-pane').addClass('animated animate__backInRight');
	$(this).addClass("active");
	});
});

// for scrol to top 
  var btn_scroll = $('#button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn_scroll.addClass('show');
  } else {
    btn_scroll.removeClass('show');
  }
});
btn_scroll.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// for slick slider
$(document).ready(function(){
    $('.slider').slick({
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 500,
      dots:false,
      centerMode: false,
      easing:'linear',
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          cssEase: 'linear'
        }
      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          cssEase: 'linear'
        }
      },  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 500,
          cssEase: 'linear'
        }
      }]
    });
  });
             ////////End of Js//////////