$(function(){
  //Initial fade-in elements
  $('.main-image').css({'opacity':0}).animate({'opacity':1}, 1000);
  $('.main-title').css({'opacity':0}).animate({'opacity':1}, 3000);
  $('.navblock').css({'opacity':0}).animate({'opacity':1}, 5000);

  //hidden elements
  $('.resume').hide();
  $('.projects').hide();
  $('.contact').hide();

  // $('.main-image').click(function(){
  //   $(this).effect('bounce', {distance: 10, times: 1}, 300);
  // });

})




// function fadeBackgroundColor(){
//   var scrollTop = $(window).scrollTop();
//   console.log('scrollTop: ', scrollTop);
//   var documentHeight = $(document).height();
//   console.log('documentHeight: ', documentHeight);
//   var scrollRatio = scrollTop/documentHeight;
//   $('body').css('backgroundColor', 'rgba(200, 100, 255, '+  scrollRatio +')');
// }

// function moveMainImageLeft(){
//   var scrollTop = $(window).scrollTop();
//   var mainImg = $('.main-image');
//   if ( scrollTop < 585 ) {
//     $(mainImg).css('right', scrollTop);
//     }
//   $(mainImg).css('top', scrollTop)
//   };

// function rotateMainImage(){
//   var scrollTop = $(window).scrollTop();
//   var mainImg = $('.main-image');
//   if (scrollTop < 360 ) {
//     $(mainImg).css('transform', 'rotate( -' + scrollTop + 'deg)' )
//     }
// };



// $(window).on('scroll', function(){

//   moveMainImageLeft();
//   rotateMainImage();

// });
