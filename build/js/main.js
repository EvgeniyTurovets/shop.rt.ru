$(function(){

	//слайдер на главной
	$('.tovar-elem__slider').slick({
		fade: true,
		centerMode: true,
		arrows: false,
		asNavFor: '.tovar-elem__sliderbot',
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        dots: true,
		      }
		    },
		]
	})

	$('.tovar-elem__sliderbot').slick({
		slidesToShow: 1,
		asNavFor: '.tovar-elem__slider',
		focusOnSelect: true,
		variableWidth: true,
		infinite: false,
	})
	$(window).on('load resize', function(){
	  if ($(window).width() <= 1199) {
	  	$('.tovar-elem__line1').insertBefore('.tovar-elem__left');
	    $('.tovar-elem__mame').insertBefore('.tovar-elem__line1');
	  }
	});

	$('.tovar-buy-bnt').click(function(){
		$(this).hide()
		$('.tovar-buy-bnt.link').css('display', 'flex')
	})

})