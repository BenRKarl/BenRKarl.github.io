var App = {

  closeVisible: function(node){
    var children = $(node).children()
    $.each(children, function(i, child){
      if ($(child).is(':visible')){
        $(child).slideToggle(500);
      }
    })
  },

  scrollToggle: function(node){
    $(node).slideToggle(750);
    $('html, body').animate({
      scrollTop: $('.contentblock').offset().top
    }, 750);
  },

  getContentNode: function(node){
    var data = $(node).attr('data')
    var contentLink = {
      'about': '.about-me',
      'blog': '.blog',
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
  },

  contentToggle: function(node){
    var parent = node.parent();
    var that = this;
    if ($(node).is(':visible')){
      $(node).slideToggle(500);
    } else if ($(parent).children().is(':visible')){
      this.closeVisible(parent);
      setTimeout(function(){
        that.scrollToggle(node);
      }, 550);
    } else {
      that.scrollToggle(node)
    }
  },

  toggleThumbnail: function(node, event){
    var image     = node.parentElement.children[0];
    var titleElem = node.parentElement.children[1];
    var imgOpacity, titleOpacity;
    if (event === 'mouseover'){
      imgOpacity   = 0.25;
      titleOpacity = 1;
    } else {
      imgOpacity   = 1;
      titleOpacity = 0;
    }
    $(image).css('opacity', imgOpacity);
    $(titleElem).css('opacity', titleOpacity);
  }
};
