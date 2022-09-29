import { AvField, AvForm } from 'availity-reactstrap-validation';
import React from 'react';
import { Button, Col, Modal } from 'reactstrap';

import './Model.scss';
// import toaster from '../../../hoc/SetTokenHeader/Toaster/Toaster';

const WalletWithdrawModal = ({ isOpen, close }) => {
  const handleSubmit = () => {
    // toaster(
    //   <div>
    //     <p className="fw-bold m-0 small">Withdrawal Successful</p>
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
      <Modal centered isOpen={isOpen} className="payment_modals ">
        <div className="modal-header justify-content-center pb-0">
          <h5 className="modal-title mt-0 fw-bold " id="myModalLabel">
            Withdraw
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
        <div className="modal-body">
          <div className="body-text mb-3 d-flex justify-content-between align-items-center">
            <div>
              <i className="fas fa-dollar-sign" />
              <span className="fw-bold ms-2">USD</span>
            </div>
            <div className="text-end">
              <p className="m-0 fw-bold">400.32</p>
              <p className="m-0">
                <i>Current balance</i>
              </p>
            </div>
          </div>
          <AvForm onValidSubmit={handleSubmit}>
            <Col sm="12" className="mb-3 position-relative mx-auto">
              <AvField
                name="address"
                type="text"
                value="Mogul Wallet"
                label="From"
                errorMessage="Address is required"
                disabled
                className="mb-3"
              />
            </Col>
            <Col sm="12" className="mb-3 position-relative mx-auto">
              <AvField type="select" name="userType" value="EnverX Wallet" label="To">
                <option>....xxxxx878</option>
              </AvField>
              <i className="fas fa-angle-down drop-down" />
            </Col>
            <Col sm="12" className="mb-1 position-relative">
              <AvField name="country" label={<h6>Amount</h6>} type="text" placeholder="0.00" />
              <p className="text-muted usd">
                <i>~USD</i>
              </p>
            </Col>
            <p className="small fw-bold">*0.00 USD will be transferred out of your wallet</p>
          </AvForm>
          <div className="d-flex fw-bold justify-content-between">
            <p className="small">
              <i>Transaction Fees</i>
            </p>
            <p className="small">$0.00</p>
          </div>
        </div>
        <div className="modal-footer justify-content-center pt-0">
          <Button
            className="btn btn-continue"
            onClick={() => {
              handleSubmit();
            }}
          >
            Confirm Transaction
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default WalletWithdrawModal;
