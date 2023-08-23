import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/auth-operations';
import { TextField, Box, Button, styled } from '@mui/material';
import { selectAuth } from 'redux/auth/auth-selector';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

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

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { token } = useSelector(selectAuth);

    useEffect(() => {
    if (token) navigate('/phone-book');
  }, [navigate, token]);

  function formHandler(e) {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(signUp({ password, email, name }));
  }

  return (
    <section>
      <h2
        className="global-title"
        style={{ textAlign: 'center', margin: '0 0 20px 0' }}
      >
        Sign Up
      </h2>
      <div className='global-form-box'>
        <Box className="global-form" component="form" onSubmit={formHandler}>
          <CssTextField label="Name" variant="outlined" name="name" required/>
          <CssTextField
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            autoComplete='current-password'
            required
          />
          <CssTextField
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            autoComplete='current-password'
            required
          />
          <Button variant="contained" type="submit">
            Sign In
          </Button>
        </Box>
      </div>
    </section>
  );
}
