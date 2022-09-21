import React, { useState } from 'react';
import { Row, Col, CardBody, Card, Container, Alert, Spinner } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './login.css';

const ResetPassword = () => {
  const [show, setShow] = useState({ password: false, conpassword: false });
  const { errorMsg, isLoading } = useSelector(state => state.auth);
  const history = useHistory();
  const handleShow = val => {
    setShow(prev => ({ ...prev, [val]: !prev[val] }));
  };
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
                      <div className="mb-5">
                        <div>
                          <AvField
                            name="password"
                            value=""
                            type={show.password ? 'text' : 'password'}
                            errorMessage="Password is required"
                            required
                            placeholder="Enter New Password"
                          />
                        </div>
                        <div className="d-flex justify-content-end reset__icon">
                          <i
                            onClick={() => handleShow('password')}
                            className={
                              show.password
                                ? 'fas fa-eye-slash position-absolute mx-3'
                                : 'fas fa-eye position-absolute mx-3'
                            }
                          />
                        </div>
                      </div>

                      <div className="mb-5">
                        <div>
                          <AvField
                            name="conpassword"
                            value=""
                            type={show.conpassword ? 'text' : 'password'}
                            errorMessage="Password is required"
                            required
                            placeholder="Retype New Password"
                          />
                        </div>
                        <div className="d-flex justify-content-end reset__icon">
                          <i
                            onClick={() => handleShow('conpassword')}
                            className={
                              show.conpassword
                                ? 'fas fa-eye-slash position-absolute mx-3'
                                : 'fas fa-eye position-absolute mx-3'
                            }
                          />
                        </div>
                      </div>

                      <div className="mt-4 text-end">
                        <button
                          className="btn btn-primary w-sm waves-effect waves-light w-100 py-2"
                          type="button"
                          onClick={() => history.push('/signin')}
                        >
                          {isLoading ? <Spinner size="sm" /> : 'Reset Password'}
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
