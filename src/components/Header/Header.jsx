import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectAuth } from 'redux/auth/auth-selector';
import css from './header.module.css';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  transition: color 0.2s ease;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 0;
    height: 2px;
    background: #1976d2;
    border-radius:1px;

    transition: width 0.2s ease, left 0.2s ease;
  }

  &.active::before{
    left: 0;
    width: 100%;
  }

  &:hover{
    color: #0046a2;
  }

  &.active{
    color: #1976d2;
  }
`;

export default function Header() {
  const { isLogedIn } = useSelector(selectAuth);

  return (
    <header className={css["header"]}>
      <div className={`${css['header-container']} container`}>
        <Link to="/" className='global-link' style={{
          fontVariant: "small-caps",
          fontSize:"20px"
        }}>Phonebook.ua</Link>
        <nav>
          <ul className="global-list">
            <li>
              <StyledNavLink className="global-link" to="/">
                Home
              </StyledNavLink>
            </li>
            {isLogedIn ? (
              <li>
                <StyledNavLink className="global-link" to="/phone-book">
                  PhoneBook
                </StyledNavLink>
              </li>
            ) : null}
          </ul>
        </nav>

        {!isLogedIn ? (
          <ul className={`global-list`}>
            <li>
              <NavLink className="nav-link global-link" to="/login">
                <Button>Log In</Button>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link global-link" to="/register">
                <Button variant="outlined">Sign In</Button>
              </NavLink>
            </li>
          </ul>
        ) : null}

        {isLogedIn ? <UserMenu /> : null}
      </div>
    </header>
  );
}
