
import React, { useEffect, useState } from 'react';
import Otpmodal from 'react-otp-input';
import { Row, Col, CardBody, Card, Container, Alert, Spinner } from 'reactstrap';
import {  useSelector } from 'react-redux';
import mogulLogo from 'assets/images/mogullogo.png';
import Confirm2faModal from 'components/UI/Model/authenticationmodals/confirm2faModal';
import './login.css';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const [time, setTime] = useState(30);
  const [timer, setTimer] = useState('');
  const [confirmModal, setConfirModal] = useState(false);
  const [error] = useState('');
  const handleChange = e => setOtp(e);
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

  const verifyOtp = () => {
    // dispatch(otpVerify())
    setConfirModal(true);
  };
  return (
    <>
      <div className="account-pages my-5 pt-sm-5 login__hero">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col className="container-otp">
              <Card className="otp-card">
                <div className="text-center mt-4">
                  <div className="d-block auth-logo">
                    <img src={mogulLogo} alt="" height="50" className="logo logo-dark" />
                  </div>
                </div>

                <CardBody className="p-4">
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      // localStorage.setItem('authToken', 'djsvhfguyhudbjm');
                    }}
                  >
                    <div className="text-center letters-space">
                      <h5 className="text-primary login__header">Verification Code</h5>
                      <p className="text-muted mt-3">
                        Enter the code generated in your Authenticator App
                      </p>
                    </div>
                    <div className="">
                      <div className="d-flex flex-row mt-5 otp-input">
                        <Otpmodal
                          numInputs={6}
                          value={otp}
                          onChange={handleChange}
                          isInputNum
                          shouldAutoFocus="true"
                          className="otpscreen"
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
                    <div className="mt-5 text-center">
                      <button
                        className="btn btn-primary w-sm waves-effect waves-light w-75"
                        type="button"
                        onClick={verifyOtp}
                      >
                        {isLoading ? <Spinner size="sm" /> : 'Authenticate'}
                      </button>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Confirm2faModal isOpen={confirmModal} />
    </>
  );
};
export default Otp;
