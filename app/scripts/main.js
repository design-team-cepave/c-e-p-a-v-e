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
    anchors: ['mainPage', 'aboutPage', 'servicePage','teamPage', 'joinusPage', 'blogPage', 'contactPage'],
    recordHistory:false,
    menu: '#menu',
    touchstart: false,
    fitToSection: true,
    easing: 'easeInOutCubic',
    css3: true,
    easingcss3: 'ease',
    // loopBottom: false,
    // loopTop: false,
    // loopHorizontal: true,
    // continuousVertical: false,
    normalScrollElements: '#element1, .element2',
    // scrollOverflow: false,
    touchSensitivity: 100,
    normalScrollElementTouchThreshold: 0,
    fixedElements: '.header, .footer'

  });

  $.fn.fullpage.reBuild();

  // scrolldown
  $('#go').on('click' , function(){
    $.fn.fullpage.moveSectionDown();
  });


});

