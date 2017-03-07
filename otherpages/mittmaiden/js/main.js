
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });

}());


// start video fade in
var e = document.getElementById("bgv");
e.style.opacity = 0;

var vid = document.getElementById("bgv");
vid.oncanplaythrough = function() {
	var e = document.getElementById('bgv');
    fade(e);
};
vid.addEventListener('ended', function () {
  var op2 = 1;
	var timer2 = setInterval(function() {
        if (op2 <= 0) {
        	clearInterval(timer2);
        }
        vid.style.opacity = op2;
        vid.style.filter = 'alpha(opacity=' + op2 * 100 + ")";
        op2 -= op2 * 0.1 || 0.1;
    }, 50);
});
//start video fade out
function fade(element) {
    var op = 0;
    var timer = setInterval(function() {
        if (op >= 1) {
        	clearInterval(timer);
        	vid.play();
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1 || 0.1;
    }, 50);
}
//switch video
vid.addEventListener("ended", hideVideo, false);
aftervideo.style.display='none';
aftervideo.style.opacity = 0;
function hideVideo() {
	setTimeout(
		function(){
			var vid=document.getElementById('bgv');
			var aftervideo=document.getElementById('aftervideo');
			vid.removeEventListener("ended", hideVideo, false);
			vid.style.display='none';

			
			fade(aftervideo);
			aftervideo.style.display='block';
			
		}, 3000);
	}

//fade in image

	
	

}
main();