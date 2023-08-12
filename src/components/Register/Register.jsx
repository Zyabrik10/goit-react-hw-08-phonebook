import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/auth-operations';
import { TextField, Box, Button  } from '@mui/material';

export default function Register() {
  const dispatch = useDispatch();

  function formHandler(e) {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(signUp({ password, email, name }));
  }

  return (
     <Box
      className="global-form"
      component="form"
      // autoComplete="off"
      onSubmit={formHandler}
    >
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        type="email"
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        name="password"
        type="password"
        required
      />
      <Button variant="contained" type='submit'>Sign In</Button>
    </Box>
  );
}
