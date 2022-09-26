import React, { useState } from 'react';
import { Col, Button } from 'reactstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
// import fiatwallet from '../../assets/images/wallet/fiatwallet.png';

import WalletWithdrawModal from '../../components/UI/Model/WalletWithdrawModal';
import WalletDepositModal from '../../components/UI/Model/WalletDepositModal';
import WalletDepositBankModal from '../../components/UI/Model/WalletDepositBankModal';
import WalletDepositConfirmModal from '../../components/UI/Model/WalletDepositConfirmModal';

import './wallet.css';

const WalletCard = ({ header, value }) => {
  const [withdraw, setWithdraw] = useState(false);
  const [depositBank, setDepositBank] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const [depositConfirm, setDepositConfirm] = useState(false);
  const [isDeposit, setIsDeposit] = useState(false);

  const withdrawModal = () => {
    setWithdraw(false);
  };

  const depositBankModal = () => {
    setDepositBank(true);
  };
  const depositConfirmModal = () => {
    setDepositConfirm(true);
  };

  const depositSuccess = () => {
    setIsDeposit(true);
  };
  return (
    <>
      {/* <div className="border-wallet"> */}
      <div className="page-content">
        <Col
          xl={12}
          md={12}
          sm={12}
          xs={12}
          className="wallet-card d-flex justify-content-between border-wallet p-3"
        >
          {/* <div className="d-flex justify-content-center"> */}
          <div />
          <div>
            <div className="justify-content-center euro-mobile">
              <div className="euro">{/* <img src={fiatwallet} alt="Euro" /> */}</div>
              <div className="text-center euro-text">
                <div className="header f600 font-size-14">{header}</div>
                <div className="primary f600 font-size-24">{value}</div>
              </div>
            </div>
          </div>

          <div>
            <div className="fiat-wallet-button p-3">
              <Button
                type="button"
                className="button__secondary w-100 m-1"
                onClick={() => setWithdraw(true)}
              >
                Withdraw
              </Button>
              <Button
                type="button"
                className="button__primary w-100 m-1"
                onClick={() => setDeposit(true)}
              >
                Deposit
              </Button>
            </div>
          </div>

          {withdraw && (
            <WalletWithdrawModal
              isOpen={withdraw}
              close={() => setWithdraw(false)}
              continue={() => withdrawModal()}
            />
          )}

          {deposit && (
            <WalletDepositModal
              isOpen={deposit}
              close={() => setDeposit(false)}
              continue={() => depositBankModal()}
            />
          )}
          {depositBank && (
            <WalletDepositBankModal
              isOpen={depositBank}
              close={() => setDepositBank(false)}
              confirm={() => depositConfirmModal()}
            />
          )}

          {depositConfirm && (
            <WalletDepositConfirmModal
              isOpen={depositConfirm}
              close={() => setDepositConfirm(false)}
              success={() => depositSuccess()}
            />
          )}
          {isDeposit && (
            <SweetAlert
              title={isDeposit}
              success
              confirmBtnBsStyle="success"
              onConfirm={() => setIsDeposit(false)}
            />
          )}
        </Col>
      </div>
    </>
  );
};
export default WalletCard;
