(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

        
        	$('.brand-logo-slider').slick({
            dots: false,
            arrows: true,
            speed: 300,
            slidesToShow: 8,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,
                cssEase: 'linear',
            infinite: true,
            autoplaySpeed: 5000,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }

              ]
        });
        
        
          $('.brand-carousel-top').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 5000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            infinite: true,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            variableWidth: true,
            rtl: true,
        });
        $('.brand-carousel-bottom').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 5000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            infinite: true,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            variableWidth: true,
        });

        
         	$('.testimonial-slider').slick({
            dots: false,
            arrows: true,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,
            infinite: true,
            autoplaySpeed:4000,
           prevArrow: $('.testimonial_prev'),
            nextArrow: $('.testimonial_next'),
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }

              ]
        });
        
        
        
         $('.tabs').on('click', function () {
            var tab = $(this);

            tab.addClass('is-active');

            if (tab.siblings().hasClass('is-active')) {
                tab.siblings().removeClass('is-active');
            }
        });

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    });
}(jQuery));
