import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { selectAuth } from 'redux/auth/auth-selector';
import { useSelector } from 'react-redux';

export default function Home() {
  const { isLoggedIn } = useSelector(selectAuth);
  return (
    <div
      className="hero"
      style={{ padding: '100px 0', textAlign: 'center', fontSize: '36px' }}
    >
      <p className="global-p" style={{ marginBottom: '15px' }}>
        This is contacts App
      </p>
      <p
        className="global-p"
        style={{ fontSize: '20px', width: '300px', margin: '0 auto 30px auto' }}
      >
        Here with one click you can add and delete your contact
      </p>
      {!isLoggedIn ? (
        <Button variant="contained" type="button">
          <Link className="global-link" to="/login">
            Log in
          </Link>
        </Button>
      ) : (
        <Button variant="contained" type="button">
          <Link className="global-link" to="/phone-book">
            Phonebook
          </Link>
        </Button>
      )}
    </div>
  );
}
