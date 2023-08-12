import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";

export default function PhoneBook() {
    return (
    <div className="phonebook-box">
      <h1 className="ph-title global-p">Phonebook</h1>
      <ContactForm />
      <h2 className="global-p">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
    )
}