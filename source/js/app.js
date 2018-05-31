import {accord} from './components/accord';
import {mPageScroll2id} from 'page-scroll-to-id';
import {horizontalScroll} from './components/horizontalScroll';

$(document).ready(() => {

  $(".main-nav__link").mPageScroll2id({
    offset: 0,
    highlightClass: "main-nav__link--active"
  });

  $('.form__input--resource').focus(
    function () {
      $(this).parent('div').addClass('form__input-wrapper--focus');
    }).blur(
    function () {
      $(this).parent('div').removeClass('form__input-wrapper--focus');
    });
});

const navBar = $(".header");
const link = $(".main-nav__link");
const logoMain = $(".logo");
const logoNav = $(".logo--nav-bar");
const linkedinIcon = $(".icon--ln");

$(window).scroll(function () {
  if ($(window).scrollTop() > 118) {
    navBar.addClass("header--is-active");
    link.addClass("main-nav__link--bar");
    logoMain.addClass("logo--hidden");
    logoNav.addClass("logo--nav-bar-is-active");
    linkedinIcon.addClass("icon--black");
  } else {
    navBar.removeClass("header--is-active");
    link.removeClass("main-nav__link--bar");
    logoMain.removeClass("logo--hidden");
    logoNav.removeClass("logo--nav-bar-is-active");
    linkedinIcon.removeClass("icon--black");
  }
});
//Dropdown features section
accord('dropdown');


const scrollContent = document.querySelector('.resources__articles-container');
// function horizontalscrollEvent() {
//   function scrollHorizontally(e) {
//     e = window.event || e;
//     const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//     const data = scrollContent.scrollLeft -= (delta * 30);
//     // Multiplied by 30
//     const scroll = scrollContent.scrollLeft;
//     e.preventDefault();
//     // console.log(scroll);
//     function scrollProgress() {
//       const scroll = scrollContent.scrollLeft;
//       console.log(scroll);
//       const width = scrollContent.scrollWidth;
//       console.log(width);
//       const scrolled = (scroll / (width-1114)) * 100;
//        document.querySelector(".resources__progress-scroll").style.width = scrolled + "%";
//     }
//     scrollProgress();
//   }
//   if (document.querySelector('.resources__articles-container').addEventListener) {
//     // IE9, Chrome, Safari, Opera
//     document.querySelector('.resources__articles-container').addEventListener("mousewheel", scrollHorizontally, false);
//     // Firefox
//     document.querySelector('.resources__articles-container').addEventListener("DOMMouseScroll", scrollHorizontally, false);
//   } else {
//     // IE 6/7/8
//     document.querySelector('.resources__articles-container').attachEvent("onmousewheel", scrollHorizontally);
//   }
// };
horizontalScroll(scrollContent);
// horizontalscrollEvent();




