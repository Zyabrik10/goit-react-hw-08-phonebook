import { logIn } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Box, Button, styled } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { selectAuth } from 'redux/auth/auth-selector';

const CssTextField = styled(TextField)({
  '& label': {
    color: '#9a9b9d',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#4e8ebf',
    },
  },
});

export default function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector(selectAuth);

  function formHandler(e) {
    e.preventDefault();

    const form = e.currentTarget;

    const email = form.email.value;
    const password = form.password.value;

    dispatch(logIn({ password, email }));
  }

  useEffect(() => {
    if (token) navigate('/contacts');
  }, [navigate, token]);

  return (
    <section>
      <h2
        className="global-title"
        style={{ textAlign: 'center', margin: '0 0 20px 0' }}
      >
        Log In
      </h2>
      <div className="global-form-box">
        <Box className="global-form" component="form" onSubmit={formHandler}>
          <CssTextField
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            autoComplete="current-password"
          />
          <CssTextField
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <Button variant="contained" type="submit">
            Sign In{' '}
          </Button>
        </Box>
      </div>
    </section>
  );
}
