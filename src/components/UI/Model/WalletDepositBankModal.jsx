import { AvField, AvForm } from 'availity-reactstrap-validation';
import React from 'react';
import { Button, Col, Modal } from 'reactstrap';

import './Model.scss';

const WalletDepositBankModal = ({ isOpen, close, confirm }) => {
  const onClickHandler = () => {
    confirm();
    close(false);
  };

  const onClickCloseHandler = () => {
    close();
  };

  return (
    <>
      <Modal centered isOpen={isOpen} className="payment_modals">
        <div className="modal-header justify-content-center pb-0">
          <h5 className="modal-title mt-0 fw-bold" id="myModalLabel">
            Deposit
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
          <AvForm className="mt-3">
            <Col sm="12" className="mb-3  position-relative">
              <AvField name="country" label={<h6>Select Bank Account</h6>} type="select">
                <option>select</option>
              </AvField>
              <i className="fas fa-angle-down drop-down" />
            </Col>
            <Col sm="12" className="mb-3 position-relative">
              <AvField
                name="country"
                label={<h6>Enter Deposit Amount</h6>}
                type="text"
                placeholder="0.00"
              />
              <p className="text-muted usd">
                <i>~USD</i>
              </p>
            </Col>
          </AvForm>
          <p className="text-center small">
            You will get <strong>$10,425.00</strong> once the transaction is processed.
          </p>
        </div>
        <div className="modal-footer justify-content-center pt-0">
          <Button className="btn btn-continue" onClick={onClickHandler}>
            Confirm Transaction
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default WalletDepositBankModal;
