import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends Component {
  render() {
    const { filter, handleSearch } = this.props;
    return (
      <>
        <label className={css.label}>
          Find contacts by name
          <input
            className={css.input}
            type="text"
            value={filter}
            onChange={handleSearch}
          />
        </label>
      </>
    );
  }
}
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};