import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props){
  const { merch, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Merch Details</h1>
      <h2>{merch.name}</h2>
      <h2>{merch.description}</h2>
      <h2>{merch.medium}</h2>
      <h2>{merch.quantity}</h2>
      <button onClick={props.onClickingEdit}>Update Merch</button>
      <button onClick={() => onClickingDelete(merch.id)}>Delete Merch</button>
    </React.Fragment> 
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default MerchDetail;