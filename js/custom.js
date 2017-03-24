jQuery(document).ready(function () {


/*-------------------------------------------------*/
/* =  Animated content
/*-------------------------------------------------*/


/*==========================*/
/* Sticky Navigation
/*==========================*/
     
    jQuery("#navigation").sticky({topSpacing:0});

    
/* ==============================================
Drop Down Menu Fade Effect
=============================================== */  

    $('.nav-toggle').hover(function() {
        'use strict';
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
        }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(250)
     });



/*==========================*/
/* Navigation Scrolling
/*==========================*/
    jQuery('.nav').onePageNav({
            filter: ':not(.external)',
            begin: function() {
            console.log("start")
            },
            end: function() {
            console.log("stop")
            }
        });


    var navigationHeight = jQuery("#navigation").outerHeight();

     jQuery('#down_glyph, #magness_btn').click(function(){
        jQuery('html, body').animate({
            scrollTop: jQuery( $.attr(this, 'href')).offset().top 
        }, 800, 'easeInQuad');
     })

    jQuery('.align-center a, .caption-inside a, .top-logo a, .video-section a').click(function(){
        jQuery('html, body').animate({
            scrollTop: jQuery( $.attr(this, 'href') ).offset().top - navigationHeight + 44
        }, 800, 'easeInQuad');
        
        /* Fix jumping of navigation. */
        setTimeout(function() {
            jQuery(window).trigger('scroll');
        }, 900);
        
        return false;
    });



    


    

/*----------------------------------------------------*/
/*  Parallax section
/*----------------------------------------------------*/
    //Calculating page width
    pageWidth = jQuery(window).width();

    //Parallax  
    jQuery(window).bind('load', function () {
        if(pageWidth > 980) {
            parallaxInit();
        }                       
    });

    function parallaxInit() {
        jQuery('.landing-left').parallax("30%", 0.1);
        jQuery('.testimonial-wrap').parallax("30%", 0.1);
        jQuery('.quote-wrap').parallax("30%", 0.1);
        jQuery('.subscription-wrap').parallax("30%", 0.1);
        jQuery('.image-parallax').parallax("50%", 0.1);
        
    }


    //Horizontal parallax
    jQuery('.about-wrap .parallax-layer')
        .hparallax({
          mouseport: jQuery('.about-wrap')
    }); 


/*----------------------------------------------------*/
/*  Animated Progress Bars
/*----------------------------------------------------*/

    jQuery('.skills li').each(function () {
        jQuery(this).fappear(function() {
          jQuery(this).animate({opacity:1,left:"0px"},800);
          var b = jQuery(this).find(".progress-bar").attr("data-width");
          jQuery(this).find(".progress-bar").animate({
            width: b + "%"
          }, 1300, "easeOutCirc");
        }); 
    });   


/*----------------------------------------------------*/
/*  Animated Count To
/*----------------------------------------------------*/

    jQuery('.fun-wrap .fun-box').each(function () {
        jQuery(this).fappear(function() {
            jQuery('.fun').countTo();
        }); 
    });


 
/*----------------------------------------------------*/
/*  Scroll To Top Section
/*----------------------------------------------------*/
    jQuery(document).ready(function () {
    
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
                jQuery('.scrollup').fadeIn();
            } else {
                jQuery('.scrollup').fadeOut();
            }
        });
    
        jQuery('.scrollup').click(function () {
            jQuery("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    
    });





/*----------------------------------------------------*/
/*  Accordion Section
/*----------------------------------------------------*/

    jQuery('.accordionMod').each(function (index) {
        var thisBox = jQuery(this).children(),
            thisMainIndex = index + 1;
        jQuery(this).attr('id', 'accordion' + thisMainIndex);
        thisBox.each(function (i) {
            var thisIndex = i + 1,
                thisParentIndex = thisMainIndex,
                thisMain = jQuery(this).parent().attr('id'),
                thisTriggers = jQuery(this).find('.accordion-toggle'),
                thisBoxes = jQuery(this).find('.accordion-inner');
            jQuery(this).addClass('panel');
            thisBoxes.wrap('<div id=\"collapseBox' + thisParentIndex + '_' + thisIndex + '\" class=\"panel-collapse collapse\" />');
            thisTriggers.wrap('<div class=\"panel-heading\" />');
            thisTriggers.attr('data-toggle', 'collapse').attr('data-parent', '#' + thisMain).attr('data-target', '#collapseBox' + thisParentIndex + '_' + thisIndex);
        });
        jQuery('.accordion-toggle').prepend('<span class=\"icon\" />');
        jQuery("div.accordion-item:first-child .accordion-toggle").addClass("current");
        jQuery("div.accordion-item:first-child .icon").addClass("iconActive");
        jQuery("div.accordion-item:first-child .panel-collapse").addClass("in");
        jQuery('.accordionMod .accordion-toggle').click(function () {
            if (jQuery(this).parent().parent().find('.panel-collapse').is('.in')) {
                jQuery(this).removeClass('current');
                jQuery(this).find('.icon').removeClass('iconActive');
            } else {
                jQuery(this).addClass('current');
                jQuery(this).find('.icon').addClass('iconActive');
            }
            jQuery(this).parent().parent().siblings().find('.accordion-toggle').removeClass('current');
            jQuery(this).parent().parent().siblings().find('.accordion-toggle > .icon').removeClass('iconActive');
        });
    });


/*----------------------------------------------------*/
/*  PrettyPhoto
/*----------------------------------------------------*/

    jQuery(function(){
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
              opacity: 0.5,
              social_tools: "",
              deeplinking: false
        });

        jQuery('a[data-rel^="prettyPhoto"]').prettyPhoto();
    });     



    jQuery("#horizontal-tabs").tytabs({
        tabinit: "1",
        fadespeed: "fast"
    });








/*----------------------------------------------------*/
/*  Portfolio Isotope
/*----------------------------------------------------*/




    jQuery(document).ready(function(){ 

        // Portfolio
        (function($) {
            "use strict";
            var $container = $('#portfolio-wrap'),
                $items = $container.find('.portfolio-item'),
                portfolioLayout = 'fitRows';
                
                if( $container.hasClass('portfolio-centered') ) {
                    portfolioLayout = 'masonry';
                }
                        
                $container.isotope({
                    filter: '*',
                    animationEngine: 'best-available',
                    layoutMode: portfolioLayout,
                    animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                },
                masonry: {
                }
                }, refreshWaypoints());
                
                function refreshWaypoints() {
                    setTimeout(function() {
                    }, 1000);   
                }
                        
                $('#filters a').on('click', function() {
                        var selector = $(this).attr('data-filter');
                        $container.isotope({ filter: selector }, refreshWaypoints());
                        $('#filters a').removeClass('active');
                        $(this).addClass('active');
                        return false;
                });
                
                function getColumnNumber() { 
                    var winWidth = $(window).width(), 
                    columnNumber = 1;
                
                    if (winWidth > 1200) {
                        columnNumber = 4;
                    } else if (winWidth > 950) {
                        columnNumber = 4;
                    } else if (winWidth > 600) {
                        columnNumber = 3;
                    } else if (winWidth > 400) {
                        columnNumber = 2;
                    } else if (winWidth > 250) {
                        columnNumber = 1;
                    }
                        return columnNumber;
                    }       
                    
                    function setColumns() {
                        var winWidth = $(window).width(), 
                        columnNumber = getColumnNumber(), 
                        itemWidth = Math.floor(winWidth / columnNumber);
                        
                        $container.find('.portfolio-item').each(function() { 
                            $(this).css( { 
                            width : itemWidth + 'px' 
                        });
                    });
                }
                
                function setPortfolio() { 
                    setColumns();
                    $container.isotope('reLayout');
                }
                    
                $container.imagesLoaded(function () { 
                    setPortfolio();
                });
                
                $(window).on('resize', function () { 
                setPortfolio();          
            });
        })(jQuery);
    

    

    });



/*----------------------------------------------------*/
/*  BxSlider
/*----------------------------------------------------*/



/*----------------------------------------------------*/
/*  Contact Form Section
/*----------------------------------------------------*/
    $("#contact").submit(function (e) {
        e.preventDefault();
        var email = $("#email").val();
		var clicked = $(this).attr('class');
        var dataString = '&email=' + email + '&wasclicked=' + clicked;
        console.log(clicked);

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };

        if (isValidEmail(email))  {
            $.ajax({
                type: "POST",
                url: "ajax/process.php",
                data: dataString,
                success: function () {
                    $('.success').fadeIn(1000).delay(3000).fadeOut(1000);
                    $('#contact')[0].reset();
                }
            });
        } else {
            $('.error').fadeIn(1000).delay(5000).fadeOut(1000);

        }

        return false;
    });



 /* ==============================================
Firefox anchor fix
=============================================== */
    $(document).ready(function(){
        if ( $.browser.mozilla ) {
        var h = window.location.hash;
        if (h) {
            var headerH = $('#navigation').outerHeight();
            $('html, body').stop().animate({
                scrollTop : $(h).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

                event.preventDefault();
        }

    }
    });


$('.magness-cta').click(function(){

	console.log(this + 'was clicked');

// ($(this).is(':visible')? 'I\'m done reading more' : 'Read more')

//	$(this).html('hide case');

		if ($(this).text() == "hide case") {
            $(this).text("view case");
        }
        else {
            $(this).text("hide case");
        }
	$('#magness').toggleClass('open');
}
);
});
