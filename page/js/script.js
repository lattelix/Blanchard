//* hero slider

const heroSlider = new Swiper('.hero__swiper-container', {

	loop: true,
	slidesPerView: 1,
	effect: "fade",
	simulateTouch: false,
	autoplay: {
		delay: 12000,
		disableOnInteraction: false,
	},
	a11y: {
		enabled: false,
	},
});


//* gellery filter (select)

const element = document.querySelector('.gellery__filter-select');
const choices = new Choices(element, {
	searchEnabled: false,
});




//* gellery slider

const gellerySlider = new Swiper('.gellery__slider', {
	slidesPerView: 3,
	slidesPerColumn: 2,
	slidesPerGroup: 3,
	spaceBetween: 50,
	// preloadImages: false,
	// lazy: true,
	// loadPrevNext: true,
	// loadPrevNextAmount: 6,
	pagination: {
		el: ".gellery__swiper-pagination",
		type: "fraction",
		clickable: false,
	},
	navigation: {
		nextEl: '.gellery__swiper-button-next',
		prevEl: '.gellery__swiper-button-prev',
	},
	breakpont: {
		320: {
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerGroup: 1,
			spaceBetween: 34,
		},
		768: {
			slidesPerView: 2,
			slidesPerColumn: 2,
			slidesPerGroup: 2,
			spaceBetween: 34,
		},
		1200: {
			slidesPerView: 3,
			slidesPerColumn: 2,
			slidesPerGroup: 3,
			spaceBetween: 50,
		},
	},
});


//* catalogues tabs

// document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
// 	tabsBtn.addEventListener('click', function (event) {
// 		document.querySelectorAll('.tabs__btn').forEach(function (tabs_btn) {
// 			tabs_btn.classList.remove('tab-active');
// 		});

// 		this.classList.add('tab-active');


// 		const path = event.currentTarget.dataset.path

// 		document.querySelectorAll('.tab-content').forEach(function (tabContent) {
// 			tabContent.classList.remove('tab-content-active');
// 		})
// 		document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');


// 		document.querySelectorAll('.how__slider-img').forEach(function (tabsBtn) {
// 			tabsBtn.classList.remove('tab-img-active');
// 		})
// 		document.querySelector(`[data-image="${path}"]`).classList.add('tab-img-active');
// 	})
// })


//* catalogues accordion

$(function () {
	$(".catalogues__accordion").accordion({
		heightStyle: "content",
		collapsible: true,
		active: 0
	});
});


//* projects partners slider

const projectsSlider = new Swiper('.projects__slider', {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 50,
	navigation: {
		nextEl: '.projects__button-next',
		prevEl: '.projects__button-prev',
	},
	breakpont: {
		320: {
			slidesPerView: 1,
			spaceBetween: 34,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 34,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
	},
});