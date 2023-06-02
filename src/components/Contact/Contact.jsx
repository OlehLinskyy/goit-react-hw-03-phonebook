import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

class Contact extends Component {
  render() {
    const { contact } = this.props;
    const { onDeleteContact } = this.props;
    return (
      <li className={css.list}>
        <div className={css.contact_value}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
        </div>
        <button
          className={css.button}
          id={contact.id}
          type="button"
          onClick={onDeleteContact}
        >
          Delete
        </button>
      </li>
    );
  }
}
export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape().isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};