import React from 'react';
import AddMerch from './AddMerch';
import MerchList from './MerchList';
import MerchDetail from './MerchDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditMerch from './EditMerch';
import Button from 'react-bootstrap/Button';

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMerch: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedMerch != null) {
      this.setState({
        selectedMerch: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: "TOGGLE_FORM"
      }
      dispatch(action);
    }
  }

  handleAddingNewMerchToList = (newMerch) => {
    const { dispatch } = this.props;
    const { id, name, description, medium, quantity } = newMerch;
    const action = {
      type: "ADD_MERCH",
      id: id,
      name: name,
      description: description,
      medium: medium,
      quantity: quantity,
    }
    dispatch(action);
    const action2 = {
      type: "TOGGLE_FORM"
    }
    dispatch(action2);
  }

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.props.masterMerchList[id];
    this.setState({selectedMerch: selectedMerch});
  }

  handleEditingMerchInList = (merchToEdit) => {
    const { dispatch } = this.props;
    const { id, name, description, medium, quantity } = merchToEdit;
    const action = {
      type: "ADD_MERCH",
      id: id,
      name: name,
      description: description,
      medium: medium, 
      quantity: quantity
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedMerch: null
    });
  }

  handleEditClick = () => {
    console.log("Edit Clicked!")
    this.setState({editing: true});
  }

  handleDeletingMerch = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_MERCH",
      id: id
    }
    dispatch(action);
    this.setState({selectedMerch: null});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditMerch merch = { this.state.selectedMerch } onEditMerch = { this.handleEditingMerchInList } />
      buttonText = "Return to Merch List";
    } else if (this.state.selectedMerch != null) {
      currentlyVisibleState = <MerchDetail merch = { this.state.selectedMerch } onClickingDelete = { this.handleDeletingMerch } onClickingEdit = { this.handleEditClick } />
      buttonText = "Return to Merch List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <AddMerch onNewMerchCreation={this.handleAddingNewMerchToList}/>
      buttonText = "Return to Merch List";
    } else {
      currentlyVisibleState = <MerchList merchList={this.props.masterMerchList} onMerchSelection={this.handleChangingSelectedMerch} />
      buttonText = "Add Merch";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant='outline-dark' onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterMerchList: state.masterMerchList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

MerchControl = connect(mapStateToProps)(MerchControl);

MerchControl.propTypes = {
  masterMerchList: PropTypes.object
}

export default MerchControl;