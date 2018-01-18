$(document).ready(function(){ resizeDiv(); });
window.onresize = function(event) { resizeDiv(); };

function resizeDiv() {
  vpw = $(window).width();
  vph = $(window).height();

  // Code
  $('pre').css({'max-height': vph + 'px'});

  // Demos
  $('.demo').css({'width': vpw - 80 + 'px'});
  $('.demo').css({'height': vph - 80 + 'px'});
  $('.demo pre').css({'height': vph - 80 + 'px'});
  $('.demo iframe').css({'height': vph - 80 + 'px'});

}