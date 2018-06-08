import {sidebarMenu} from './components/sidebarMenu'
import {accord} from './components/accord';
import {mPageScroll2id} from 'page-scroll-to-id';
import {dropdownFilter} from './components/dropdownFilter';
import {coverage} from './components/map';
import {mapSidebar} from './components/mapSidebar';
import {sliders} from './components/sliders';
import {filters} from './components/filters';
import {zoomMap} from './components/zoom';

$(document).ready(() => {
  sidebarMenu();

  function pageOffsetFn() {
    if ($(window).width() > 1279) {
      return 108;
    }
    if ($(window).width() > 991) {
      return 102;
    }
    if ($(window).width() > 767) {
      return 98;
    }
    if ($(window).width() > 319) {
      return 61;
    }
  }

  $(".main-nav__link").mPageScroll2id({
    offset: function () {
      return pageOffsetFn();
    },
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
const burger = $(".burger")
const headerSidebar = $(".header__contacts--sidebar");

$(window).scroll(function () {
  if ($(window).scrollTop() > 118) {
    navBar.addClass("header--is-active");
    link.addClass("main-nav__link--bar");
    logoMain.addClass("logo--hidden");
    logoNav.addClass("logo--nav-bar-is-active");
    linkedinIcon.addClass("icon--black");
    burger.addClass("burger--dark-blue");
    headerSidebar.addClass("header__contacts--sidebar--is-active")
  } else {
    navBar.removeClass("header--is-active");
    link.removeClass("main-nav__link--bar");
    logoMain.removeClass("logo--hidden");
    logoNav.removeClass("logo--nav-bar-is-active");
    linkedinIcon.removeClass("icon--black");
    burger.removeClass("burger--dark-blue");
    headerSidebar.removeClass("header__contacts--sidebar--is-active")
  }
});
//Dropdown features section
accord('dropdown');

dropdownFilter("filter__btn");
coverage();
sliders();
filters();
coverage();
mapSidebar();
zoomMap();

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
