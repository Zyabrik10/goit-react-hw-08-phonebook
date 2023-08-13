import { inputFocus } from 'js/input-focus';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectAuth } from 'redux/auth/auth-selector';

import { TextField, Box, Button } from '@mui/material';

export default function ContactForm() {
  const dispatch = useDispatch();
  const { token } = useSelector(selectAuth);

  const formHandler = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const number = form.number.value.trim();

    dispatch(
      addContact({
        name,
        number,
        token,
      })
    );
    form.reset();
  };

  return (
    <div style={{marginBottom:"15px"}}>
      <Box
        className="global-form"
        component="form"
        // autoComplete="off"
        onSubmit={formHandler}
      >
        <TextField label="Name" variant="outlined" name="name" />
        <TextField
          label="Number"
          variant="outlined"
          name="number"
          type="number"
        />
        <Button variant="contained" type="submit">
          Add Contact
        </Button>
      </Box>
    </div>
  );
}
