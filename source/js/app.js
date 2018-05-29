import {mPageScroll2id} from 'page-scroll-to-id';
import accord from './components/accord';
$(document).ready(() => {
  // @TODO delete this
  let str = `window location is ${window.location}`;
  console.log(str);


  $(".main-nav__link").mPageScroll2id({
    offset: 0,
    highlightClass:"main-nav__link--active"
  });


});

// accord('.dropdown');


