
// Top Buttons
(function($) {
    // Class toggle meant for showing and hiding content
    $('.tb').click(function() {
    // Uncomment the following line to limit one show at a time.
        var $this = $(this);
          if ($this.hasClass('active')) {
            console.log("Yep");
            $this.removeClass('active');
            $('#new-biz-content').hide();
            $('#hire-content').hide();
          } else {
            $('.toolkit-btn.active').removeClass('active');
            $(this).toggleClass('active');
          }

          if ($('#new-biz-btn').hasClass('active')) {
            $('#new-biz-content').show();
          } else {
            $('#new-biz-content').hide();
          }

          if ($('#hire-btn').hasClass('active')) {
            $('#hire-content').show();
          } else {
            $('#hire-content').hide();
          }
          return false;
      });
})(jQuery);


// Bottom Button
 (function (window, document, $, undefined) { // put the vars you need and match them at the bottom
     "use strict";
     // Stuff to do as soon as the DOM is ready;
     $('.rsc').on('click', function(event) {
          event.preventDefault();
         // alert('cledk');
         var $this = $(this);

         if ( $this.find('input').is(':checked') ) {
             $this.toggleClass('active');
         } else {
         }
         // Act on the event
     });
 }(this, this.document, this.jQuery)); // in global scope, this === window


// Content Toggles
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block'; }


// Toggle Entry Classes
(function (window, document, $, undefined) { // put the vars you need and match them at the bottom
    "use strict";
    // Stuff to do as soon as the DOM is ready;
    $('.entry-toggle').on('click', function(event) {
         event.preventDefault();
        // alert('cledk');
        var $this = $(this);

        if ( $this.find('input').is(':checked') ) {
            $this.toggleClass('active');
        } else {
        }
        // Act on the event
    });
}(this, this.document, this.jQuery)); // in global scope, this === window


// Scroll to Top
$(document).ready(function() {
  // Show or hide the sticky footer button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });
  // Animate the scroll to top
  $('.go-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 450);
  })
});
