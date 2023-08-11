import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  return (
    <div className="phonebook-box">
      <h1 className="ph-title global-p">Phonebook</h1>
      <ContactForm />
      <h2 className="global-p">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};