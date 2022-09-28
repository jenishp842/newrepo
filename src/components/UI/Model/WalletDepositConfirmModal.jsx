import React from 'react';
import { Button, Modal } from 'reactstrap';
// import toaster from '../../../hoc/SetTokenHeader/Toaster/Toaster';

import './Model.scss';

const WalletDepositConfirmModal = ({ isOpen, close }) => {
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
    close();
  };

  const onClickCloseHandler = () => {
    close();
  };

  return (
    <>
      <Modal centered isOpen={isOpen} className="payment_modals">
        <div className="modal-header justify-content-center pb-0">
          <h5 className="modal-title mt-0 fw-bold" id="myModalLabel">
            Confirmation
          </h5>

          <button
            type="button"
            onClick={onClickCloseHandler}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body text-center">
          <p>Are you sure you want to cancel the transaction?</p>
        </div>
        <div className="modal-footer justify-content-center">
          <Button className="btn button__remove px-4 mx-1" onClick={() => close(false)}>
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
