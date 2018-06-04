export const sidebarMenu = () => {
  const toggleButton = $('.burger');
  const sidebarNav = $('.main-nav');
  const sidebarToggleBtn = $('.burger-sidebar');
  const articleToggleButton = $('.article-burger');
  const articlesidebarNav = $('.article-page-nav');
  const articlesidebarToggleBtn = $('.article-burger-sidebar');

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

  articleToggleButton.click(()=> {
    articleToggleButton.addClass('article-burger--open');
    articlesidebarToggleBtn.addClass('article-burger-sidebar--open');
    articlesidebarNav.addClass('article-page-nav--is-open');
  });

  articlesidebarToggleBtn.click(() => {
    articlesidebarToggleBtn.removeClass('article-burger-sidebar--open');
    articleToggleButton.removeClass('article-burger--open');
    articlesidebarNav.removeClass('article-page-nav--is-open');
  });


};

