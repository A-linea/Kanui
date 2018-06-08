export const zoomMap = () => {

  let zoom = 1;
  $('.map__controls--plus').on('click', function (e) {
    e.preventDefault();
    zoom += 0.1;
    if (zoom >= 1.7) {
      return
    } else {
      $('.map').css({
        transform: `scale(${zoom})`,
        transition: `.3s transform ease`,
      });
    }
  });


  $('.map__controls--minus').on('click', function (e) {
    e.preventDefault();
    zoom -= 0.1;
    if (zoom <= 0.5) {
      return
    } else {
      $('.map').css({
        transform: `scale(${zoom})`,
        transition: `.3s transform ease`,
      });
    }
  });
  $('.map__controls--exp').on('click', function (e) {
    e.preventDefault();
    zoom = 1;
    $('.map').css({
      transform: `scale(${zoom})`,
      transition: `.2s transform ease`,
    });
  });
};