import * as actionLabels from '../../actionLabels';

export const loginStart = () => ({
  type: actionLabels.LOGIN_START,
});

export const login = payload => ({
  type: actionLabels.LOGIN_SAGA,
  payload,
});

export const loginSuccess = payload => ({
  type: actionLabels.LOGIN_SUCCESS,
  payload,
});

export const loginFail = payload => ({
  type: actionLabels.LOGIN_FAIL,
  payload,
});

export const authenticationValidator = () => ({
  type: actionLabels.AUTHENTICATION_VALIDATOR,
});

export const clearAuth = () => ({
  type: actionLabels.CLEAR_AUTH,
});

export const otpVerify = payload => ({
  type: actionLabels.OTP_VERIFY,
  payload,
});

export const otpVerifySuccess = () => ({
  type: actionLabels.OTP_VERIFY_SUCCESS,
});