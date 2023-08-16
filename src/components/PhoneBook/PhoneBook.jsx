import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from './phone-book.module.css';

export default function PhoneBook() {
  return (
    <section>
      <h1 className={ `${css.ph} ${css.title} global-title`}>PhoneBook</h1>
      <div className={css['phonebook-box']}>
        <div className={css['contacts-box']}>
          <ContactForm />
          <hr style={{marginBottom: '15px'}} />
          <Filter />
        </div>
        <ContactList />
      </div>
    </section>
  );
}
