(function($) {

  "use strict";

  $(window).on('load', function() {

    /* Page Loader
    ========================================================*/
    $('#preloader').fadeOut();

    /* Sticky Nav
    ========================================================*/
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 100) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    });

    /* WOW Scroll Animations
    ========================================================*/
    var wow = new WOW({
      mobile: false
    });
    wow.init();

    /* One Page Navigation
    ========================================================*/
    $('.onepage-nev').onePageNav({
      currentClass: 'active'
    });

    /* Smooth Scroll for anchor links
    ========================================================*/
    $('a.page-scroll').on('click', function(event) {
      event.preventDefault();
      var target = $(this.getAttribute('href'));
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 600);
      }
    });

    /* Back To Top
    ========================================================*/
    var offset = 300;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

  });

}(jQuery));
