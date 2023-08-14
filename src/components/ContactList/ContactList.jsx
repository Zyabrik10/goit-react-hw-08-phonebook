import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selector';
import { selectFilteredContacts } from 'redux/filter/filter-selectors';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import { selectAuth } from 'redux/auth/auth-selector';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { Spin } from 'components/Loading/Spin/Spin';

import swal from 'sweetalert';

export default function ContactList() {
  const dispatch = useDispatch();

  const { token } = useSelector(selectAuth);

  const { isLoading, error } = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts(token));
  }, [dispatch, token]);

  function removeFromContactsListHandler({ currentTarget: target }) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this contact!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        target.setAttribute('disabled', 'true');
        const id = target.getAttribute('data-id');
        dispatch(deleteContact({ id, token }));
        swal('Contact has been deleted!', {
          icon: 'success',
        });
      }
    });
  }

  function returnContacts() {
    return (
      <TableContainer
        component={Paper}
        style={{
          width: '100%',
          maxWidth: '450px',
          margin: '0 auto',
        }}
      >
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Number</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredContacts.map(({ number, name, id }) => (
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="center">{number}</TableCell>
                <TableCell align="right">
                  <IconButton
                    data-id={id}
                    aria-label="delete"
                    onClick={removeFromContactsListHandler}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  function showContacts() {
    return filteredContacts.length ? (
      returnContacts()
    ) : (
      <p className="global-p">No contacts</p>
    );
  }

  function showError() {
    return error ? <p className="global-p">{error}</p> : showContacts();
  }

  return isLoading ? <Spin /> : showError();
}
