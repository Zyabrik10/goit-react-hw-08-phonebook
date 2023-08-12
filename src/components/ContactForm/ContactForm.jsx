import { inputFocus } from 'js/input-focus';
import { useDispatch,useSelector } from "react-redux";
import { addContact } from 'redux/contacts/contacts-operations';
import { selectAuth } from 'redux/auth/auth-selector';

import { TextField, Box, Button  } from '@mui/material';


export default function ContactForm () {
  const dispatch = useDispatch();
  const { token } = useSelector(selectAuth);

  const formHandler = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const number = form.number.value.trim();

    dispatch(addContact({
      name,
      number,
      token
    }));
    form.reset();
  };

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
        label="Number"
        variant="outlined"
        name="number"
        type="number"
        required
      />
      <Button variant="contained" type='submit'>Add Contact</Button>
    </Box>
    // <form className="global-form" action="" onSubmit={formHandler}>
    //   <div className="gf-input-box">
    //     <input
    //       type="text"
    //       id="name-input"
    //       name="name"
    //       required
    //       autoComplete="off"
    //       onBlur={inputFocus}
    //     />
    //     <label htmlFor="name-input">Name</label>
    //   </div>
    //   <div className="gf-input-box">
    //     <input
    //       type="tel"
    //       name="number"
    //       required
    //       id="number-input"
    //       autoComplete="off"
    //       onBlur={inputFocus}
    //     />
    //     <label htmlFor="number-input">number</label>
    //   </div>
    //   <button className="add-button add-contact global-button">
    //     Add contact
    //   </button>
    // </form>
  );
};
