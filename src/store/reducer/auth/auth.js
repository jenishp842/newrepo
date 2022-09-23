import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLogin: false,
  isLoading: false,
  userData: null,
  authToken: '',
  errorMsg: '',
  fcmToken: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.LOGIN_START:
      return { ...state, isLoading: true, isLogin: false };
    case actionLabels.LOGIN_SUCCESS: {
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        authToken: payload.token,
        // fcmToken: payload.deviceToken,
        userData: payload,
        errorMsg: '',
      };
    }
    case actionLabels.LOGIN_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.CLEAR_AUTH: {
      return { ...state, isLogin: false, errorMsg: '' };
    }
    case actionLabels.OTP_VERIFY_SUCCESS: {
      return { ...state, authToken: 'dwhejbhrbjhfrbhjrf' };
    }
    default:
      return state;
  }
};
