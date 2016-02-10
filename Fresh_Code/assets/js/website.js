$(window).scroll(function(e){ 
  var $el = $('.top-navbar'); 
  //var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 200){ 
    $('.top-navbar').addClass('fixedElement'); 
  }
  if ($(this).scrollTop() < 200)
  {
    $('.top-navbar').removeClass('fixedElement'); 
  } 
});