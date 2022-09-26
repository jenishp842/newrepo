import React from 'react';
import { Spinner } from 'reactstrap';
import mogulLogo from 'assets/images/mogullogo.png';
import './Spinner.scss';

const LogoLoader = () => (
    <div>
      <img src={mogulLogo} alt="logo" height="100" width="100" />
      <Spinner />
    </div>
);

export default LogoLoader;
