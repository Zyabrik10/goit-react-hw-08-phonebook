import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import css from './phone-book.module.css';
import { PhoneBookExtra } from './PhoneBookExtra/PhoneBookExtra';


export default function PhoneBook() {


  return (
    <section>
      <h1 className={`${css.ph} ${css.title} global-title`}>Phonebook</h1>
      <div className={css['phonebook-box']}>
        <div className={css['contacts-box']}>
          <ContactForm />
          <hr style={{ marginBottom: '15px' }} />
          <PhoneBookExtra/>
        </div>
        <ContactList />
      </div>
    </section>
  );
}
