import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, CardBody, Card, Container, Alert, Spinner } from 'reactstrap';
import './login.css';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { useSelector, useDispatch } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import * as actions from 'store/actions';
import Scan2FAModal from 'components/UI/Model/authenticationmodals/scan2FAmodal';
import Select2faModal from 'components/UI/Model/authenticationmodals/select2FA';
import mogulLogo from 'assets/images/mogullogo.png';
import ForgotPasswordModal from 'components/UI/Model/authenticationmodals/forgotPasswordModal';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [remember, setRemember] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [show, setShow] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [selct2fa, setSelect2fa] = useState(false);
  const [scan2fa, setScan2fa] = useState(false);
  const { isLogin, errorMsg, isLoading, userData } = useSelector(state => state.auth);

  useEffect(
    () => () => {
      dispatch(actions.clearAuth());
    },
    [],
  );
  const handleSubmit = (err, val) => {
    dispatch(actions.login(val));
  };
  useEffect(() => {
    if (isLogin) {
      if (!userData.isSuperAdmin) {
        if (userData.isForcePasswordUpdate) {
          history.push('/reset-password');
          return;
        }
        if (userData.isFirstTimeLogin) {
          setSelect2fa(true);
          return;
        }
        history.push('/otp');
        return;
      }
      history.push('/otp');
      localStorage.setItem('islogin', true);
      localStorage.setItem('remembered', remember);
    }
  }, [isLogin]);
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
                  <div className="text-center">
                    <h5 className="text-primary login__header">Login</h5>
                  </div>
                  <div className="p-2 mt-4">
                    {errorMsg && (
                      <div>
                        <Alert color="danger">{errorMsg}</Alert>
                      </div>
                    )}
                    <AvForm className="form-horizontal" onValidSubmit={handleSubmit}>
                      <div className="mb-3">
                        <AvField
                          name="email"
                          label="Email"
                          value=""
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                          errorMessage="Email is required"
                        />
                      </div>

                      <div className="mb-3">
                        <div className="float-end" style={{ cursor: 'pointer', color: 'blue' }}>
                          <a onClick={() => setForgot(true)}>Forgot password?</a>
                        </div>
                        <Col sm={12} className="d-flex justify-content-end">
                          <AvField
                            name="password"
                            label="Password"
                            value=""
                            type={show ? 'text' : 'password'}
                            errorMessage="Password is required"
                            required
                            placeholder="Enter password"
                          />
                          <i
                            onClick={() => setShow(prev => !prev)}
                            className={
                              show
                                ? 'fas fa-eye-slash position-absolute mx-3'
                                : 'fas fa-eye position-absolute mx-3'
                            }
                            style={{ marginTop: '42px', paddingRight: '15px' }}
                          />
                        </Col>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                          checked={remember}
                          onChange={() => setRemember(i => !i)}
                        />
                        <label className="form-check-label" htmlFor="customControlInline">
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3 text-end">
                        <button
                          className="btn btn-primary w-sm waves-effect waves-light w-100 py-2"
                          type="submit"
                        >
                          {isLoading ? <Spinner size="sm" /> : 'Log In'}
                        </button>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Select2faModal isOpen={selct2fa} onClose={setSelect2fa} next={setScan2fa} />
        <Scan2FAModal isOpen={scan2fa} onClose={setScan2fa} />
        {successAlert && (
          <SweetAlert
            title="Temporary password sent successfully, please login again"
            success
            confirmBtnBsStyle="success"
            onConfirm={() => setSuccessAlert(false)}
            // showCloseButton
          />
        )}
        {forgot && (
          <ForgotPasswordModal
            open
            close={setForgot}
            success={() => {
              setSuccessAlert(true);
              setForgot(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default Login;
