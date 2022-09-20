import React, { useState } from 'react';
// Redux

import { Row, Col, CardBody, Card, Container, Alert, Spinner } from 'reactstrap';
import './login.css';

// availity-reactstrap-validation

import { AvForm, AvField } from 'availity-reactstrap-validation';
import { useSelector } from 'react-redux';
// import images

const ResetPassword = () => {
  const [show, setShow] = useState(false);
  const { errorMsg, isLoading } = useSelector(state => state.auth);

  return (
    <>
      <div className="account-pages my-5 pt-sm-5 login__hero">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card>
                <CardBody className="p-4">
                  <div className="text-center mt-4 mb-2">
                    <h5 className="Reset__header">Reset Password</h5>
                  </div>
                  <div className="p-2 mt-4">
                    {errorMsg && (
                      <div>
                        <Alert color="danger">{errorMsg}</Alert>
                      </div>
                    )}
                    <AvForm className="form-horizontal">
                      <div className="mb-4">
                        <div>
                          <AvField
                            name="password"
                            value=""
                            type={show ? 'text' : 'password'}
                            errorMessage="Password is required"
                            required
                            placeholder="Enter New Password"
                          />
                        </div>
                        <div className="d-flex justify-content-end">
                          <i
                            onClick={() => setShow(prev => !prev)}
                            className={
                              show
                                ? 'fas fa-eye-slash position-absolute mx-3'
                                : 'fas fa-eye position-absolute mx-3'
                            }
                            style={{ marginTop: '-25px', paddingRight: '15px' }}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <div>
                          <AvField
                            name="password"
                            value=""
                            type={show ? 'text' : 'password'}
                            errorMessage="Password is required"
                            required
                            placeholder="Retype New Password"
                          />
                        </div>
                        <div className="d-flex justify-content-end">
                          <i
                            onClick={() => setShow(prev => !prev)}
                            className={
                              show
                                ? 'fas fa-eye-slash position-absolute mx-3'
                                : 'fas fa-eye position-absolute mx-3'
                            }
                            style={{ marginTop: '-25px', paddingRight: '15px' }}
                          />
                        </div>
                      </div>

                      <div className="mt-4 text-end">
                        <button
                          className="btn btn-primary w-sm waves-effect waves-light w-100 py-2"
                          type="button"
                          //   onClick={() => setSelect2fa(true)}
                        >
                          {!isLoading ? <Spinner size="sm" /> : 'Reset Password'}
                        </button>
                      </div>
                    </AvForm>
                  </div>
                  <div className="Reset_Para mt-3">
                    <p>
                      1. At least 12 characters with atleast 1 uppercase and 1 lowercase letters.
                    </p>
                    <p>2. A mixter of letters and Numbers.</p>
                    <p>3.Inclusion of at least one special character</p>
                    <p>4. Change password in every 90 Days to increase security.</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ResetPassword;
