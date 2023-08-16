import css from './user-menu.module.css';
import Button from '@mui/material/Button';
import { BsFillPersonFill } from 'react-icons/bs';

import { closeModalWindowByMousePressing, closeModalWindowOnKeyPressed } from 'js/modal-window';

import cs from '../UserSideMenu/user-slide.module.css';

import $ from 'jquery';

export default function UserMenu() {
  const buttonHandle = () => {
    $('.aside-menu-box').fadeIn();
    $('.aside-menu-box').addClass(cs["active"]);
    $('.aside-menu-box').bind('mousedown', closeModalWindowByMousePressing);
    $(document).bind('keydown', closeModalWindowOnKeyPressed);
  }

  return (
    <div className={`${css['user-menu']}`}>
        <Button variant="outlined" onClick={buttonHandle}>
          <BsFillPersonFill />
        </Button>
    </div>
  );
}
