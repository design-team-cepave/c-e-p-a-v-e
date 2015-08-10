'use strict';

var myApp = myApp || {};

$(document).ready(function() {



  /*---------------- side menu -----------------*/
  $('.button-nav').on('click' , function(e){
    
    $('.nav-menu').addClass('nav-menu-open');
    $.fn.fullpage.setMouseWheelScrolling(false);
    $('body').css('overflow-y','hidden');
    e.stopPropagation();

  });

  $('.close-btn').on('click', function(){

    $('.nav-menu').removeClass('nav-menu-open');
    $.fn.fullpage.setMouseWheelScrolling(true);
    $('body').css('overflow-y','hidden');

  });


  /*---------------- full page scroll -----------------*/
  $('#fullpage').fullpage({
    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    fixedElements: '.header , .footer'
  });

  $.fn.fullpage.reBuild();


});

