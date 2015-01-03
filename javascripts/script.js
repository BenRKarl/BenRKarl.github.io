
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
    'contact': '.contact',
    'look-up': '#look-up',
    'job-board': '#job-board',
    'coverage': '#coverage',
    'proto': '#proto',
    'satellite': '#satellite'
  }
  var contentNode = $(contentLink[data]);
  return contentNode
}

function contentToggle(node){
  var parent = node.parent();
  if ($(node).is(':visible')){
    $(node).slideToggle(500);
  } else if ($(parent).children().is(':visible')){
    closeVisible(parent);
    setTimeout(function(){
      scrollToggle(node);
    }, 550);
  } else {
    scrollToggle(node)
  }
}

function toggleThumbnail(node, event){
  var image     = node.parentElement.children[0];
  var titleElem = node.parentElement.children[1];
  var imgOpacity, titleOpacity;
  if (event === 'mouseover'){
    imgOpacity   = 0.5;
    titleOpacity = 1;
  } else {
    imgOpacity   = 1;
    titleOpacity = 0;
  }
  $(image).css('opacity', imgOpacity);
  $(titleElem).css('opacity', titleOpacity);
};

$(function(){
  //Initial fade-in elements
  $('.main-image').css({'opacity':0}).animate({'opacity':1}, 1000);
  $('.main-title').css({'opacity':0}).animate({'opacity':1}, 2000);
  $('.navblock').css({'opacity':0}).animate({'opacity':1}, 2000);

  //hide content elements
  $('.content').hide()
  $('.portfolio-element').hide()

  //listener for nav link click
  $('.navblock span').click(function(e){
    var content = getContentNode(this);
    contentToggle(content);
  });


  $('.mask').on('mouseover', function(){
    toggleThumbnail(this, event.type);
  });

  $('.mask').on('mouseleave', function(){
    toggleThumbnail(this, event.type);
  });

  $('.thumbnail').click(function(e){
    var info = getContentNode(this);
    contentToggle(info);
  })

  $('.main-image').draggable();
});




