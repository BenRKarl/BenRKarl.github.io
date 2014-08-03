
function closeVisible(parentNode){
  var children = $(parentNode).children()
  $.each(children, function(i, child){
    if ($(child).is(':visible')){
      $(child).slideToggle(500);
    }
  })
}

function scrollToggle(node){
  $(node).slideToggle(750);
  $('html, body').animate({
    scrollTop: $('.contentblock').offset().top
  }, 750);
}

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
        $('.about-me').slideToggle(500);
      } else if ($('.contentblock').is(':visible')){
        closeVisible($('.contentblock'));
        setTimeout(function(){
          scrollToggle($('.about-me'));
        }, 550);
      } else {
        scrollToggle($('.about-me'));
      }
    });

  $('.resume-link').click(function(e){
    if ($('.resume').is(':visible')){
      $('.resume').slideToggle(500);
    } else if ($('.contentblock').is(':visible')){
      closeVisible($('.contentblock'));
      setTimeout(function(){
        scrollToggle($('.resume'));
      }, 550);
    } else {
      scrollToggle($('.resume'));
    }
  });

  $('.portfolio-link').click(function(e){
    if ($('.portfolio').is(':visible')){
      $('.portfolio').slideToggle(500);
    } else if ($('.contentblock').is(':visible')){
      closeVisible($('.contentblock'));
      setTimeout(function(){
        scrollToggle($('.portfolio'));
      }, 550);
    } else {
      scrollToggle($('.portfolio'));
    }
  });

  $('.contact-link').click(function(e){
    if ($('.contact').is(':visible')){
      $('.contact').slideToggle(500);
    } else if ($('.contentblock').is(':visible')){
      closeVisible($('.contentblock'));
      setTimeout(function(){
        scrollToggle($('.contact'));
      }, 550);
    } else {
      scrollToggle($('.contact'));
    }
  });

  $('.main-image').draggable();
});




