import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {

    const { contacts } = this.props;
    const { onDeleteContact } = this.props;  
    return (
      <ul className={css.list}>
        {contacts.map(contact => (
          <Contact
            key={nanoid()}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};