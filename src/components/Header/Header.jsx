import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectAuth } from 'redux/auth/auth-selector';
import css from './header.module.css';
import Button from '@mui/material/Button';

export default function Header() {
  const { isLogedIn } = useSelector(selectAuth);

  return (
    <header>
      <div className={`${css['header-container']} container`}>
        <Link className="global-link" to="/">
          Contacts inc.
        </Link>
        <nav>
          <ul className={`global-list`}>
            <li>
              <NavLink className="nav-link global-link" to="/">
                Home
              </NavLink>
            </li>
            {isLogedIn ? (
              <li>
                <NavLink className="nav-link global-link" to="/contacts">
                  Contacts
                </NavLink>
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
