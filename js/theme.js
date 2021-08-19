"use strict";




// Prealoder
 function prealoader () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }



// Main-banner slider 
function mainBanner () {
  if ($("#main_slider").length) {
    $("#main_slider").revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      loops:false,
      delay:10000,
      navigation: {
          arrows: {
            style: "hades",
            enable: true,
            hide_onmobile: false,
            hide_onleave: false,
            tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div></div>',
            left: {
                h_align: "left",
                v_align: "center",
                h_offset: 10,
                v_offset: 0
            },
            right: {
                h_align: "right",
                v_align: "center",
                h_offset: 10,
                v_offset: 0
            }
        },
         bullets: {
                  enable: true,
                  hide_onmobile: false,
                  style: "uranus",
                  hide_onleave: false,
                  direction: "horizontal",
                  h_align: "center",
                  v_align: "bottom",
                  h_offset: -15,
                  v_offset: 90,
                  space: 10,
                  tmp: '<span class="tp-bullet-inner"></span>'
              }

      },
      responsiveLevels:[2220,1183,975,751],
                gridwidth:[1180,970,770,580],
                gridheight:[900,900,800,700],
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  disableFocusListener:false,
                }   
    }); 
  };
}


// Main-banner slider 
function mainBannerTwo () {
  if ($("#main_slider_two").length) {
    $("#main_slider_two").revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      loops:false,
      delay:1550000,
      navigation: {
          arrows: {
            style: "hades",
            enable: true,
            hide_onmobile: false,
            hide_onleave: false,
            tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div></div>',
            left: {
                h_align: "left",
                v_align: "center",
                h_offset: 10,
                v_offset: 0
            },
            right: {
                h_align: "right",
                v_align: "center",
                h_offset: 10,
                v_offset: 0
            }
        },
         bullets: {
                  enable: true,
                  hide_onmobile: false,
                  style: "uranus",
                  hide_onleave: false,
                  direction: "horizontal",
                  h_align: "center",
                  v_align: "bottom",
                  h_offset: -573,
                  v_offset: 90,
                  space: 10,
                  tmp: '<span class="tp-bullet-inner"></span>'
              }

      },
      responsiveLevels:[2220,1183,975,751],
                gridwidth:[1180,970,770,580],
                gridheight:[900,900,800,700],
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  disableFocusListener:false,
                }   
    }); 
  };
}


// Attroney slider
function attorneySlider() {
  if($("#attorney_slider").length) {
        var owl = $("#attorney_slider");
 
          owl.owlCarousel({
              items : 4, 
              itemsDesktop : [992,3],
              itemsDesktopSmall : [768,2], 
              itemsTablet: [550,1], 
              itemsMobile : false,// itemsMobile disabled - inherit from itemsTablet option
              pagination : false,
              autoPlay:7000
          });
         
          // Custom Navigation Events
          $(".next").on('click', function(){
            owl.trigger('owl.next');
          })
          $(".prev").on('click', function(){
            owl.trigger('owl.prev');
          })
  };
}


// Clinet review Slider 
function clientSlider() {
  if($("#client_slider").length) {

     $("#client_slider").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [992,2],
      itemsTablet: [700,1]
 
  }); 

  };
}


// Select menu Dropdown
function dropdownSelect() {
  if($("#selectmenu").length) {
    $( "#selectmenu" ).selectmenu();
  };
}



// Partners Logo
function partnersLogo() {
  if ($("#partner_logo").length) {
      var owl = $("#partner_logo");
   
    owl.owlCarousel({
        pagination:false,
        autoPlay:5000,
        items : 4, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [991,2], // betweem 900px and 601px
        itemsTablet: [500,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
  }
}

// Counter function
function CounterNumberChanger () {
  var timer = $('.timer');
  if(timer.length) {
    timer.appear(function () {
      timer.countTo();
    })
  }
}

// Search Form
function searchForm () {
  if($(".search_icon").length){
    $(".search_icon").on('click', function(){
      $("#search_option").fadeToggle(400);
    })
  }
}



// Practice Area
function practiceArea () {
  if($("#parctise-area_slider").length) {
        var owl = $("#parctise-area_slider");
 
          owl.owlCarousel({
              items : 4, 
              itemsDesktop : [992,3],
              itemsDesktopSmall : [768,2], 
              itemsTablet: [450,1], 
              itemsMobile : false,// itemsMobile disabled - inherit from itemsTablet option
              pagination : false,
              autoPlay:7000
          });
         
          // Custom Navigation Events
          $(".next").on('click', function(){
            owl.trigger('owl.next');
          })
          $(".prev").on('click', function(){
            owl.trigger('owl.prev');
          })
  };
}


// Testimonial Slider
function testimonialSlider () {
  if ($("#testimonial_slider").length) {
          $("#testimonial_slider").owlCarousel({
     
          navigation : true, // Show next and prev buttons
          slideSpeed : 400,
          paginationSpeed : 500,
          singleItem:true,
          navigationText:false,
          pagination:false,
          autoPlay:7000

     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
      });
  };
}

// Fancybox 
function FancypopUp () {
  if ($(".fancybox").length) {
    $(".fancybox").fancybox({
      openEffect  : 'elastic',
        closeEffect : 'elastic',
         helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.6)'
                }
            }
        }
    });
  };
}


// Fancybox Video
function FancypopUpVideo () {
  if ($(".fancy_video").length) {
      $(".fancy_video").fancybox({
      maxWidth  : 1080,
      maxHeight : 720,
      fitToView : false,
      width   : '95%',
      height    : '95%',
      autoSize  : false,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none'
    });
  };
}


// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });
                
        });
  }
}


// Mixitup gallery
function mixitupGallery () {
  if ($("#mixitup_list").length) {
    $("#mixitup_list").mixItUp()
  };
}


// Accordion panel
function themeAccrodion () {
  if ($('.theme-accordion > .panel').length) {
    $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
          var heading = $(this).find('.panel-heading');
          heading.addClass("active-panel");
          
    });
    
    $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
        var heading = $(this).find('.panel-heading');
          heading.removeClass("active-panel");
          //setProgressBar(heading.get(0).id);
    });

  };
}

// Smooth scroll to consultaion are
function smoothScroll () {
  if ($(".smooth_scroll").length) {
      $(".smooth_scroll").on('click', function() {
       $('html, body').animate({
          scrollTop: $(".scroll_up").offset().top
      }, 2000);
  });
  };
}

// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}


// toggle menu for mobile
function mobileDropdown () {
  if($('.main_menu').length) {
    $('.main_menu nav ul li.dropdown_menu').append(function () {
      return '<i class="fa fa-bars"></i>';
    });
    $('.main_menu nav ul li.dropdown_menu .fa').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    }); 
  }
}


//Contact Form Validation
function contactFormValidation () {
  if($('.form-validation').length){
    $('.form-validation').validate({ // initialize the plugin
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true
        },
        message: {
          required: true
        },
        subject: {
          required: true
        }
      },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function() {
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}

// Close suddess Alret
function closeSuccessAlert () {
  if($('.closeAlert').length) {
    $(".closeAlert").on('click', function(){
      $("#error").fadeOut();
    });
    $(".closeAlert").on('click', function(){
      $("#success").fadeOut();
    })
  }
}


//Footer Contact Form Validation
function footerContactFormValidation () {
  if($('.footer-form-validation').length){
    $('.footer-form-validation').validate({ // initialize the plugin
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        },
        subject: {
          required: true
        }
      },
      submitHandler: function (form) { 
        // sending value with ajax request
        var form = $(form);
        $.post(form.attr('action'), form.serialize(), function (response) {
          form.parent('div').append(response);
          form.find('input[type="text"]').val('');
          form.find('input[type="email"]').val('');
          form.find('textarea').val('');
        });
        return false;
      }
    });
  }
}


// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	  mainBanner ();
	  mainBannerTwo ();
	  attorneySlider();
	  clientSlider();
	  dropdownSelect();
	  partnersLogo();
	  CounterNumberChanger ()
	  searchForm();
	  closeSuccessAlert ();
	  contactFormValidation ();
	  footerContactFormValidation ();
	  practiceArea ();
	  testimonialSlider ();
	  FancypopUp ();
	  FancypopUpVideo ();
	  removePlaceholder ();
	  mixitupGallery ();
	  themeAccrodion ();
	  smoothScroll ();
	  scrollToTop ();
	  mobileDropdown ()
  })(jQuery);
});


// Window load function
jQuery(window).on('load', function () {
   (function ($) {
		prealoader ();
  })(jQuery);
 });

