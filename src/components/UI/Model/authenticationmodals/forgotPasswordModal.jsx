import React, { useState } from 'react';
import { Col, Label, Form, Input, Modal } from 'reactstrap';
// import * as actions from '../../../store/actions';

import './authenticationModal.css';

const ForgotPasswordModal = ({ open, close }) => {
  const [error, setError] = useState('');
  const [values, setValues] = useState('');

  const handleChange = event => {
    setValues(event.target.value);
    if (error && event.target.value) {
      setError('');
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (!values) {
      setError('email is required');
    //   return;
    }
    // dispatch(actions.forgotPassword({ email: values, setError, success }));
  };
  return (
    <>
      <div>
        <div>
          <Modal isOpen={open} centered>
            <div className="modal-header">
              <h5 className="modal-title mt-0" id="myModalLabel">
                Forgot password
              </h5>
              <button
                type="button"
                onClick={() => {
                  close(false);
                }}
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Form onSubmit={handleSubmit}>
                <div className="row mb-4">
                  <Label for="horizontal-email-Input" className="col-sm-3 col-form-Label">
                    Enter email
                  </Label>
                  <Col sm={12} className="d-flex justify-content-end">
                    <Input
                      type="text"
                      placeholder=" Enter Email"
                      className="form-control"
                      onChange={handleChange}
                      id="horizontal-newpassword-Input"
                      value={values}
                      name="email"
                      bsSize="lg"
                    />
                  </Col>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Col className="text-center my-2">
                  <button
                    type="submit"
                    className="btn btn-primary waves-effect"
                    data-dismiss="modal"
                  >
                    Send Link
                  </button>
                </Col>
              </Form>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordModal;
