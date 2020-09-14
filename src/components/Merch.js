import React from 'react';
import PropTypes from 'prop-types';

function Merch(props){
  return (
    <React.Fragment>
      <div onClick={() => props.whenMerchClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p><em>{props.medium}</em></p>
        <p>Prints available: {props.quantity}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  medium: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenMerchClicked: PropTypes.func
};

export default Merch;