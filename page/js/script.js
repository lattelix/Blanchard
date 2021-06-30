//* header dropdown

document.querySelectorAll('.header__category-heading').forEach(function (dropEl) {
	dropEl.addEventListener('click', function (event) {
		const dropPath = event.currentTarget.dataset.path
		if (this.classList.contains('drop-el-active')) {
			this.classList.remove('drop-el-active');
			document.querySelector(`[data-dropget="${dropPath}"]`).classList.remove('drop-open');
		} else {
			document.querySelectorAll('.header__category-heading').forEach(function (dropEl) {
				dropEl.classList.remove('drop-el-active');
			});
			this.classList.add('drop-el-active');
			document.querySelectorAll('.header__dropdown').forEach(function (dropBody) {
				dropBody.classList.remove('drop-open');
			})
			document.querySelector(`[data-dropget="${dropPath}"]`).classList.add('drop-open');
		}
	})
});

// ToDo (optional function, it's function delete drop-body for invite user expirients)
// document.querySelectorAll('.header__dropdown').forEach(function (dropOut) {
// 	dropOut.addEventListener('mouseout', function (event) {
// 		document.querySelectorAll('.header__category-heading').forEach(function (dropEl) {
// 			dropEl.classList.remove('drop-el-active');
// 		});
// 		document.querySelectorAll('.header__dropdown').forEach(function (dropBody) {
// 			dropBody.classList.remove('drop-open');
// 		})
// 	})
// });


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


//* gallery filter (select)

const element = document.querySelector('.gallery__filter-select');
const choices = new Choices(element, {
	searchEnabled: false,
});


//* gallery slider

const gallerySlider = new Swiper('.gallery__slider', {
	pagination: {
		el: ".gallery__swiper-pagination",
		type: "fraction",
		clickable: false,
	},
	navigation: {
		nextEl: '.gallery__swiper-button-next',
		prevEl: '.gallery__swiper-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerGroup: 1,
			spaceBetween: 34,
		},
		576: {
			slidesPerView: 2,
			slidesPerColumn: 2,
			slidesPerGroup: 2,
			spaceBetween: 34,
		},
		1440: {
			slidesPerView: 3,
			slidesPerColumn: 2,
			slidesPerGroup: 3,
			spaceBetween: 50,
		},
	},
});


//* catalogues tabs

document.querySelectorAll('.catalogues__tab-btn').forEach(function (tabsBtn) {
	tabsBtn.addEventListener('click', function (event) {
		document.querySelectorAll('.catalogues__tab-btn').forEach(function (tabs_btn) {
			tabs_btn.classList.remove('catalogues__tab-active');
		});
		this.classList.add('catalogues__tab-active');
		const tabPath = event.currentTarget.dataset.tab_path
		document.querySelectorAll('.catalogues__body').forEach(function (tabContent) {
			tabContent.classList.remove('catalogues__body-active');
		})
		document.querySelector(`[data-target="${tabPath}"]`).classList.add('catalogues__body-active');
	})
})


//* catalogues accordion

$(function () {
	$(".catalogues__accordion").accordion({
		heightStyle: "content",
		collapsible: true,
		active: 0
	});
});


//* events slider

const eventsSlider = new Swiper('.events__content', {
	pagination: {
		el: ".events__pagination",
		clickable: true,
	},
	centeredSlides: true,
	slidesPerView: 1,
	spaceBetween: 100,
	breakpoints: {
		576: {
			spaceBetween: 0,
			enabled: false
		},
	},
});


//* events all-btn

document.querySelector('.events__all-btn').addEventListener('click', function () {
	// this.classList.add('events__all-hidden');
	this.style.display = "none";
	document.querySelectorAll('.events__card').forEach(function (eventsCard) {
		eventsCard.style.display = "block";
		// eventsCard.classList.add('events__card-active');
	})
})


//* publications slider

const publicationsSlider = new Swiper('.publications__slider', {
	pagination: {
		el: ".publications__swiper-pagination",
		type: "fraction",
		clickable: false,
	},
	navigation: {
		nextEl: '.publications__swiper-next',
		prevEl: '.publications__swiper-prev',
	},
	breakpoints: {
		320: {
			enabled: false,
		},
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 34,
		},
		1024: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 50,
		},
		1400: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 50,
		},
	},
});

// let input = document.querySelector('.publications__price-input')

// Document.


//* projects partners slider

const projectsSlider = new Swiper('.projects__slider', {
	navigation: {
		nextEl: '.projects__button-next',
		prevEl: '.projects__button-prev',
	},
	a11y: {
		enabled: true,
	},
	breakpoints: {
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


//* contacts input mask

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

new JustValidate('.contacts__form', {
	rules: {
		name: {
			required: true,
			minLength: 3,
			maxLength: 16,
		},
		tel: {
			required: true,
			function: (name, value) => {
				const phone = selector.inputmask.unmaskedvalue()
				return Number(phone) && phone.length === 10
			}
		}
	},
	messages: {
		name: 'Недопустимый формат',
		tel: 'Недопустимый формат'
	},

	submitHandler: function (form, values, ajax) {

		ajax({
			url: 'https://just-validate-api.herokuapp.com/submit',
			method: 'POST',
			data: values,
			async: true,
			callback: function (response) {
				console.log(response)
			}
		});
	},
});