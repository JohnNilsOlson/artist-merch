import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function AddMerch(props){

  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({name: event.target.name.value, description: event.target.description.value, medium: event.target.medium.value, quantity: event.target.quantity.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewMerchFormSubmission}
        buttonText = "Add Merch"/>
    </React.Fragment>
  );
}

AddMerch.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default AddMerch;