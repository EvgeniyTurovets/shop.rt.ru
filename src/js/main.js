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

	$('.upsell__slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 1500,
		      settings: {
		       slidesToShow: 5,
		      }
		    },
		    {
		      breakpoint: 1280,
		      settings: {
		       slidesToShow: 4,
		      }
		    },
		    {
		      breakpoint: 1200,
		      settings: {
		       slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		       slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 560,
		      settings: {
		       slidesToShow: 1,
		       variableWidth: true,
		      }
		    },
		]
	})

	$('.tovar-elem__sliderbot').slick({
		slidesToShow: 1,
		asNavFor: '.tovar-elem__slider',
		focusOnSelect: true,
		variableWidth: true,
		infinite: true,
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

	$('.upsell__btn').click(function(){
		event.preventDefault()
		$(this).find('span').removeClass('icon-korzina').addClass('icon-tick-white')
	})
	$('.har__item h3').click(function(){
		if($(this).hasClass('active') == 0){
			$('.har__item h3').removeClass('active')
			$('.har__item__toggle').slideUp()
			$(this).addClass('active')
			$(this).next('.har__item__toggle').slideDown()
		}
		else{
			$(this).removeClass('active')
			$('.har__item__toggle').slideUp()
		}
		
	}) 


	$('.adress h2').click(function(){
		$(this).toggleClass('active')
		$('.adress__wrap__scroll').slideToggle()
		$('.adtess__right').slideToggle()
	})
})