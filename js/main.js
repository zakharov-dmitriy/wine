$(function () {

   // $('.wines__slider-inner').slick({
   //    slidesToShow: 1,
   //    slidesToScroll: 1,
   //    fade: true,
   //    arrows: true,
   //    centerMode: true,
   //    asNavFor: '.wines__slider-content'
   // });
   $('.wines__slider-content').slick({
      slidesToShow: 1,
      arrows: false,
      fade: true,
      asNavFor: '.wines__slider-inner'
   });

   $('.reviews__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false
   });

   $('.offers__slider').slick({
      // centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      dots: true
   });

   $('.events__slider').slick({
      fade: true,
      infinite: true,
      nextArrow: '<button type="button" class="slick-next arrow-next"><img src="images/arrow-next.svg"></button>',
      prevArrow: '<button type="button" class="slick-prev arrow-prev"><img src="images/arrow-prev.svg"></button>'
   })

});


document.querySelector('.burger__btn').addEventListener('click', function () {
   // document.querySelector('.menu').classList.toggle('menu--active');
   document.querySelector('.btn-line').classList.toggle('btn-line--active');
});

// document.querySelector('.burger__btn').onclick = function () {
//    document.querySelector('.btn-line').classList.toggle('btn-line--active');
// }