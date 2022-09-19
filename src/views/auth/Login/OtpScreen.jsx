/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
// Redux
import { Link, useHistory } from 'react-router-dom';
import Otpmodal from 'react-otp-input';

import { Row, Col, CardBody, Card, Container, Alert, Spinner } from 'reactstrap';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
// import * as actions from '../../store/actions';
// import images
import mogulLogo from '../../../assets/images/mogullogo.png';
// import ForcePasswordModal from '../UI/Model/ForcePasswordModal';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const [time, setTime] = useState(30);
  const [timer, setTimer] = useState('');
  const [forcePassword, setForcepassword] = useState(false);
  const [error, setError] = useState('');
  const [Token, setToken] = useState('');
  const handleChange = e => setOtp(e);
  const dispatch = useDispatch();
  const history = useHistory();
  const number = localStorage.getItem('mobile');
  const code = localStorage.getItem('c-code');
  const remember = localStorage.getItem('remembered');
  const str = `${code}${number}`.replace(/.(?=.{4})/g, 'X');
  const { isLoading } = useSelector(state => state.auth);
  // useEffect(() => {
  //   if (!localStorage.getItem('islogin')) {
  //     history.push('/signin');
  //   }

  //   return () => {
  //     localStorage.removeItem('islogin');
  //   };
  // }, []);
  useEffect(() => {
    if (time) {
      clearTimeout(timer);
      setTimer(
        setTimeout(() => {
          setTime(time - 1);
        }, 1000),
      );
    }
  }, [time]);
  const forceUpdate = token => {
    setToken(token);
    setForcepassword(true);
  };
  return (
    <>
      <div className="account-pages my-5 pt-sm-5 login__hero">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card>
                <div className="text-center mt-4">
                  <div className="d-block auth-logo">
                    <img src={mogulLogo} alt="" height="35" className="logo logo-dark" />
                  </div>
                </div>

                <CardBody className="p-4">
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      // localStorage.setItem('authToken', 'djsvhfguyhudbjm');
                    }}
                  >
                    <div className="text-center">
                      <h5 className="text-primary login__header">Verification Code</h5>
                      <p className="text-muted mt-3">
                        Enter the code generated in your Authenticator App
                      </p>
                    </div>
                    <div className="">
                      <div className="d-flex flex-row mt-4 otp-input">
                        <Otpmodal
                          numInputs={6}
                          value={otp}
                          onChange={handleChange}
                          isInputNum
                          shouldAutoFocus="true"
                          inputStyle={{
                            padding: 10,
                            marginRight: 20,
                            border: '1px solid #828A9C',
                            borderRadius: 3,
                            width: 40,
                            height: 50,
                          }}
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="my-3">
                        <Alert color="danger">{error}</Alert>
                      </div>
                    )}
                    <div className="mt-3 text-end">
                      <button
                        className="btn btn-primary w-sm waves-effect waves-light w-100"
                        type="submit"
                      >
                        {!isLoading ? <Spinner size="sm" /> : 'Authenticate'}
                      </button>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Otp;
