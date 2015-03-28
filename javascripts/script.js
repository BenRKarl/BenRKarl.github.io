$(function(){

  //Initial fade-in elements
  $('.main-image').css({'opacity':0}).animate({'opacity':1}, 1000);
  $('.main-title').css({'opacity':0}).animate({'opacity':1}, 2000);
  $('.navblock').css({'opacity':0}).animate({'opacity':1}, 2000);

  //hide content elements
  if (window.location.pathname === '/') {
    $('.content').hide();
  }
  $('.portfolio-element').hide();

  //listener for nav link click
  $('.navblock span').click(function(e){
    var content = App.getContentNode(this);
    App.contentToggle(content);
  });


  $('.mask').on('mouseover', function(){
    App.toggleThumbnail(this, event.type);
  });

  $('.mask').on('mouseleave', function(){
    App.toggleThumbnail(this, event.type);
  });

  $('.thumbnail').click(function(e){
    var info = App.getContentNode(this);
    App.contentToggle(info);
  })

  $('.main-image').draggable();
});




