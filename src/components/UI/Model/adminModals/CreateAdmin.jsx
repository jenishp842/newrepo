import React, { useState } from 'react';
import { Col, Label, Modal } from 'reactstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { AvField, AvForm } from 'availity-reactstrap-validation';

const CreateModal = ({ isOpen, close, model, disable }) => {
  const [number, setNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isSubmit, setSubmit] = useState(false);
  const [, setCountryCode] = useState('1');
  const handleChange = (x, num) => {
    const l = num.dialCode.length;
    const mobile = x.slice(l);
    setNumber(x);
    setPhone(mobile);
    setCountryCode(num.dialCode);
    if (isSubmit) {
      if (mobile) setError('');
      else setError('phone number is required');
    }
  };
  function togCreate() {
    close(false);
  }
  const submit = () => {
    setSubmit(true);
    if (!phone) {
      setError('phone number is required');
    }
  };

  return (
    <>
      <div>
        <div>
          <Modal centered isOpen={!!isOpen}>
            <div className="modal-header">
              <h5 className="modal-title mt-0" id="myModalLabel">
                Create Admin
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
              <AvForm onValidSubmit={submit} model={model} disabled={disable}>
                <div className="row mb-4">
                  <Label for="horizontal-firstname-Input" className="col-sm-3 col-form-Label">
                    Name
                  </Label>
                  <Col sm={12}>
                    <AvField
                      type="text"
                      className="form-control"
                      id="horizontal-firstname-Input"
                      name="name"
                      value=""
                      required
                      validate={{
                        pattern: {
                          value: /^([a-zA-Z ]{1,})$/i,
                          errorMessage: 'Enter valid Admin name',
                        },
                      }}
                      placeholder="Name"
                    />
                  </Col>
                </div>
                <div className="row mb-4">
                  <Label for="horizontal-email-Input" className="col-sm-3 col-form-Label">
                    Email
                  </Label>
                  <Col sm={12}>
                    <AvField
                      name="email"
                      value=""
                      className="form-control"
                      placeholder="Enter email"
                      type="email"
                      required
                      errorMessage="Email is required"
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                          errorMessage: 'Enter valid email',
                        },
                      }}
                    />
                  </Col>
                </div>
                <div className="row mb-4">
                  <Label for="horizontal-password-Input" className="col-sm-3 col-form-Label">
                    Number
                  </Label>
                  <Col sm={12}>
                    <PhoneInput
                      inputStyle={{ width: '100%', paddingLeft: '50px', height: '50px' }}
                      country="us"
                      enableSearch
                      disabled={disable}
                      value={number}
                      onChange={handleChange}
                      autoFormat={false}
                      name="mobileno"
                      inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true,
                      }}
                      countryCodeEditable={false}
                    />
                  </Col>
                  <p>{error}</p>
                </div>
                <div className="col-sm-auto">
                  <label className="" htmlFor="autoSizingSelect">
                    Select Role
                  </label>
                  <AvField
                    name="role"
                    type="select"
                    className="form-select p-2"
                    id="autoSizingSelect"
                    disabled
                  >
                    <option value="1" selected>
                      Default
                    </option>
                  </AvField>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    onClick={() => {
                      togCreate();
                    }}
                    className="btn btn-secondary waves-effect"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary waves-effect waves-light">
                    Submit
                  </button>
                </div>
              </AvForm>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default CreateModal;
