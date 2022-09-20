/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button,Input,Label,List } from 'reactstrap';
import './authenticationModal.css';

const Confirm2faModal = ({isOpen}) => {
  const [copied, setCopied] = useState(false);
  const history = useHistory();
  const copyToCLipBoard = value => {
    try {
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleContinue = () => {
    history.push('/signin');
  };
  return (
    <>
      <Modal isOpen={isOpen} centered>
        <ModalHeader >Setup 2FA</ModalHeader>
        <ModalBody className="scan2fabodycontainer">
          <div className="scan2fabody">
            <h5>Save your secret Recovery Password</h5>
            <div className="secretcode">
              <div>EEHEJHEHEBHCYU</div>

              <i
                role="button"
                className={copied ? 'fas fa-check color-green' : 'far fa-copy'}
                onClick={() => copyToCLipBoard('EEHEJHEHEBHCYU')}
              />
            </div>
            <List tag='ol' className='orderlist'>
           <li>Copy your secret recovery code.</li>
           <li>Keep your secret recovery code safe.</li>
           <li>You will only be able to recover your account through this code.</li>
            </List>
            <div>
                <Input type="checkbox"/>
                <Label className='ml-1' check>Yes, I have copied the code</Label>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="footer2famethod">
          <Button color="primary" className='w-50' onClick={handleContinue}>
            Done
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Confirm2faModal;
