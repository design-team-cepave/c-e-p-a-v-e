'use strict';

var myApp = myApp || {};

$(document).ready(function() {


  /* ------------------ blog page ------------------*/
  function blogdetails(){
    // if(!is_explorer){
    //   window.requestAnimationFrame(blogdetails);
    // }
    var blogHeight= $('.blog-figc').outerHeight();
    $('.blog-containers').css('height' ,blogHeight );
    var blogHeights= $('.blgpg .blog-figc').outerHeight();
    $('.blgpg .blog-containers').css('height' ,blogHeights );
  }

  blogdetails();

  /*---------------- side menu -----------------*/
  $('.js-nav-btn').on('click' , function(e){

    $('.nav-menu-wrapper').addClass('nav-menu-wrapper-open');
    $.fn.fullpage.setMouseWheelScrolling(false);
    $('body').css('overflow-y','hidden');
    e.stopPropagation();

  });

  $('.close-btn').on('click', function(){

    $('.nav-menu-wrapper').removeClass('nav-menu-wrapper-open');
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

