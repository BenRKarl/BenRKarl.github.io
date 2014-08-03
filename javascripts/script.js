
function closeVisible(node){
  var children = $(node).children()
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

function getContentNode(node){
  var data = $(node).attr('data')
  var contentLink = {
    'about': '.about-me',
    'resume': '.resume',
    'portfolio': '.portfolio',
    'contact': '.contact'
  }
  var contentNode = $(contentLink[data]);
  return contentNode
}

function contentToggle(node){
  if ($(node).is(':visible')){
    $(node).slideToggle(500);
  } else if ($('.contentblock').children().is(':visible')){
    closeVisible($('.contentblock'));
    setTimeout(function(){
      scrollToggle(node);
    }, 550);
  } else {
    scrollToggle(node)
  }
}

$(function(){
  //Initial fade-in elements
  $('.main-image').css({'opacity':0}).animate({'opacity':1}, 1000);
  $('.main-title').css({'opacity':0}).animate({'opacity':1}, 3000);
  $('.navblock').css({'opacity':0}).animate({'opacity':1}, 5000);

  //hide content elements
  $('.content').hide()

  //listener for nav link click
  $('.navblock span').click(function(e){
    var content = getContentNode(this);
    contentToggle(content);
  });

  $('.main-image').draggable();
});




