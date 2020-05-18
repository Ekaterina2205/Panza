$(function(){

    $('.slider-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav'
      });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-items',
        dots: false,
        centerMode: false,
        focusOnSelect: false
      });


    $('.slick-prev.slick-arrow').on('click', function(){
        $('.slick-prev.slick-arrow').addClass('color-active');
        $('.slick-next.slick-arrow').addClass('color-off');
        $('.slick-next.slick-arrow').removeClass('color-active');
    });
    $('.slick-next.slick-arrow').on('click', function(){
        $('.slick-next.slick-arrow').removeClass('color-off');
        $('.slick-next.slick-arrow').addClass('color-active');
        $('.slick-prev.slick-arrow').removeClass('color-active');
    });

    $('.header__search').on('click', function(){
      $('.header__search > form').slideToggle();
  });

});