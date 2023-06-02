import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
class ContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value, id: nanoid() });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const value = this.state.name;
    const { contacts } = this.props;
    if (contacts.map(contact => contact.name).includes(value)) {
      alert(`${value} is already in contacts.`);
    } else {
      this.props.onSubmit(this.state);
    }
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form className={css.form} type="submit" onSubmit={this.handleSubmit}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label className={css.label}>
            Number
            <input
              className={css.input}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};