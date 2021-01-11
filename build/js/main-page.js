$(function(){
    $('.main-first__slider').slick({
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1020,
              settings: {
                arrows: true,
                dots: false,
              }
            },
        ]
    })
    

    $('.section-slider__wrap').slick({
      variableWidth: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      touchMove: false,
    })
})