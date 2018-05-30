import {accord} from './components/accord';
import {mPageScroll2id} from 'page-scroll-to-id';

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
const linkedinIcon =$(".icon--ln");

$(window).scroll(function() {
  if ($(window).scrollTop() > 360) {
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

accord('dropdown');


