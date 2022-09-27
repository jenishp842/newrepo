import { AvForm, AvRadio, AvRadioGroup } from 'availity-reactstrap-validation';
import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'reactstrap';
// import toaster from '../../../../hoc/Toaster/Toaster';

import './Model.scss';

const WalletDepositModal = ({ isOpen, close, modal }) => {
  const [isActive, setIsActive] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const handleChange = e => {
    setIsActive(true);
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
            onClick={() => {
              close();
            }}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="body-text d-flex justify-content-between align-items-center">
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
          <AvForm className="mt-3">
            <Col sm="12" className="mb-3">
              <AvRadioGroup
                inline
                name="project"
                label={
                  <h6>
                    <strong>Select Deposit Method</strong>
                  </h6>
                }
                onChange={handleChange}
                required
              >
                <Row>
                  <Col sm="12">
                    <AvRadio
                      label={
                        <div>
                          <h6 className="fw-bold m-0">Bank Account</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fusce proin.
                          </p>
                        </div>
                      }
                      value="Bank"
                    />
                  </Col>
                  <Col sm="12">
                    <AvRadio
                      label={
                        <div>
                          <h6 className="fw-bold m-0">Wire Transfer</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fusce proin.
                          </p>
                        </div>
                      }
                      value="Wire"
                    />
                  </Col>
                </Row>
              </AvRadioGroup>
            </Col>
          </AvForm>
        </div>
        <div className="modal-footer justify-content-center pt-0 ">
          <Button
            className="btn btn-continue"
            disabled={!isActive}
            onClick={() => {
              modal();
              close(false);
            }}
          >
            Continue
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default WalletDepositModal;
