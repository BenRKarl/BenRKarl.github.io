

// function fadeBackgroundColor(){
//   var scrollTop = $(window).scrollTop();
//   console.log('scrollTop: ', scrollTop);
//   var documentHeight = $(document).height();
//   console.log('documentHeight: ', documentHeight);
//   var scrollRatio = scrollTop/documentHeight;
//   $('body').css('backgroundColor', 'rgba(200, 100, 255, '+  scrollRatio +')');
// }

function moveMainImageLeft(){
  var scrollTop = $(window).scrollTop();
  var mainImg = $('.main-image');
  if ( scrollTop < 585 ) {
    $(mainImg).css('right', scrollTop);
    }
  $(mainImg).css('top', scrollTop)
  };

function rotateMainImage(){
  var scrollTop = $(window).scrollTop();
  var mainImg = $('.main-image');
  if (scrollTop < 360 ) {
    $(mainImg).css('transform', 'rotate( -' + scrollTop + 'deg)' )
    }
};



$(window).on('scroll', function(){

  moveMainImageLeft();
  rotateMainImage();

});
