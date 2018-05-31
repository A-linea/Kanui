export const horizontalScroll = element => {
  function scrollHorizontally(e) {
    e = window.event || e;
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    const data = this.scrollLeft -= (delta * 30);
    // Multiplied by 30
    e.preventDefault();
    const scroll = this.scrollLeft;
    const width = this.scrollWidth;
    const container = document.querySelector(".container");
    const currentContainerWidth = container.offsetWidth;
    const scrolled = (scroll / (width - currentContainerWidth)) * 100;
    document.querySelector(".resources__progress-scroll").style.width = scrolled + "%";
  }

  if (document.querySelector('.resources__articles-container').addEventListener) {
    // IE9, Chrome, Safari, Opera
    document.querySelector('.resources__articles-container').addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    document.querySelector('.resources__articles-container').addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    // IE 6/7/8
    document.querySelector('.resources__articles-container').attachEvent("onmousewheel", scrollHorizontally);
  }
};