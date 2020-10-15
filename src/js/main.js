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

	$('.rekomend__slider').slick({
		variableWidth: true,
		infinite: true,
		slidesToShow: 1,
	})

	$(window).on('load resize', function(){
	  if ($(window).width() <= 1199) {
	  	$('.tovar-elem__line1').insertBefore('.tovar-elem__left');
	    $('.tovar-elem__mame').insertBefore('.tovar-elem__line1');
	  }
	});

	$('.tovar-buy-bnt').click(function(){
		$(this).hide()
		$(this).parent().find('.tovar-buy-bnt.link').css('display', 'flex')
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

	
	$('.otzivi h2').click(function(){
		$(this).toggleClass('active')
		$('.otzivi__wrap').slideToggle()
		
	})

	$('.rating__wrap').click(function(){
		$('html, body').animate({
	        scrollTop: $(".otzivi").offset().top  // класс объекта к которому приезжаем
	    }, 1000); // Скорость прокрутки
	})

	$('.rekomend__right-abs span').click(function(){
		$(this).addClass('add')
	})


	ymaps.ready(init);
 
        function init () {
            // Создание экземпляра карты и его привязка к контейнеру с
            // заданным id ("map")
            var myMap = new ymaps.Map('map', {
                    // При инициализации карты, обязательно нужно указать
                    // ее центр и коэффициент масштабирования
                    center: [55.765908207471114,37.58963304483725], // Нижний Новгород
                    zoom: 10
                });

 
				// Создание метки 
				var myPlacemark = new ymaps.Placemark(
				// Координаты метки
				[55.770641433643235,37.6488721748047] , {
                    // Свойства
                    // Текст метки
                    hintContent: 'Оперный театр'
                }, {
                    iconImageHref: '../img/mapmark2.svg', // картинка иконки
                    iconImageSize: [21, 31], // размеры картинки
                    iconImageOffset: [-6, -10] // смещение картинки
                    });
                var myPlacemark2 = new ymaps.Placemark(
				// Координаты метки
				[55.790675587908616,37.63392168009115] , {
                    // Свойства
                    // Текст метки
                    hintContent: 'Оперный театр'
                }, {
                    iconImageHref: '../img/mapmark2.svg', // картинка иконки
                    iconImageSize: [21, 31], // размеры картинки
                    iconImageOffset: [-6, -10] // смещение картинки
                    });      
                var myPlacemark3 = new ymaps.Placemark(
				// Координаты метки
				[55.780228777015374,37.70189958536457] , {
                    // Свойства
                    // Текст метки
                    hintContent: 'Оперный театр'
                }, {
                    iconImageHref: '../img/mapmark2.svg', // картинка иконки
                    iconImageSize: [21, 31], // размеры картинки
                    iconImageOffset: [-6, -10] // смещение картинки
                    }); 
 
 
				// Добавление метки на карту
				myMap.geoObjects.add(myPlacemark);
				myMap.geoObjects.add(myPlacemark2);
				myMap.geoObjects.add(myPlacemark3);
 
 				
		       
			    $('#myPlacemark').hover(function(){
			      myPlacemark.options.set({
			       iconImageHref: '../img/mapmark.svg'
			      });
			    },function(){
			      myPlacemark.options.set({
			       iconImageHref: '../img/mapmark2.svg'
			      });
			    });
			    myMap.geoObjects.add(myPlacemark);
			    $('#myPlacemark2').hover(function(){
			      myPlacemark.options.set({
			       iconImageHref: '../img/mapmark.svg'
			      });
			    },function(){
			      myPlacemark.options.set({
			       iconImageHref: '../img/mapmark2.svg'
			      });
			    });
			    myMap.geoObjects.add(myPlacemark);
			    $('#myPlacemark2').hover(function(){
			      myPlacemark.options.set({
			       iconImageHref: '../img/mapmark.svg'
			      });
			    },function(){
			      myPlacemark.options.set({
			       iconImageHref: '../img/mapmark2.svg'
			      });
			    });
			    myMap.geoObjects.add(myPlacemark);
        }

})