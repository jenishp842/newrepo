import { all, takeLatest } from 'redux-saga/effects';
import * as actionLabels from '../actionLabels';
import {
  loginSaga,
  authenticationValidatorSaga,
  otpVerifySaga,
} from './auth/auth';


export function* watchAuthentication() {
  yield all([
    takeLatest(actionLabels.LOGIN_SAGA, loginSaga),
    takeLatest(actionLabels.OTP_VERIFY, otpVerifySaga),
    takeLatest(actionLabels.AUTHENTICATION_VALIDATOR, authenticationValidatorSaga),
  ]);
}