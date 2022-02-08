//* header dropdown

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".header__category-naming").forEach((item) => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header__dropdown");

      document.querySelectorAll(".header__category-naming").forEach((el) => {
        if (el != btn) {
          el.classList.remove("active-btn");
        }
      });

      document.querySelectorAll(".header__dropdown").forEach((el) => {
        if (el != dropdown) {
          el.classList.remove("drop-open");
        }
      });
      dropdown.classList.toggle("drop-open");
      btn.classList.toggle("active-btn");
    });
  });

  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".header__category-list")) {
      document.querySelectorAll(".header__dropdown").forEach((el) => {
        el.classList.remove("drop-open");
      });
      document.querySelectorAll(".header__category-naming").forEach((el) => {
        el.classList.remove("active-btn");
      });
    }
  });
});

//* hero slider

const heroSlider = new Swiper(".hero__swiper-container", {
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

const element = document.querySelector(".gallery__filter-select");
const choices = new Choices(element, {
  searchEnabled: false,
});

//* gallery slider

const gallerySlider = new Swiper(".gallery__slider", {
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction",
    clickable: false,
  },
  navigation: {
    nextEl: ".gallery__swiper-button-next",
    prevEl: ".gallery__swiper-button-prev",
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

// document.querySelectorAll(".catalogues__tab-btn").forEach(function (tabsBtn) {
//   tabsBtn.addEventListener("click", function (event) {
//     document
//       .querySelectorAll(".catalogues__tab-btn")
//       .forEach(function (tabs_btn) {
//         tabs_btn.classList.remove("catalogues__tab-active");
//       });
//     this.classList.add("catalogues__tab-active");
//     const tabPath = event.currentTarget.dataset.tab_path;
//     document
//       .querySelectorAll(".catalogues__body")
//       .forEach(function (tabContent) {
//         tabContent.classList.remove("catalogues__body-active");
//       });
//     document
//       .querySelector(`[data-target="${tabPath}"]`)
//       .classList.add("catalogues__body-active");
//   });
// });

// document.querySelectorAll(".tab-content").forEach((item) => {
// 	// let btns = item.find(".ac--list__iten-tab");
// 	let btns = item.querySelectorAll(".catalogues__content-btn");
// 	let articles = item.querySelectorAll(".catalogues__content");
// 	btns.forEach((el) => {
// 	  el.addEventListener("click", function (e) {
// 		 let path = e.currentTarget.dataset.path;
// 		 let tabCont = item.querySelector(`[data-target='${path}']`);
// 		 console.log(tabCont);
// 		 articles.forEach((el) => {
// 			el.classList.remove("article-tabActive");
// 		 });
// 		 btns.forEach((el) => {
// 			el.classList.remove("article-btn-active");
// 		 });
// 		 tabCont.classList.add("article-tabActive");
// 		 this.classList.add("article-btn-active");
// 	  });
// 	});
//  });

// document.querySelectorAll(".catalogues__content").forEach((item) => {
//   // let btns = item.find(".ac--list__iten-tab");
//   let btns = item.querySelectorAll(".catalogues__content-btn");
//   let articles = item.querySelectorAll(".article-content");
//   btns.forEach((el) => {
//     el.addEventListener("click", function (e) {
//       let path = e.currentTarget.dataset.path;
//       let tabCont = item.querySelector(`[data-target='${path}']`);
//       console.log(tabCont);
//       articles.forEach((el) => {
//         el.classList.remove("article-tabActive");
//       });
//       btns.forEach((el) => {
//         el.classList.remove("article-btn-active");
//       });
//       tabCont.classList.add("article-tabActive");
//       this.classList.add("article-btn-active");
//     });
//   });
// });

//* catalogues accordion

// $(function () {
//   $(".catalogues__accordion").accordion({
//     icons: false,
//     heightStyle: "content",
//     collapsible: true,
//     active: 0,
//   });
// });

$(function () {
  $(".catalogues__accordion").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
  });
  document.querySelectorAll(".catalogues__tab-btn").forEach((item) => {
    item.addEventListener("click", function (e) {
      $(".catalogues__accordion").accordion({
        icons: false,
        heightStyle: "content",
        collapsible: true,
        active: false,
      });
      let path = e.currentTarget.dataset.path;
      document.querySelectorAll(".catalogues__body").forEach((el) => {
        el.classList.remove("catalogues__body-active");
      });
      document.querySelectorAll(".catalogues__tab-btn").forEach((el) => {
        el.classList.remove("catalogues__tab-active");
      });
      document
        .querySelector(`[data-target='${path}']`)
        .classList.add("catalogues__body-active");
      this.classList.add("catalogues__tab-active");
    });
  });

  document.querySelectorAll(".catalogues__body").forEach((item) => {
    let btns = item.querySelectorAll(".catalogues__content-btn");
    let articles = item.querySelectorAll(".catalogues__content");
    btns.forEach((el) => {
      el.addEventListener("click", function (e) {
        let path = e.currentTarget.dataset.path;
        let tabCont = item.querySelector(`[data-target='${path}']`);
        console.log(tabCont);
        articles.forEach((el) => {
          el.classList.remove("article-tabActive");
        });
        btns.forEach((el) => {
          el.classList.remove("article-btn-active");
        });
        tabCont.classList.add("article-tabActive");
        this.classList.add("article-btn-active");
      });
    });
  });
});

//* events slider

const eventsSlider = new Swiper(".events__content", {
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
      enabled: false,
    },
  },
});

//* events all-btn

document
  .querySelector(".events__all-btn")
  .addEventListener("click", function () {
    // this.classList.add('events__all-hidden');
    this.style.display = "none";
    document.querySelectorAll(".events__card").forEach(function (eventsCard) {
      eventsCard.style.display = "block";
      // eventsCard.classList.add('events__card-active');
    });
  });

//* publications slider

const publicationsSlider = new Swiper(".publications__slider", {
  pagination: {
    el: ".publications__swiper-pagination",
    type: "fraction",
    clickable: false,
  },
  navigation: {
    nextEl: ".publications__swiper-next",
    prevEl: ".publications__swiper-prev",
  },
  breakpoints: {
    320: {
      enabled: false,
      slidesPerView: 0,
      slidesPerGroup: 0,
      spaceBetween: 0,
    },
    576: {
      enabled: true,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    992: {
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

// if (window.innerWidth < 577) {
// 	const array = document.getElementsByClassName('publications__checkbox');
// 	array.forEach(item => {
// 		this.addEventListener('change', function () {
// 			if (this.checked) {
// 				this.parentNode.classList.add('active');
// 			} else {
// 				this.parentNode.classList.remove('active');
// 			}
// 		});
// 	});
// 	const arrayLabel = document.getElementsByClassName('publications__label');
// 	let slideHeading = document.querySelector('.publications__prescription');
// 	let slideArrow = document.querySelector('.publications__prescription-arrow');
// 	slideHeading.addEventListener('click', function () {
// 		console.log('click');
// 		this.classList.toggle('active');
// 		slideArrow.classList.toggle('active');
// 		if (this.classList.contains('active')) {
// 			for (index in arrayLabel) {
// 				const element = arrayLabel[index];
// 				if (element.classList.contains('active') == false) {
// 					element.style.display = "none";
// 				}
// 			}
// 		} else {
// 			for (index in arrayLabel) {
// 				const element = arrayLabel[index];
// 				element.style.display = "block";
// 			}
// 		}
// 	});
// }

if (window.innerWidth < 577) {
  console.log("🚀");
  let button = ".publications__prescription";
  let labels = ".publications__label";
  let labelsList = ".publications__filter";
  let labelsListActive = "checklist-active";
  let labelActive = "publications__label-active";
  let animationClass = "animation-test";
  let inputCheckbox = ".publications__checkbox";

  function checkboxToggle(
    a,
    b,
    c,
    labelsListActive,
    labelActive,
    animationClass,
    inputCheckbox
  ) {
    let btn = document.querySelector(a);
    let labels = document.querySelectorAll(b);
    let listLabels = document.querySelector(c);
    btn.addEventListener("click", toggleSpoiler);
    btn.addEventListener("keyup", function (e) {
      console.log(e.key);
      if (e.code === "Enter") {
        toggleSpoiler();
      }
    });

    function toggleSpoiler() {
      if (!listLabels.classList.contains(labelsListActive)) {
        btn.classList.add("is-active");
        listLabels.classList.add(labelsListActive);
        labels.forEach((item) => {
          // item.classList.add("checkbox--label-active");
          animationItem(item, labelActive, animationClass, "add");
        });
      } else {
        btn.classList.remove("is-active");
        listLabels.classList.remove(labelsListActive);
        labels.forEach((item) => {
          if (item.querySelector(inputCheckbox).checked) {
            animationItem(item, labelActive, animationClass, "add");
          } else {
            animationItem(item, labelActive, animationClass, "remove");
          }
        });
      }
      labels.forEach((item) => {
        item.addEventListener("click", function () {
          if (!listLabels.classList.contains(labelsListActive)) {
            animationItem(this, labelActive, animationClass, "remove");
          }
        });
      });
    }

    function animationItem(item, class1, class2, f) {
      if (f === "add") {
        item.classList.add(class1);
        setTimeout(function () {
          item.classList.add(class2);
        }, 100);
      } else {
        item.classList.remove(class2);
        setTimeout(function () {
          item.classList.remove(class1);
        }, 300);
      }
    }
  }

  checkboxToggle(
    button,
    labels,
    labelsList,
    labelsListActive,
    labelActive,
    animationClass,
    inputCheckbox
  );
}

//* projects partners slider

const projectsSlider = new Swiper(".projects__slider", {
  navigation: {
    nextEl: ".projects__button-next",
    prevEl: ".projects__button-prev",
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
    992: {
      slidesPerView: 2,
      spaceBetween: 50,
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

new JustValidate(".contacts__form", {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 16,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
  },
  messages: {
    name: "Недопустимый формат",
    tel: "Недопустимый формат",
  },

  submitHandler: function (form, values, ajax) {
    ajax({
      url: "https://just-validate-api.herokuapp.com/submit",
      method: "POST",
      data: values,
      async: true,
      callback: function (response) {
        console.log(response);
      },
    });
  },
});
