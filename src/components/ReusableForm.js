import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Label>Name of Piece</Form.Label>
          <Form.Control type='text' placeholder='Enter the name of the piece.' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control type='text' placeholder='Enter a description of the piece.' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Medium</Form.Label>
          <Form.Control type='text' placeholder='Enter the medium of the piece.' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <Form.Control type='number' placeholder='Enter the available quantity of the piece.' />
        </Form.Group>
        <Button variant='outline-dark' type='submit'>{props.buttonText}</Button>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;