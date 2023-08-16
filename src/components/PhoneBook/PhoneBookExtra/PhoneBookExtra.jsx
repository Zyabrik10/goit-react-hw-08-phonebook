import Filter from 'components/Filter/Filter';
import { Button } from '@mui/material';

import { selectAuth } from 'redux/auth/auth-selector';
import { selectContacts } from 'redux/contacts/contacts-selector';
import { useSelector, useDispatch } from 'react-redux';

import { deleteAllContacts } from 'redux/contacts/contacts-operations';

import swal from 'sweetalert';
import { toast } from 'react-toastify';
import { alertObj } from 'js/alert-obj';

export function PhoneBookExtra() {
  const dispatch = useDispatch();

  const { token } = useSelector(selectAuth);
  const { items: contacts } = useSelector(selectContacts);

  function buttonHandle() {
    if (!contacts.length) {
      toast.info("There is no contacts to delete", alertObj);
      return;
    }
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover all contacts!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        dispatch(deleteAllContacts({ token, contacts }));
        swal('Contacts have been deleted!', {
          icon: 'success',
        });
      }
    });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <Filter />
      <Button
        onClick={buttonHandle}
        variant="contained"
        type="submit"
        style={{ width: '100%', background: 'rgb(200, 20, 40)' }}
      >
        Delete All Contacts
      </Button>
    </div>
  );
}
