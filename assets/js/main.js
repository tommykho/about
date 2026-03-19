(function($) {

  "use strict";

  /* Theme Toggle (runs immediately, before page load)
  ========================================================*/
  (function initTheme() {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

    $(document).ready(function() {
      var $icon = $('#theme-icon');

      function updateIcon(t) {
        $icon.text(t === 'dark' ? '\uD83C\uDF1B' : '\uD83C\uDF1E');
      }
      updateIcon(theme);

      $('#theme-toggle').on('click', function() {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateIcon(next);
      });
    });
  })();

  $(window).on('load', function() {

    /* Skeleton Loader — fade out then remove
    ========================================================*/
    var $preloader = $('#preloader');
    $preloader.addClass('fade-out');
    setTimeout(function() { $preloader.remove(); }, 500);

    /* Sticky Nav
    ========================================================*/
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 100) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    });

    /* AOS Scroll Animations
    ========================================================*/
    AOS.init({
      once: true,
      disable: 'mobile'
    });

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
