import { AvField, AvForm } from 'availity-reactstrap-validation';
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';


const BlockUserModel = ({ isOpen, onClose}) => {
  
  
  const toggle = () => {
    onClose(prev=>!prev);
  };
  
  
  return (
    
    <>
      <Modal isOpen={isOpen} toggle={toggle} centered>
        <ModalHeader className="mx-auto" toggle={toggle}>Block User</ModalHeader>
        <ModalBody>
        <AvForm className="form-horizontal" >
                      <div className="mb-3">
                        <AvField
                          name="reson_for_block"
                          label="Reson For Block"
                          value=""
                          className="form-control h-25"
                          bsSize="lg"
                          type="textarea"
                          required
                          errorMessage="This is required field"
                        />
                      </div>
        </AvForm>
        </ModalBody>
        <ModalFooter>
          <Button color="primary w-50 mx-auto" onClick={toggle}>
            Block User
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default BlockUserModel