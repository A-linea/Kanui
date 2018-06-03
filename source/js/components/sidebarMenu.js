export const sidebarMenu = () => {
  const toggleButton = $('.burger');
  const sidebarNav = $('.main-nav');
  const sidebarToggleBtn = $('.burger-sidebar');
  // const toggleButtonOpen = $('.burger--open');

  toggleButton.click(() => {
    toggleButton.addClass('burger--open');
    sidebarToggleBtn.addClass('burger-sidebar--open');
    sidebarNav.addClass('main-nav--is-open');
  });

  sidebarToggleBtn.click(() => {
    sidebarToggleBtn.removeClass('burger-sidebar--open');
    toggleButton.removeClass('burger--open');
    sidebarNav.removeClass('main-nav--is-open');
  });

};

