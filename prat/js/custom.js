$(function () {
	// Слайдер на главном экране
	if ($('*').is('.main__slider')) {
		$('.main__slider').slick({
			infinite: false,
			touchMove: false,
			speed: 800,
			fade: true,
			autoplay: true,
			autoplaySpeed: 8000,
			prevArrow: $('.main__slider-prev'),
			nextArrow: $('.main__slider-next'),
		})
	}
	// eof

	// Слайдер новостей на главном экране
	if ($('*').is('.blog__slider')) {
		$('.blog__slider').slick({
			infinite: false,
			touchMove: false,
			slidesToShow: 4,
			variableWidth: true,
			speed: 1000,
			autoplay: true,
			autoplaySpeed: 8000,
			arrows: false,
			// prevArrow: $('.main__slider-prev'),
			// nextArrow: $('.main__slider-next'),
		})
	}
	// eof
})

// Табы
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('div.tabs')
		.find('div.tabs__content')
		.hide()
		.eq($(this).index())
		.fadeIn(1000)
})

// eof
