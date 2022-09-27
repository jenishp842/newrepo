import React from 'react';
import { Spinner } from 'reactstrap';
import mogulLogo from 'assets/images/mogullogo.png';
import './Spinner.scss';

const LogoLoader = () => (
  <>
    <div className="spinner-container">
      <div className="spinner-card">
        <img className="spinner-body mogulIn" src={mogulLogo} alt="logo" />
        <Spinner className="spinner-body spin-content" />
      </div>
    </div>
    <div className="modal-backdrop show" />
  </>
);

export default LogoLoader;
