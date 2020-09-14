import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditMerch (props) {
  const { merch } = props;

  function handleEditMerchFormSubmission(event) {
    event.preventDefault();
    props.onEditMerch({ name: event.target.name.value, description: event.target.description.value, medium: event.target.medium.value, quantity: event.target.quantity.value, id: merch.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleEditMerchFormSubmission}
        buttonText = "Update Merch" />
    </React.Fragment>
  );
}

EditMerch.propTypes = {
  onEditMerch: PropTypes.func
};

export default EditMerch;