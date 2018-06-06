export const filters = () => {
  $('.filter__link').click(function (e) {
    e.preventDefault();
    let a = $(this).attr('href');
    a = a.substr(1).toLowerCase();
    $('.resources__articles').each(function() {
      if (!$(this).hasClass(`article__country--${a}`) && a !== 'global') {
        $(this).addClass('resources__article--hidden');
      }else {
        $(this).removeClass('resources__article--hidden');
      }
    });
  });
};