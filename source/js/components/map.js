export const coverage = () => {
  //breakpoint watcher
  const breakpoint = window.matchMedia('(min-width:992px)');
  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      return;
    } else if (breakpoint.matches === false) {
      return openContinent();
    }
  };

  //open continent dropdown touch devices only
  const openContinent = () => {
    let i;
    const dropdown = document.getElementsByClassName("map__countries-continent");
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].onclick = function () {
        this.classList.toggle(`map__countries-continent--active`);
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = 200 + "px";
        }
      }
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

  $('.map__nav-link-list').click(function (e) {
    e.preventDefault();
    $(this).addClass('map__nav-link--active');
    $('.map__list-container').fadeIn();
    $('.map__countries').hide();
    $('.map__nav-link').removeClass('map__nav-link--active');
  });

  $('.map__nav-link').click(function (e) {
    e.preventDefault();
    $(this).addClass('map__nav-link--active');
    $('.map__list-container').fadeOut();
    $('.map__countries').show();
    $('.map__nav-link-list').removeClass('map__nav-link--active');
  });
};