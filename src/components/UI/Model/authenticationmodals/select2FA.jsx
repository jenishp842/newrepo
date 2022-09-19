import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Input, ModalFooter, Button } from 'reactstrap';
import './authenticationModal.css';

const Select2faModal = ({ isOpen, onClose, next }) => {
  const [method, setMethod] = useState('GA');
  const toggle = () => {
    onClose(prev=>!prev);
  };
  const onContinue = () => {
     toggle()
    if(method==='GA') next(true);
  };
  const handleChange = e => {
    setMethod(e.target.value);
  };
  return (
    <>
      <Modal isOpen={isOpen} centered>
        <ModalHeader className="header2famethod" toggle={toggle}>
          Select Option To Setup 2FA
        </ModalHeader>
        <ModalBody>
          <div className="selcect2fabody">
            <div>
              <Input
                type="radio"
                name="method"
                value="GA"
                checked={method === 'GA'}
                onChange={handleChange}
              />
              <h5 className="radioinput">Google Authenticator </h5>
            </div>
            <div>
              <Input
                type="radio"
                value="none"
                name="method"
                checked={method === 'none'}
                onChange={handleChange}
              />
              <h5 className="radioinput"> None </h5>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="footer2famethod">
          <Button color="primary" onClick={onContinue}>
            Continue
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Select2faModal;
