import React, { useEffect } from 'react';
import listcss from './contactlist.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

import { deleteContactsThunk, fetchDataThunk } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  const filter = useSelector(selectFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <div>
      {filterContacts.length > 0 ? (
        <ul className={listcss.list}>
          {filterContacts.map(({ id, name, phone }) => (
            <li key={id}>
              {name}: {phone}
              <button
                className={listcss.btn}
                onClick={() => dispatch(deleteContactsThunk(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>We couldn't find any contacts matching your request.</p>
      )}
    </div>
  );
};
