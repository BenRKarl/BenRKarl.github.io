

$(function(){
  //Initial fade-in elements
  $('.main-image').css({'opacity':0}).animate({'opacity':1}, 1000);
  $('.main-title').css({'opacity':0}).animate({'opacity':1}, 3000);
  $('.navblock').css({'opacity':0}).animate({'opacity':1}, 5000);

  //hidden elements
  $('.resume').hide();
  $('.portfolio').hide();
  $('.contact').hide();
  $('.about-me').hide();

    $('.about-me-link').click(function(e){
    if ($('.about-me').is(':visible')){
      $('.about-me').toggle(750);
    } else {
      $('.contentblock').children().hide(500);
      $('.about-me').toggle(750);
    }
    $('html, body').animate({
      scrollTop: $('.contentblock').offset().top
    }, 750);
  });

  $('.resume-link').click(function(e){
    if ($('.resume').is(':visible')){
      $('.resume').toggle(750);
    } else {
      $('.contentblock').children().hide(500);
      $('.resume').toggle(750);
    }
    $('html, body').animate({
      scrollTop: $('.contentblock').offset().top
    }, 750);
  });

  $('.portfolio-link').click(function(e){
    if ($('.portfolio').is(':visible')){
      $('.portfolio').toggle(750);
    } else {
      $('.contentblock').children().hide(500);
      $('.portfolio').toggle(750);
    }
    $('html, body').animate({
      scrollTop: $('.contentblock').offset().top
    }, 750);
  });

  $('.contact-link').click(function(e){
    if ($('.contact').is(':visible')){
      $('.contact').toggle(750);
    } else {
      $('.contentblock').children().hide(500);
      $('.contact').toggle(750);
    }
  });

  $('.main-image').draggable();

$(window).on('scroll', function(){
  console.log( $(this).scrollTop() );
})

})




