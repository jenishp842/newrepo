import React from 'react';
import { Button, Modal } from 'reactstrap';
// import toaster from '../../../../hoc/Toaster/Toaster';

import './Model.scss';

const WalletDepositConfirmModal = props => {
  const handleSubmit = () => {
    // toaster(
    //   <div>
    //     <p className="fw-bold m-0 small">Transaction Successful</p>
    //     <p className="m-0 small">The amount transfer is initiated from the account</p>
    //   </div>,
    //   {
    //     type: 'success',
    //     className: 'toaster-success',
    //   },
    // );
    props.close();
  };

  return (
    <>
      <Modal centered isOpen={props.isOpen} className="payment_modals">
        <div className="modal_header justify-content-center pb-0">
          <h5 className="modal-title mt-0 fw-bold" id="myModalLabel">
            Confirmation
          </h5>

          <button
            type="button"
            onClick={() => {
              props.close();
            }}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal_body text-center">
          <p>Are you sure you want to cancel the transaction?</p>
        </div>
        <div className="modal_footer justify-content-center">
          <Button className="btn button__remove px-4 mx-1" onClick={() => props.close(false)}>
            Discard
          </Button>
          <Button
            className="btn button__primary px-4 mx-1"
            onClick={() => {
              handleSubmit();
            }}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default WalletDepositConfirmModal;
