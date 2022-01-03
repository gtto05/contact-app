import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';
import ContactDetail from './ContactDetail';

export default function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    // console.log(contact);
    setContacts([...contacts, { id: nanoid(), ...contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };
  useEffect(() => {
    const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContacts(retriveContact);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </Router>
    </div>
  );
}
