$(function() {
  
  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__link--active');
  });

  $('.slider__inner').slick({
    dots: true
  });

  $(".product__rating").rateYo({
    starWidth: "15px",
    ratedFill: "#0080ff",
    rating: 2,
    fullStar: true
  });

})