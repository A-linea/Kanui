import Swiper from '../../../node_modules/swiper/dist/js/swiper';

export const mapSidebar = () => {

  function closeAll() {
    $('.map__link').removeClass('map__link--active');
    $('.map__sidebar-container').removeClass('map__sidebar-container--active');
    $('.map__sidebar').removeClass('map__sidebar--active');
    $('.map__list-container').fadeOut();
    $('.map__nav-link').addClass('.map__nav-link--active');
    $('.map__country-dot').removeClass('map__country-dot--active');
    $('.map__country-dot').children().removeClass('map__country-name--active');
    $(`.map__country-pulse`).removeClass('map__country-pulse--active');
    $('.map__countries').fadeIn();
  }

  $('.map__link').click(function (e) {
    e.preventDefault();
    const sidebarContainer = $('.map__sidebar-container');
      sidebarContainer.addClass('map__sidebar-container--active');
    let country = $(this).attr('href');
    $('.map__link').removeClass('map__link--active');
    $(this).addClass('map__link--active');
    country = country.substr(1).toLowerCase();
        $(`.map__sidebar`).removeClass('map__sidebar--active');
        $(`.map__sidebar[data-country=${country}]`).addClass('map__sidebar--active');
    });

  $('.map__country-dot').click(function (e) {
    e.preventDefault();
    const sidebarContainer = $('.map__sidebar-container');
    sidebarContainer.addClass('map__sidebar-container--active');
    let country = $(this).attr('data-country');
    $('.map__country-dot').removeClass('map__country-dot--active');
    $(this).addClass('map__country-dot--active');
    $(this).children().removeClass('map__country-name--active');
    $(this).children().addClass('map__country-name--active');
    country = country.toLowerCase();
    $(`.map__country-pulse`).removeClass('map__country-pulse--active');
    $(`.map__country-pulse[data-country=${country}]`).addClass('map__country-pulse--active');
    $('.map__link').removeClass('map__link--active');
    $(`.map__link[data-country=${country}]`).addClass('map__link--active');
    $(`.map__sidebar`).removeClass('map__sidebar--active');
    $(`.map__sidebar[data-country=${country}]`).addClass('map__sidebar--active');
  });

  function sidebarScroll() {
    const scroll = new Swiper('.sidebar-swiper-container', {
      direction: 'vertical',
      mousewheel: true,
      slidesPerView: 'auto',
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        releaseOnEdges: true,
        sensitivity: 0.5,
      },
    });
  }

  const sidebarSlider = () => {
    const btnNext = $('.map__sidebar-slider-btn--next');
    btnNext.click(function (e) {
      e.preventDefault();
      const currentSlide = $('.map__sidebar--active');
      const currSlideIndex = $('.map__sidebar--active').index();
      let nextImageIndex = currSlideIndex + 1;
      const nextSlide = $('.map__sidebar').eq(nextImageIndex);
      const currData = nextSlide.attr('data-country');
      $('.map__link').removeClass('map__link--active');
      $(`.map__link[data-country=${currData}]`).addClass('map__link--active');
      $('.map__country-dot').removeClass('map__country-dot--active');
      $(`.map__country-dot[data-country=${currData}]`).addClass('map__country-dot--active');
      $('.map__country-dot').children().removeClass('map__country-name--active');
      $(`.map__country-dot[data-country=${currData}]`).children().addClass('map__country-name--active');
      $(`.map__country-pulse`).removeClass('map__country-pulse--active');
      $(`.map__country-pulse[data-country=${currData}]`).addClass('map__country-pulse--active');
      currentSlide.removeClass('map__sidebar--active');
      if (nextImageIndex === ($('.map__sidebar:last').index() + 1)) {
        $('.map__sidebar').eq(0).addClass('map__sidebar--active');
      } else {
        nextSlide.addClass('map__sidebar--active')
      }
    });

    const btnPrev = $('.map__sidebar-slider-btn--prev');
    btnPrev.click(function (e) {
      e.preventDefault();
      const currentSlide = $('.map__sidebar--active');
      const currSlideIndex = $('.map__sidebar--active').index();
      let prevImageIndex = currSlideIndex - 1;
      const prevSlide = $('.map__sidebar').eq(prevImageIndex);
      const currData = prevSlide.attr('data-country');
      $('.map__link').removeClass('map__link--active');
      $(`.map__link[data-country=${currData}]`).addClass('map__link--active');
      $('.map__country-dot').removeClass('map__country-dot--active');
      $(`.map__country-dot[data-country=${currData}]`).addClass('map__country-dot--active');
      $('.map__country-dot').children().removeClass('map__country-name--active');
      $(`.map__country-dot[data-country=${currData}]`).children().addClass('map__country-name--active');
      $(`.map__country-pulse`).removeClass('map__country-pulse--active');
      $(`.map__country-pulse[data-country=${currData}]`).addClass('map__country-pulse--active');
      currentSlide.removeClass('map__sidebar--active');
      prevSlide.addClass('map__sidebar--active')
    });
    const btnClose = $('.map__sidebar-slider-btn--close');
    btnClose.click(function(e) {
      closeAll();
    });
  };

  sidebarSlider();

  const mapSidebarDropdown = document.getElementsByClassName('map__sidebar-dropdown');
  let i;
  for (i = 0; i < mapSidebarDropdown.length; i++) {
    mapSidebarDropdown[i].onclick = function () {
      this.classList.toggle(`map__sidebar-dropdown--active`);
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.style.maxHeight = 200 + "px";
      }
      sidebarScroll();
    }
  }
};