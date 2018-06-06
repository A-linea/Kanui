import Swiper from '../../../node_modules/swiper/dist/js/swiper';
export const dropdownFilter = element => {
  const dropdown = document.getElementsByClassName(element);
  function filterScroll() {
    const scroll = new Swiper('.filter-wrapper', {
      direction: 'vertical',
      mousewheel: true,
      slidesPerView: 'auto',
      // freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        releaseOnEdges: true,
        sensitivity: 0.5,
      },
    });
  }
  let i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].onclick = function() {
      this.classList.toggle(`${element}-is--active`);
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = 200 + "px";
      }
      filterScroll();
    }
  }
};