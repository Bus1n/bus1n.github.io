function removeClass(elem, className) {
	let l = elem.length

	if (l == undefined) {
		_removeClass(elem, className)
	} else {
		let i = l - 1

		while (i >= 0) {
			_removeClass(elem[i], className)
			i--
		}
	}
}

function _removeClass(elem, newClass) {
	if (elem.classList) {
		elem.classList.remove(newClass)
	} else {
		let exp = '(^|\\b)' + newClass.split(' ').join('|') + '(\\b|$)'
		elem.className = elem.className.replace(new RegExp(exp, 'gi'), ' ')
	}
}

function addClass(elem, className) {
	let l = elem.length

	if (l == undefined) {
		_addClass(elem, className)
	} else {
		let i = l - 1

		while (i >= 0) {
			_addClass(elem[i], className)
			i--
		}
	}
}

function _addClass(elem, newClass) {
	if (elem.classList) {
		elem.classList.add(newClass)
	} else {
		elem.className += ' ' + className
	}
}

let loaderDashoffsetTotal = 502
let preloader = document.querySelector('.preloader')
let preloaderOuter = preloader.querySelector('.outer')
let logo = preloader.querySelector('.overlay .logo')
let loaded = 0
let total = 10

function onProgress() {
	let percentLoaded = Math.round((loaded / total) * 100)
	let calc = loaderDashoffsetTotal / 100
	let percent = Math.round(calc * percentLoaded)
	let offset = loaderDashoffsetTotal - percent
	preloaderOuter.style.strokeDashoffset = offset + 'px'
}

function init() {
	let startLength = loaderDashoffsetTotal + 'px'
	preloaderOuter.style.strokeDashoffset = startLength
	preloaderOuter.style.opacity = 1

	setTimeout(() => {
		let newLength = loaderDashoffsetTotal + 'px'
		preloaderOuter.style.strokeDashoffset = newLength
		addClass(preloaderOuter, 'loading')
		loadImages()
	}, 500)
}

init()

function loadImages() {
	load()
}

function load() {
	loaded++
	onProgress()

	if (loaded == total) {
		setTimeout(() => {
			onDone()
		}, 1000)
	} else {
		setTimeout(() => {
			load()
		}, 100)
	}
}

function onDone() {
	addClass(preloader, 'out')
	removeClass(logo, 'fade-in')
	addClass(logo, 'fade-out')

	setTimeout(() => {
		loaded = 0
		removeClass(preloader, 'out')
		addClass(logo, 'fade-in')
		removeClass(logo, 'fade-out')
		preloaderOuter.style.strokeDashoffset = loaderDashoffsetTotal + 'px'
		removeClass(preloaderOuter, 'loading')

		init()
	}, 1000)
}

jQuery(function () {
	$('body').addClass('scroll_disable')

	$('.overlay').delay(2500).fadeOut()

	setTimeout(() => {
		$('body').removeClass('scroll_disable')
	}, 2500)
})
