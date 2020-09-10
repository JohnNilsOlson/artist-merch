import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type='text'
          name='name'
          placeholder='Name of piece'/>
        <textarea
          name='description'
          placeholder='Short description'/>
        <input
          type='text'
          name='medium'
          placeholder='What mediums were used'/>
        <input
          type='number'
          name='quantity'
          min='0'
          placeholder='How many are in stock'/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;