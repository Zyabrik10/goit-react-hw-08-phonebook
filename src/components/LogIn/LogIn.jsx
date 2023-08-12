import { inputFocus } from 'js/input-focus';
import { logIn } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { TextField, Box, Button } from '@mui/material';

export default function LogIn() {
  const dispatch = useDispatch();

  function formHandler(e) {
    e.preventDefault();

    const form = e.currentTarget;

    const email = form.email.value;
    const password = form.password.value;

    dispatch(logIn({ password, email }));
  }
  return (
    <Box 
      className="global-form"
      component="form"
      onSubmit={formHandler}
    >
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
    //   <form className="global-form" action="" onSubmit={formHandler}>
    //   <div className="gf-input-box">
    //     <input
    //       type="email"
    //       name="email"
    //       required
    //       id="email-input"
    //       onBlur={inputFocus}
    //     />
    //     <label htmlFor="email-input">Email</label>
    //   </div>
    //   <div className="gf-input-box">
    //     <input
    //       type="password"
    //       name="password"
    //       required
    //       id="password-input"
    //       autoComplete="off"
    //       onBlur={inputFocus}
    //     />
    //     <label htmlFor="password-input">Password</label>
    //   </div>
    //   <button className="ph-button add-contact global-button">Log In</button>
    // </form>
  );
}
