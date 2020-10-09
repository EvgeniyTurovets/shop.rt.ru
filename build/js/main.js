$(function(){

	//слайдер на главной
	$('.tovar-elem__slider').slick({
		fade: true,
		centerMode: true,
		arrows: false,
		asNavFor: '.tovar-elem__sliderbot',
	})

	$('.tovar-elem__sliderbot').slick({
		slidesToShow: 1,
		asNavFor: '.tovar-elem__slider',
		focusOnSelect: true,
		variableWidth: true
	})
})