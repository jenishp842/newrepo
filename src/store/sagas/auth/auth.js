import { put } from 'redux-saga/effects';
// import errorHandler from 'utils/apiHandler';
// import { axios } from '../../../http';
import { loginSuccess, loginFail, loginStart, otpVerifySuccess } from '../../actions';

export function* loginSaga(action) {
  const { email, password } = action.payload;
  console.log(email, password);
  yield put(loginStart());
  try {
    // const response = yield axios.get('/api');
    const response = {
      status: 200,
      data: { isFirstTimeLogin: true, isForcePasswordUpdate: false, isSuperAdmin: false },
    };
    if (response.status === 200) {
      yield put(loginSuccess(response.data));
      // yield call([localStorage, 'setItem'], 'authToken', response.data.token);
    } else {
      yield put(loginFail('Something went wrong! Please try again.'));
    }
  } catch (error) {
    if (
      error !== undefined &&
      error.response !== undefined &&
      error.response.status !== undefined
    ) {
      if (error.response.status === 400) {
        yield put(loginFail(error.response.data.msg));
      } else if (
        error.response.data.msg !== undefined &&
        error.response.data.msg !== '' &&
        typeof error.response.data.msg === 'string'
      ) {
        yield put(loginFail(error.response.data.msg));
      } else {
        yield put(loginFail('Server error! Please try again.'));
      }
    } else {
      yield put(loginFail('Something went wrong! Please try again.'));
    }
  }
  // yield errorHandler({
  //   endpoint: '/auth/admin/login',
  //   successHandler: yield function* (response) {
  //     console.log(response);
  //     const { data } = response;
  //     yield put(loginSuccess(data));
  //   },
  //   failHandler: yield function* (response) {
  //     yield console.log(response);
  //     // yield put(loginFail(response));
  //   },
  //   payload: { email, password },
  //   failHandlerType: 'CUSTOM',
  //   apiType: 'post',
  // });
}

export function* otpVerifySaga() {
  // yield put(loginStart());
  yield put(otpVerifySuccess());
}

export function* authenticationValidatorSaga() {
  yield put(loginStart());
  const token = yield localStorage.getItem('authToken');
  if (!token) {
    yield put(loginFail(''));
    // yield put(logout()); // logout action
  } else {
    yield put(loginSuccess({ token }));
  }
}
