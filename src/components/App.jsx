import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  } 
  componentDidMount(){
    const savedContacts = localStorage.getItem("contacts");
    if(!savedContacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    } else {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({contacts: parsedContacts})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  deleteContact = evt => {
    const { contacts } = this.state;
    const deleteContact = contacts.filter(
      contact => contact.id !== evt.currentTarget.id
    );
    this.setState({ contacts: [...deleteContact] });
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;
    this.setState({ contacts: [...contacts, data] });
  };

  handleSearch = evt => {
    this.setState({ filter: evt.target.value });
  };

  displaySearchresults = () => {
    const { filter } = this.state;
    const { contacts } = this.state;
    const filteredContacts = contacts.filter(contact => {
      const searchResultLower = filter.toLowerCase();
      const contactNameLover = contact.name.toLowerCase();
      return contactNameLover.includes(searchResultLower);
    });
    return filteredContacts;
  };

  render() {
    const filteredContacts = this.displaySearchresults();
    return (
      <div className={css.section}>
        <div className={css.form}>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm
            onSubmit={this.formSubmitHandler}
            contacts={this.state.contacts}
          />
        </div>
        <div className={css.form}>
          <h2 className={css.subtitle}>Contacts</h2>
          <Filter filter={this.state.filter} handleSearch={this.handleSearch} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}