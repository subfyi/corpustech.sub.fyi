// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: DIGNITY.
// Author: Designova.
// Version 1.1 - Updated on 08 Nov 2013
// Website: http://www.designova.net 
// Copyright: (C) 2013 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

jQuery(document).ready(function($) {

(function(){
  "use strict";


$(function ($) {

     //Detecting viewpot dimension
     var vH = $(window).height();

     //Adjusting Intro Components Spacing based on detected screen resolution
     $('.splash-page').css('height',vH);
     $('.intro-parallax-bg').css('height',vH);
     $('.full-height').css('height',vH);
   
    //Vertical Centering of natural content spcific elements (non-images)
     $(function ($) {
              /*if your element is an image then please use $(window).load() instead tha above function wrap, because we want the coding to take
              effect when the image is loaded. */
              
              //get the width of the parent
              var parent_height = $('.vertical-center').parent().height();
              var image_height = $('.vertical-center').height();
              
              var top_margin = (parent_height - image_height)/2;
              
              //center it
              $('.vertical-center').css( 'padding-top' , top_margin);
              //uncomment the following if ithe element to be centered is an image
              $('.vertical-center-img').css( 'margin-top' , top_margin);
       });


    
    //Parallax Init
    $(window).bind('load', function () {
        if( !device.tablet() && !device.mobile() ) {

            /* if non-mobile device is detected*/ 
              // Parallax Init
              $('.parallax-bg').each(function() {
                    $(this).parallax('50%', 0.5, true);
                });

              
                        
        } else {
            
            /* if mobile device is detected*/ 
            
            $('.parallax-bg').addClass('parallax-off');
        }

    });


   
     //TWITTER INIT (Updated with compatibility on Twitter's new API):
     //PLEASE READ DOCUMENTATION FOR INFO ABOUT SETTING UP YOUR OWN TWITTER CREDENTIALS:
      /*$(function ($) {
          $('#ticker').tweet({
              modpath: './twitter/',
              count: 1,
              loading_text: 'loading twitter update...',
              username:'designovastudio'
          });
        }); */

    //Waypoint Interaction
    $('.first-page').waypoint(function() {
      $('#masthead').removeClass('sub');
      $('.logo').removeClass('sub');
    });
    $('.second-page').waypoint(function() {
      $('#masthead').addClass('sub');
      $('.logo').addClass('sub');
    });

    $('.dignity-sliding-nav a').mouseenter(function(){
      
      $(this).next('.submenu-wrap').stop().slideDown(500);
    });
    $('.dignity-sliding-nav a').mouseleave(function(){
      
      $(this).next('.submenu-wrap').stop().slideUp(500);
    });


    $('.standard-nav a').mouseenter(function(){
      
      $(this).next('.submenu-wrap').stop().slideDown(500);
    });
    $('.standard-nav a').mouseleave(function(){
      
      $(this).next('.submenu-wrap').stop().slideUp(500);
    });
 


    $('.submenu-wrap').mouseenter(function(){
      
      $(this).stop().css('display','block');
    });
    $('.submenu-wrap').mouseleave(function(){
      
      $(this).stop().stop().slideUp(500);
    });

    $('.second-page').waypoint(function (direction) {
      
        if (direction === 'down') {

          $('#masthead').addClass('sub');
          $('.logo').addClass('sub');
        } 
        else {
          $('#masthead').removeClass('sub');
          $('.logo').removeClass('sub');
          
        }
    }, { offset: 50 });


   

    
    //Service Panel Switching
    //var serviceIndex;
    


    //Carousels
      $("#thumb-carousel").owlCarousel({
        navigation : false,
        pagination: false,
        responsive: true,
        items: 4,
        touchDrag: true,
        mouseDrag: true,
        itemsDesktop: [3000,8],
        itemsDesktopSmall: [1440,4],
        itemsTablet:[800,3],
        itemsTabletSmall: [600,2],
        itemsMobile: [360,1],
        autoPlay: true
      });

      $(".dignity-showcase").owlCarousel({
        navigation : false,
        pagination: false,
        responsive: true,
        items: 4,
        touchDrag: true,
        mouseDrag: true,
        itemsDesktop: [3000,8],
        itemsDesktopSmall: [1440,4],
        itemsTablet:[800,3],
        itemsTabletSmall: [600,2],
        itemsMobile: [360,1],
        autoPlay: true
      });

      $(".testimonial-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        autoHeight: true,
        navigationText: ["&lt;","&gt;"],
        touchDrag: true,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[800,1],
        autoPlay: true
      });

      $(".dignity-carousel").owlCarousel({
        navigation : false,
        pagination: true,
        responsive: true,
        items: 1,
        autoHeight: true,
        navigationText: ["&lt;","&gt;"],
        touchDrag: true,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[800,1],
        autoPlay: true
      });

    if( device.tablet() || device.mobile() ) {
      $('.service-icon').click(function(){
          $('html,body').animate({scrollTop:$(this).nextAll('.services-expansion').offset().top}, 1500);
      });
    }


    //Portfolio Engine
    $('#grid').mixitup({
        effects: ['fade', 'scale'],
        transitionSpeed: 800,
        easing: 'smooth'
    });

    //Portfolio Filter Active State
    $('ul#portfolioFilter li').click(function(){
      $('ul#portfolioFilter li').removeClass('active-filter');
      $(this).addClass('active-filter');
    });

    //Magnific Pop (Lightbox)
    $('.image-lightbox-link').magnificPopup({ 
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below

    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function 

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }

  });

  $('a.std-project').click(function(){

    var target_div_id = $(this).data('target-id');
    $('#portfolio_item_container').slideUp(500);

    $('div#filter_wrapper').slideUp(300, function(){
      
      
      var project_dump_data = $('#'+target_div_id).html();
      //alert(project_dump_data);
      $('#portfolio_item_container').html(project_dump_data);
      $('#'+target_div_id+'slider').flexslider({ controlNav: false, prevText: "<", nextText: ">" });
      $('#portfolio_item_container').slideDown(500);
      $('#portfolio_item_wrap .dignity-sandbox-controls').fadeIn();

      $("html, body").animate({
          scrollTop: $('.portfolio-wraper').offset().top-150 + "px"
      }, {
          duration: 1500,
          easing: "easeInOutExpo"
      });



    });

    return false;
  });

  $('#portfolio_item_wrap .dignity-sandbox-controls a').click(function(){

    $('.dignity-sandbox-controls').hide();
    $('#portfolio_item_container').slideUp(500,function(){
      $('#portfolio_item_container').html('');
      
      $('div#filter_wrapper').slideDown(800);
      $("html, body").animate({
          scrollTop: $('.portfolio-wraper').offset().top-150 + "px"
      }, {
          duration: 1500,
          easing: "easeInOutExpo"
      });
    });
    

    return false;
  });



  $('#contactForm').submit(function(){
      //var modal_content = $('.md-content').html();
      $('.md-content').hide();
      $('.launch_modal').trigger("click");

      $.ajax({
        type: $("#contactForm").attr('method'),
        url: $("#contactForm").attr('action'),
        data: $("#contactForm").serialize(),
        success: function(data) {
          if(data == 'success')
          {
              $('#contactForm').each (function(){
                  this.reset();
              });
              $('.md-content').show();
          }
          else
          {
            $('.md-content').show();
            $('.md-content h3').html('Something went wrong!');
            $('.md-content p').html('Please try again.');
          }
        }
      });
      return false;
  });

  if($('div#dignity-sliding-nav').hasClass('inner-page').toString() == 'true')
  {
    
    var site_url = $('#site-root-url').data('site-url');
    $('div#dignity-sliding-nav a').each (function(){
      if($(this).hasClass('is_onepage').toString() == 'true')
      {
        var old_url = $(this).attr('href');
        $(this).attr('href',site_url + '/' + old_url); 
      }
    });
  }

  

  var page_stack = $.makeArray();
  var stack_top = 0;
  var timer;
  $('.menu .front-page a:first-child').addClass('active');
  

  $('.dignity-page-section').waypoint(function (direction) {
    
      if (direction === 'down') 
      {
          $('.menu .front-page a').removeClass('active');
          $('.menu .front-page a[href=#'+ $(this).attr('id') +']').addClass('active');
          stack_top = stack_top+1; 
          page_stack[stack_top] = $(this).attr('id');
          
      } 
      else 
      {
          stack_top = stack_top-1;
          $('.menu .front-page a').removeClass('active');
          $('.menu .front-page a[href=#'+page_stack[stack_top]+']').addClass('active');
          
      }
  },{ offset: 400 });

  $('p').each(function(){
      var valid_content = $(this).html();
      if(valid_content.trim() == '' || valid_content == ' ')
      $(this).remove();
  });

  $('.splash-page img').each(function(){
      $(this).addClass('img-responsive');
  });

  $('.layout-column > img').each(function(){
      $(this).addClass('img-responsive');
  });

  $('.blog-post .inner-page-content img').each(function(){
      $(this).addClass('img-responsive');
  });
  

  $('.sidebar li').each(function(){
      var valid_content = $(this).html();
      if(valid_content == '' || valid_content == ' ')
      $(this).remove();
  });

  $('#searchform #searchsubmit').addClass('dignity-button');
  $('#post-comment').addClass('dignity-button');
  $('.comment-reply-link').addClass('dignity-button light-txt');
  $('input[type="submit"]').addClass('dignity-button light-txt');
  
  $('.blog_pagination a').addClass('dignity-button');

  $('.carousel').carousel();



});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends
});






  

