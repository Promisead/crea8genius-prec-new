$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(450).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(450).css({'overflow':'visible'});
  })
       /*--- Responsive Menu Start ----*/
      $("#toggle").on("click", function () {
          var w = $('#sidebar').width();
          var pos = $('#sidebar').offset().left;
          if (pos == 0) {
              $("#sidebar").animate({
                  "left": -w
              }, "slow");
          } else {
              $("#sidebar").animate({
                  "left": "0"
              }, "slow");
          }
      });
      $("#toggle_close").on("click", function () {
          var w = $('#sidebar').width();
          var pos = $('#sidebar').offset().left;
          if (pos == 0) {
              $("#sidebar").animate({
                  "left": -w
              }, "slow");
          } else {
              $("#sidebar").animate({
                  "left": "0"
              }, "slow");
          }
      });
      (function ($) {
          $('#cssmenu li.active').addClass('open').children('ul').show();
          $('#cssmenu li.has-sub>a').on('click', function () {
              $(this).removeAttr('href');
              var element = $(this).parent('li');
              if (element.hasClass('open')) {
                  element.removeClass('open');
                  element.find('li').removeClass('open');
                  element.find('ul').slideUp(200);
              } else {
                  element.addClass('open');
                  element.children('ul').slideDown(200);
                  element.siblings('li').children('ul').slideUp(200);
                  element.siblings('li').removeClass('open');
                  element.siblings('li').find('li').removeClass('open');
                  element.siblings('li').find('ul').slideUp(200);
              }
          });
      })(jQuery);
  
              // on ready function
          jQuery(document).ready(function($) {
          
          
              // Menu js for Position fixed
          $(window).scroll(function(){
              var window_top = $(window).scrollTop() + 1; 
              if (window_top > 150) {
                  $('.menu_wrapper').addClass('menu_fixed animated fadeInDown');
              } else {
                  $('.menu_wrapper').removeClass('menu_fixed animated fadeInDown');
              }
          });	
      });
  
  
       // ===== Scroll to Top ==== // 
      $(window).scroll(function () {
          if ($(this).scrollTop() >= 100) {
              $('#return-to-top').fadeIn(200);
          } else {
              $('#return-to-top').fadeOut(200);
          }
      });
      $('#return-to-top').on('click', function () {
          $('body,html').animate({
              scrollTop: 0
          }, 500);
      });
      
      // ===== typing ==== // 
       
      
  
    /*---index 4 sub menu ----*/
  
    $('.dropdown-mobile-menu').click(function() {
         //$('.hideme').hide();  
         if ($(this).hasClass('active')) {    
           $(this).removeClass('active');
           $('.index4_sub_menu').slideUp();
         } else {
           $('.index4_sub_menu').slideUp();
           $('.dropdown-mobile-menu').removeClass('active');
           $(this).addClass('active');
           $(this).next().filter('.index4_sub_menu').slideDown();
         }
         });
  
  
  
  
  
  
      
      /*--- Responsive Menu End ----*/
  /*ready*/
       //Get the button
      var mybutton = document.getElementById("myBtn");
       // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
          scrollFunction()
      };
  
      function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {} else {}
      }
       // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
      }
      $(document).ready(function () {
          $("#sidebar").mCustomScrollbar({
              theme: "minimal"
          });
          $('#dismiss, .overlay').on('click', function () {
              $('#sidebar').removeClass('active');
              $('.overlay').removeClass('active');
          });
          $('#sidebarCollapse').on('click', function () {
              $('#sidebar').addClass('active');
              $('.overlay').addClass('active');
              $('.collapse.in').toggleClass('in');
              $('a[aria-expanded=true]').attr('aria-expanded', 'false');
          });
      });
      $('#search_button').on("click", function (e) {
          $('#search_open').slideToggle();
          e.stopPropagation();
      });
      $(document).on("click", function (e) {
          if (!(e.target.closest('#search_open'))) {
              $("#search_open").slideUp();
          }
      });
      $('.count').each(function () {
          $(this).prop('Counter', 0).animate({
              Counter: $(this).text()
          }, {
              duration: 4000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
      $('#myModal').on('shown.bs.modal', function () {
          $('#myInput').trigger('focus')
        })
      $('.fb_slider_content .owl-carousel').owlCarousel({
          loop: true,
          margin: 50,
          nav: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              }
          }
      })
         $('.index2_fb_slider_content .owl-carousel').owlCarousel({
          loop: true,
          margin: 50,
          nav: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              }
          }
      })
       $('.recent_case_img .owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fa fa-long-arrow-alt-right'></i>"],
          autoplay: true,
          autoplayHoverPause: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              }
          }
      })
  
      $('.slider_class .owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          dots:true,
          autoplay: true,
          autoplayHoverPause: true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })
      //==========----------------- LIGHT-SLIDER-ONE START------------------================//
  
  $('.light-slider').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1]
      },
      image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
              return item.el.attr('title') + '<small></small>';
          }
      }
  });
  // //================----------------- LIGHT-SLIDER-ONE END ------------=================//
      
      /* -=-=-=-=- Shop-section start -=-=-=-=- */
      // $('.shop_four .owl-carousel').owlCarousel({
      //     loop:true,
      //     margin:10,
      //     nav: false,
      //     dots:true,
      //     dotsData: true,
      //     autoplay: false,
      //     autoplayHoverPause: true,
      //     responsive:{
      //         0:{
      //             items:1
      //         },
      //         600:{
      //             items:1
      //         },
      //         1000:{
      //             items:1
      //         }
      //     }
          
      // });
  
      $('.inner_page_single .owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          dots: false,
          nav:true,
          navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fa fa-long-arrow-alt-right'></i>"],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })
      
  
  
      $(document).ready(function(){
          var owl = $('.shop_four .owl-carousel');
          owl.owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            dotsData: true,
            autoplay: false,
            autoplayHoverPause: true,
            items: 1,
          });
          
          // Custom Button
          $('.customNextBtn').click(function() {
            owl.trigger('next.owl.carousel');
          });
          $('.customPreviousBtn').click(function() {
            owl.trigger('prev.owl.carousel');
          });
          
        });
  
  
       $(function () {
          $('.drop-box').click(function () {
              $('#ul').fadeToggle();
          });
          $('.drop-box').on('click', function () {
              $(this).toggleClass('marked');
              $('.drop-text').toggleClass('marked1');
          });
          $(".drop-box").click(function () {
              $('.rotate').toggleClass("down");
          });
      });
  
  
  
      // single-shop-progress-bar
      var wind = $(window);
      $(".loading").fadeOut(500);
      wind.on('scroll', function () {
      $(".skills-progress span").each(function () {
          var bottom_of_object = 
          $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = 
          $(window).scrollTop() + $(window).height();
          var myVal = $(this).attr('data-value');
          if(bottom_of_window > bottom_of_object) {
              $(this).css({
                width : myVal
              });
          }
      });
  
  
  
      //tab
  
  
  
  
      $("#tile-1 .nav-tabs a").click(function() {
          var position = $(this).parent().position();
          var width = $(this).parent().width();
            $("#tile-1 .slider").css({"left":+ position.left});
        });
            var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
            var actPosition = $("#tile-1 .nav-tabs .active").position();
        // $("#tile-1 .slider").css({"left":+ actPosition.left,"width": actWidth});
    
    // ''
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
       // number count for stats, using jQuery animate
      $('.counting').each(function () {
          var $this = $(this),
              countTo = $this.attr('data-count');
          $({
              countNum: $this.text()
          }).animate({
              countNum: countTo
          }, {
              duration: 3000,
              easing: 'linear',
              step: function () {
                  $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                  $this.text(this.countNum);
                  //alert('finished');
              }
          });
      });
      $(document).ready(function () {
          $(".right_side_single .toggle-accordion").on("click", function () {
              var accordionId = $(this).attr("accordion-id"),
                  numPanelOpen = $(accordionId + ' .collapse.in').length;
              $(this).toggleClass("active");
              if (numPanelOpen == 0) {
                  openAllPanels(accordionId);
              } else {
                  closeAllPanels(accordionId);
              }
          })
          openAllPanels = function (aId) {
              console.log("setAllPanelOpen");
              $(aId + ' .panel-collapse:not(".in")').collapse('show');
          }
          closeAllPanels = function (aId) {
              console.log("setAllPanelclose");
              $(aId + ' .panel-collapse.in').collapse('hide');
          }
      });
      $('#play-video').on('click', function(e){
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
  });
  
  $('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
  });
  
  $(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
  });
  
  function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
  };
      
      (function ($) { // Begin jQuery
          $(function () { // DOM ready
              // If a link has a dropdown, add sub menu toggle.
              $('nav ul li a:not(:only-child)').click(function (e) {
                  $(this).siblings('.nav-dropdown').toggle();
                  // Close one dropdown when selecting another
                  $('.nav-dropdown').not($(this).siblings()).hide();
                  e.stopPropagation();
              });
              // Clicking away from dropdown will remove the dropdown class
              $('html').click(function () {
                  $('.nav-dropdown').hide();
              });
              // Toggle open and close nav styles on click
              $('#nav-toggle').click(function () {
                  $('nav ul').slideToggle();
              });
              // Hamburger to X toggle
              $('#nav-toggle').on('click', function () {
                  this.classList.toggle('active');
              });
  
          }); // end DOM ready
      })(jQuery); // end jQuery
  
  
  
  
  
  
  
  
  
  
  
      
  $('.light-slider').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1]
      },
      image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
              return item.el.attr('title') + '<small></small>';
          }
      }
  });
  
  $('.slider-icon').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1]
      },
      image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
              return item.el.attr('title') + '<small></small>';
          }
      }
  });
  
      });
  
  ;