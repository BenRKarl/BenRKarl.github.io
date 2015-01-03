
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

function changePortfolioHeader(node){
  var data = $(node).attr('data');
  var header = $('.portfolio-header');
  var title = {
    'look-up': 'Look Up!',
    'job-board': 'Job Board',
    'coverage': 'Coverage Reportr',
    'proto': 'WDI Proto Class Page',
    'satellite': 'The Satellite'
  }
  var newTitle = title[data]
  $(header).html(newTitle);
}

$(function(){
  //Initial fade-in elements
  $('.main-image').css({'opacity':0}).animate({'opacity':1}, 1000);
  $('.main-title').css({'opacity':0}).animate({'opacity':1}, 3000);
  $('.navblock').css({'opacity':0}).animate({'opacity':1}, 5000);

  //hide content elements
  $('.content').hide()
  $('.portfolio-element').hide()

  //listener for nav link click
  $('.navblock span').click(function(e){
    var content = getContentNode(this);
    contentToggle(content);
  });

  $('.thumbnail').mouseover(function(e){
    $(this).css('opacity', 0.5);
    changePortfolioHeader(this);
  })

  $('.thumbnail').mouseout(function(e){
    $(this).css('opacity', 1);
    $('.portfolio-header').html('Click an Image for More Info.');
  })

  $('.thumbnail').click(function(e){
    var info = getContentNode(this);
    contentToggle(info);
  })

  $('.main-image').draggable();
});




