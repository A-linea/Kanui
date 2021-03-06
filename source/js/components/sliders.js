import Swiper from '../../../node_modules/swiper/dist/js/swiper';

export const sliders = () => {
  const breakpoint = window.matchMedia('(min-width:992px)');
  let personSlider;
  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (personSlider !== undefined) personSlider.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };
  const enableSwiper = () => {
    personSlider = new Swiper('.swiper-container', {
      centeredSlides: true,
      breakpoints: {
        992: {
          slidesPerView: 'auto',
        },
      },
      navigation: {
        prevEl: '.slider-button-prev',
        nextEl: '.slider-button-next'
      }
    })
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

  const articleSlider = new Swiper('.resources__articles-content', {
    direction: 'horizontal',
    freeMode: false,
    pagination: {
      el: '.resources__progress-scroll-container',
      type: 'progressbar',
    },
    slidesPerView: 'auto',
    mousewheel: true,
    forceToAxis: true,
    grabCursor: true,
  });

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};



