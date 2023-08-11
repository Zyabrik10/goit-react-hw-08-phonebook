import { inputFocus } from 'js/input-focus';
import { useDispatch } from "react-redux";
import { addContact } from 'redux/operations';

export default function ContactForm () {
  const dispatch = useDispatch();

  const formHandler = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const phone = form.number.value.trim();

    dispatch(addContact({
      name,
      phone,
    }));
    form.reset();
  };

  return (
    <form className="contact-form" action="" onSubmit={formHandler}>
      <div className="input-box">
        <input
          type="text"
          id="name-input"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          onBlur={inputFocus}
        />
        <label htmlFor="name-input">Name</label>
      </div>
      <div className="input-box">
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="phone-input"
          autoComplete="off"
          onBlur={inputFocus}
        />
        <label htmlFor="phone-input">Phone</label>
      </div>
      <button className="ph-button add-contact global-button">
        Add contact
      </button>
    </form>
  );
};
