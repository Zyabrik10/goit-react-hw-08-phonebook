import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilteredContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';

export default function ContactList() {
  const dispatch = useDispatch();
  
  const { isLoading, error } = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function removeFromContactsListHandler({ currentTarget: target }) {
    target.setAttribute("disabled", "true");
    const id = target.getAttribute('data-id');
    dispatch(deleteContact(id));
  };

  function showContacts() {
   return filteredContacts.length ? (
     <ul className="contacts-list global-list">
      {filteredContacts.map(({ phone, name, id }) => (
        <li key={id}>
          <p className="global-p">
            {name}: {phone}
          </p>
          <button
            className="ph-button global-button"
            data-id={id}
            onClick={removeFromContactsListHandler}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
    ) : (
    <p className="global-p">No contacts</p>
  )
}

  function showError() {
    return error ? <p className='global-p'>{error}</p> : showContacts();
  }
  
  return isLoading ? <p className='global-p'>loading...</p> : showError();
}

