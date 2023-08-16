import $ from 'jquery';

import css from '../components/UserSideMenu/user-slide.module.css';

export function closeModalWindow() {
  $('.aside-menu-box').fadeOut();
  $('.aside-menu-box').removeClass(css['active']);
  $('.aside-menu-box').unbind('mousedown', closeModalWindowByMousePressing);
  $(document).unbind('keydown', closeModalWindowOnKeyPressed);
}

export function closeModalWindowByMousePressing({ target }) {
  console.log();
  if (Array.from(target.classList).indexOf('aside-menu-box') < 0) return;
  closeModalWindow();
}

export function closeModalWindowOnKeyPressed({ key }) {
  if (key === 'Escape') {
    closeModalWindow();
  }
}
