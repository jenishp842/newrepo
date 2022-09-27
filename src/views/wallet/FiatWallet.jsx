import React, { useState } from 'react';

import { Container, Col, Button, TabContent, NavItem, Nav, TabPane, NavLink } from 'reactstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import Table from 'components/Table/Table';
import { fiatColumn, withdrawColumn } from 'constants/tableColumn';
import Breadcrumb from 'components/BreadCrumb';
import classnames from 'classnames';
import fiatwallet from '../../assets/images/fiatwallet.png';

import WalletWithdrawModal from '../../components/UI/Model/WalletWithdrawModal';
import WalletDepositModal from '../../components/UI/Model/WalletDepositModal';
import WalletDepositBankModal from '../../components/UI/Model/WalletDepositBankModal';
import WalletDepositConfirmModal from '../../components/UI/Model/WalletDepositConfirmModal';

import './wallet.css';

const WalletCard = () => {
  const [withdraw, setWithdraw] = useState(false);
  const [depositBank, setDepositBank] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const [depositConfirm, setDepositConfirm] = useState(false);
  const [isDeposit, setIsDeposit] = useState(false);
  const [activeTabJustify2, setactiveTabJustify2] = useState('25');

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

  function toggleCustomJustified2(tab) {
    if (activeTabJustify2 !== tab) {
      setactiveTabJustify2(tab);
    }
  }

  return (
    <>
      {/* <div className="border-wallet"> */}
      <div className="page-content">
        <Breadcrumb name="Fiat Wallet" />
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
              <div className="euro">
                <img src={fiatwallet} alt="Euro" />
              </div>
              <div className="text-center euro-text">
                <div className="header f600 font-size-14">USD Available</div>
                <div className="primary f600 font-size-24">$5,000</div>
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
              modal={() => withdrawModal()}
            />
          )}

          {deposit && (
            <WalletDepositModal
              isOpen={deposit}
              close={() => setDeposit(false)}
              modal={() => depositBankModal()}
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
        <Container fluid>
          <div className="table-background">
            <Nav pills className="nav-justified bg-light p-2">
              <NavItem className="waves-effect waves-light">
                <NavLink
                  className={classnames({
                    active: activeTabJustify2 === '25',
                  })}
                  onClick={() => {
                    toggleCustomJustified2('25');
                  }}
                >
                  <span className="d-none d-sm-block">Deposit</span>
                </NavLink>
              </NavItem>
              <NavItem className="waves-effect waves-light">
                <NavLink
                  className={classnames({
                    active: activeTabJustify2 === '26',
                  })}
                  onClick={() => {
                    toggleCustomJustified2('26');
                  }}
                >
                  <span className="d-none d-sm-block">WithDraw</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTabJustify2} className="p-3 text-muted">
              <TabPane tabId="25">
                <Table column={fiatColumn} />
              </TabPane>
              <TabPane tabId="26">
                <Table column={withdrawColumn} />
              </TabPane>
            </TabContent>
          </div>
        </Container>
      </div>
    </>
  );
};
export default WalletCard;
