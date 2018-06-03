import {sidebarMenu} from './components/sidebarMenu'
import {accord} from './components/accord';
import {mPageScroll2id} from 'page-scroll-to-id';
import {horizontalScroll} from './components/horizontalScroll';
import {dropdownFilter} from './components/dropdownFilter';
import {coverage} from './components/map';
import {sliders} from './components/sliders';

$(document).ready(() => {
  sidebarMenu();
  $(".main-nav__link").mPageScroll2id({
    offset: 102,
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

const scrollContent = document.querySelector('.resources__articles-container');

horizontalScroll(scrollContent);
dropdownFilter("filter__btn");
coverage();
sliders();


