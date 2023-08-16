import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from 'redux/auth/auth-selector';
import { selectContacts } from 'redux/contacts/contacts-selector';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/auth-operations';

import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import Button from '@mui/material/Button';

import { useEffect } from 'react';

import $ from 'jquery';

import css from './user-slide.module.css';

import {
  asideStyles,
  asideTitle,
  asideWrapperStyles,
  userInfoListStyles,
  userInfoItemStyle,
} from './user-slide-menu-styles';


export function UserSideMenu() {
  const { user, token } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: contacts } = useSelector(selectContacts);

  useEffect(() => {
    $('.aside-menu-box').hide();
  }, []);

  function buttonHandler(e) {
    $('.aside-menu-box').hide();

    e.preventDefault();
    dispatch(logOut(token));
    navigate('/');
  }
  return (
    <div style={asideWrapperStyles} className={`${css["aside-menu-box"]} aside-menu-box`}>
      <aside style={asideStyles} className={`${css["aside-menu"]} aside-menu`}>
        <p className="global-p" style={asideTitle}>
          Menu
        </p>
        <ul className="global-list" style={userInfoListStyles}>
          <li style={userInfoItemStyle}>
            <BsFillPersonFill />
            <p className="global-p">{user.name}</p>
          </li>
          <li style={userInfoItemStyle}>
            <MdEmail />
            <p className="global-p">{user.email}</p>
          </li>
        </ul>

        <hr
          style={{
            margin: '20px 0',
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <p className="global-p">Contacts</p>
          <p
            className="global-p"
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '100%',
              backgroundColor: 'red',
              color: '#eee',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '11px',
            }}
          >
            {contacts.length}
          </p>
        </div>
        <Button variant="outlined" onClick={buttonHandler}>
          Log out
        </Button>
      </aside>
    </div>
  );
}
